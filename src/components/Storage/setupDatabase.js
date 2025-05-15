import { Capacitor } from '@capacitor/core';
import requestToBD from './requestToBD.js';
export default async function setupDatabase(tableName, rowsArray) {
  const sqlHasDB = `SELECT * FROM ${tableName} LIMIT 1`;

  // Составляем список столбцов в массиве
  const columns = [
    'id INTEGER PRIMARY KEY AUTOINCREMENT',
    // а дальше — ваши поля
    ...rowsArray.map(col => `${col} TEXT NOT NULL`)
  ];

  // Собираем SQL одним шаблонным литералом
  const sqlCreateDB = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columns.join(',\n      ')}
    );
  `;

  console.log(`SQL для создания ${tableName}:\n${sqlCreateDB}`);

  try {
    const db = window.sqlitePlugin.openDatabase({
      name: 'tabacooDB',
      location: 'default'
    });

    // проверяем, есть ли таблица
    const hasDB = await requestToBD(db, sqlHasDB, []);
    if (hasDB.response) {
      return db;
    }

    // создаём таблицу
    const resultDB = await requestToBD(db, sqlCreateDB, []);
    if (resultDB.response) {
      return db;
    } else {
      console.error(`Ошибка при создании БД - ${tableName}`, resultDB.error);
    }
  } catch (error) {
    console.error(`Ошибка при работе с БД - ${tableName}`, error);
  }
}
