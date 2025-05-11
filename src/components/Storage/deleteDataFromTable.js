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

function requestToBD(db, sql, params = []) {
    return new Promise(resolve => {
      db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, res) => resolve({ response: true, result: res }),
          (_, err) => resolve({ response: false, error: err })
        );
      });
    });
  }