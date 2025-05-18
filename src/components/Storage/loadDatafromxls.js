import * as xlsx from 'xlsx';

/**
 * Loaded data from xlsx or xls and return JSON
 * @param {File} file
 * @param {number} list
 * @returns {Promise<Object[]>}
 */
export default async function loadDataFromXls(file, list) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = xlsx.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[list];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = xlsx.utils.sheet_to_json(worksheet);
          resolve(jsonData);
        } catch (innerErr) {
          reject(innerErr);
        }
      };

      reader.onerror = (err) => {
        reject(err?.target?.error || err);
      };

      console.log('Чтение файла:', file.name, file);
      reader.readAsArrayBuffer(file);
    } catch (outerErr) {
      reject(outerErr);
    }
  });
}
