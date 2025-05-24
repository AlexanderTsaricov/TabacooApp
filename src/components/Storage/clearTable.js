import requestToBD from "./requestToBD";
import setupDatabase from './setupDatabase';

export default async function clearTabacooTable(tableName) {
    try {
        const sqlClearString = `
            drop table ${tableName};
        `
        // Открываем (или создаём) базу
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });
        const result = requestToBD(db, sqlClearString);
        setupDatabase('tabacoo', ['name', 'brand']);
        setupDatabase('tastes', ['taste']);
        setupDatabase('tekstures', ['teksture', 'type']);
        return result;
    } catch (err) {
        console.error('Error clear table:', err);
    }
}