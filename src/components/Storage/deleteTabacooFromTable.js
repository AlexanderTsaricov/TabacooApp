import requestToBD from "./requestToBD.js";

export async function deleteTabacoo(tabacooName, tabacooBrand) {
    const sqlHas = 'SELECT * FROM tabacoo WHERE name = ? AND brand = ?';
    const sqlDelete = 'DELETE FROM tabacoo WHERE name = ? AND brand = ?';
    try {
        const db = window.sqlitePlugin.openDatabase({
            name: 'tabacooDB',
            location: 'default'
        });

        const hasTabacoo = (await requestToBD(db, sqlHas, [tabacooName, tabacooBrand])).response;
        if (hasTabacoo) {
            const resultDelete = await requestToBD(db, sqlDelete, [tabacooName, tabacooBrand]);
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