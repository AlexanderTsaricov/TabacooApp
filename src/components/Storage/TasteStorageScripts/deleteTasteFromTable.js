import requestToBD from "../requestToBD.js";

async function deleteTasteFromTable(taste) {
    const sqlHas = 'SELECT * FROM tastes WHERE taste = ?';
    const sqlDelete = 'DELETE FROM tastes WHERE taste = ?';
    try {
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });

        const hasTabacoo = (await requestToBD(db, sqlHas, [taste])).response;
        if (hasTabacoo) {
            const resultDelete = await requestToBD(db, sqlDelete, [taste]);
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

export default deleteTasteFromTable;