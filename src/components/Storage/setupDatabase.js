import { Capacitor } from '@capacitor/core';
import requestToBD from './requestToBD.js';
export default async function setupDatabase() {
    const sqlHasDB = 'SELECT * FROM tabacoo LIMIT 1';
    const sqlCreateDB = `
        CREATE TABLE IF NOT EXISTS tabacoo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            brand TEXT NOT NULL
        );
    `;

    try {
        const db = window.sqlitePlugin.openDatabase({ name: 'tabacooDB', location: 'default' });
        const hasDB = await requestToBD(db, sqlHasDB);

        if (hasDB.response) {
            return db;
        } else {
            const resultDB = await requestToBD(db, sqlCreateDB);

            if (resultDB.response) {
                return db;
            } else {
                console.error("Ошибка при создании БД\n");
            }
        }
    } catch (error) {
        console.error('Ошибка при работе с БД\n', error);
    }
}