
/**
 * Do request to database and return result
 * @param {object} db — object DB from window.sqlitePlugin.openDatabase
 * @param {string} sql — SQL-reqest
 * @returns {Promise<{ response: boolean, result?: any, error?: any }>}
 */
async function requestToBD (db, sql, params = []) {
    
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                sql, 
                params, 
                (tx, res) => {
                    resolve({
                        response: true,
                        result: res,
                        db: db
                    });
                },
                (_, error) => resolve({
                    response: false,
                    error: error
                })
            );
        })
    })
}

export default requestToBD;