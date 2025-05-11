import * as xlsx from 'xlsx';
/**
 * Loaded data from xlsx or xls and return JSON
 * @param {String} file object
 * @param {int} list number
 * @returns return json string
 */
export default async function loadDataFromXls (file, list) {
    return new Promise ((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = new Uint8Array(event.target.result);
                const workbook = xlsx.read(data, { type: 'array'});
                const firstSheetName = workbook.SheetNames[list];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = xlsx.utils.sheet_to_json(worksheet);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsArrayBuffer(file);

    });
}