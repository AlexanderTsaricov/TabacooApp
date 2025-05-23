import requestToBD from "../requestToBD.js";

export default async function deleteTasteFromTable(teksture, type) {
    const sqlHas = 'SELECT * FROM tekstures WHERE teksture = ? AND type = ?';
    const sqlDelete = 'DELETE FROM tekstures WHERE teksture = ? AND type = ?';
    try {
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });

        const hasTabacoo = (await requestToBD(db, sqlHas, [teksture, type])).response;
        if (hasTabacoo) {
            const resultDelete = await requestToBD(db, sqlDelete, [teksture, type]);
            return resultDelete;
        } else {
            return {
                response: false
            }
        }
    } catch (error) {
        console.error('Ошибка при удалении данных\n', error);
    }
}