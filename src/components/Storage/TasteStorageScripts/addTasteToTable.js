import requestToBD from "../requestToBD.js";
  
  /**
   * Add tabacoo to table if this don`t have in table.
   * @param {string} taste
   */
  export default async function addTasteToTable(taste) {
    try {
      // Открываем (или создаём) базу
      const db = window.sqlitePlugin.openDatabase({
        name: 'tabacooDB',
        location: 'default'
      });
  
      // Проверяем, есть ли уже такая запись
      const selectSQL = 'SELECT * FROM tastes WHERE taste = ?';
      const { response: has, result: selectRes } = await requestToBD(db, selectSQL, [taste]);
  
      if (!has) {
        console.error('Ошибка при проверке существующих записей:', selectRes?.error);
        return;
      }
  
      if (selectRes.rows.length > 0) {
        console.log('Запись уже существует. Добавление отменено.');
        return;
      }
  
      // Вставляем новую запись
      const insertSQL = 'INSERT INTO tastes (taste) VALUES (?)';
      const { response: ok, result: insertRes, error } = await requestToBD(db, insertSQL, [taste]);
  
      if (ok) {
        console.log('Данные успешно добавлены в tastes:', insertRes);
      } else {
        console.error('Ошибка при добавлении данных:', error);
        console.error('→ code:', error.code);
        console.error('→ message:', error.message);
        console.dir(error);
      }
    } catch (err) {
      console.error('Не удалось добавить данные в БД tastes:', err);
    }
  }
  