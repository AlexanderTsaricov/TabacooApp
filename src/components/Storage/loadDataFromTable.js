import requestToBD from "./requestToBD.js";
  
/**
 * Loading data from table
 * If don`t  have table return array
 * @param tableName - table name
 * @returns {Promise<Array>} — array
 */
export async function loadDataFromTable(tableName) {
  const db = window.sqlitePlugin.openDatabase({
    name: 'tabacooDB',
    location: 'default'
  });

  
  const sql = `SELECT * FROM ${tableName}`;
  const { response, result, error } = await requestToBD(db, sql);

  if (response) {
    const items = [];
    for (let i = 0; i < result.rows.length; i++) {
      items.push(result.rows.item(i));
    }
    return items;
  } else {
    console.error(`Ошибка при чтении данных из ${tableName}:`, error);
    return [];
  }
}
