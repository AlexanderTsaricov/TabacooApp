import requestToBD from "./requestToBD.js";
  
/**
 * Загружает все записи из таблицы tabacoo.
 * Если таблицы нет — возвращает пустой массив.
 * @returns {Promise<Array>} — массив строк
 */
export async function loadDataFromTable() {
  // Открываем или создаём базу (setupDatabase уже гарантировал, что таблица есть)
  const db = window.sqlitePlugin.openDatabase({
    name: 'tabacooDB',
    location: 'default'
  });

  // Попробуем выполнить выборку
  const sql = 'SELECT * FROM tabacoo';
  const { response, result, error } = await requestToBD(db, sql);

  if (response) {
    // result.rows — это объект, у которого есть .length и .item(i)
    const items = [];
    for (let i = 0; i < result.rows.length; i++) {
      items.push(result.rows.item(i));
    }
    return items;
  } else {
    console.error('Ошибка при чтении данных из tabacoo:', error);
    return [];
  }
}
