import requestToBD from "./requestToBD";
import setupDatabase from './setupDatabase';

/**
 * Delete table <tableName> and try create tables
 * tabacoo, tastes and tekstures
 * @param {string} tableName name of table in database
 * @returns result of clearing
 */
export default async function clearTabacooTable(tableName) {
    try {
        const sqlClearString = `
            drop table ${tableName};
        `
        // open or create database
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