// src/components/Storage/addDataToTable.js

/**
 * Обёртка для выполнения SQL-запроса в базе данных.
 * Всегда резолвит объектом { response: boolean, result?, error? }.
 */
function requestToBD(db, sql, params = []) {
    return new Promise(resolve => {
      db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, res) => resolve({ response: true, result: res }),
          (_, err) => resolve({ response: false, error: err })
        );
      });
    });
  }
  
  /**
   * Добавляет запись в таблицу tabacoo, если такой записи ещё нет.
   * @param {string} name 
   * @param {string} brand 
   */
  export async function addDataToTable(name, brand) {
    try {
      // Открываем (или создаём) базу
      const db = window.sqlitePlugin.openDatabase({
        name: 'tabacooDB',
        location: 'default'
      });
  
      // Проверяем, есть ли уже такая запись
      const selectSQL = 'SELECT * FROM tabacoo WHERE name = ? AND brand = ?';
      const { response: has, result: selectRes } = await requestToBD(db, selectSQL, [name, brand]);
  
      if (!has) {
        console.error('Ошибка при проверке существующих записей:', selectRes?.error);
        return;
      }
  
      if (selectRes.rows.length > 0) {
        console.log('Запись уже существует. Добавление отменено.');
        return;
      }
  
      // Вставляем новую запись
      const insertSQL = 'INSERT INTO tabacoo (name, brand) VALUES (?, ?)';
      const { response: ok, result: insertRes, error } = await requestToBD(db, insertSQL, [name, brand]);
  
      if (ok) {
        console.log('Данные успешно добавлены:', insertRes);
      } else {
        console.error('Ошибка при добавлении данных:', error);
      }
    } catch (err) {
      console.error('Не удалось добавить данные в БД:', err);
    }
  }
  