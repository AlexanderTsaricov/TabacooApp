import requestToBD from "../requestToBD.js";

export default async function deleteTasteFromTable(taste, teksture, type) {
    const sqlHas = 'SELECT * FROM tastes WHERE taste = ? AND teksture = ? AND type = ?';
    const sqlDelete = 'DELETE FROM tastes WHERE taste = ? AND teksture = ? AND type = ?';
    try {
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });

        const hasTabacoo = (await requestToBD(db, sqlHas, [taste, teksture, type])).response;
        if (hasTabacoo) {
            const resultDelete = await requestToBD(db, sqlDelete, [taste, teksture, type]);
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