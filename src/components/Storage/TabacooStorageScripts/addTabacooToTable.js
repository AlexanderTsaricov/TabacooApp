import requestToBD from "../requestToBD.js";
  
  /**
   * Add tabacoo to table if this don`t have in table.
   * @param {string} name 
   * @param {string} brand 
   */
  export async function addTabacooToTable(name, brand) {
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
        console.error('→ code:', error.code);
        console.error('→ message:', error.message);
        console.dir(error);
      }
    } catch (err) {
      console.error('Не удалось добавить данные в БД:', err);
    }
  }
  