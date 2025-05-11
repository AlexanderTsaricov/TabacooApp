// src/components/Storage/loadDataFromTable.js

/**
 * Осуществляет SQL-запрос и возвращает результат.
 * @param {object} db — объект базы данных из window.sqlitePlugin.openDatabase
 * @param {string} sql — SQL-запрос
 * @returns {Promise<{ response: boolean, result?: any, error?: any }>}
 */
function requestToBD(db, sql) {
    return new Promise(resolve => {
      db.transaction(tx => {
        tx.executeSql(
          sql,
          [],
          (_, res) => resolve({ response: true, result: res }),
          (_, err) => resolve({ response: false, error: err })
        );
      });
    });
  }
  
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
