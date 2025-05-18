import requestToBD from "./requestToBD";

export default async function clearTabacooTable(tableName) {
    try {
        const sqlClearString = `
            delete from ${tableName};
            delete from sqlite_sequence where name = '${tableName}';
        `
        // Открываем (или создаём) базу
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });
        const result = requestToBD(db, sqlClearString);
        return result;
    } catch (err) {
        console.error('Error clear table:', err);
    }
}