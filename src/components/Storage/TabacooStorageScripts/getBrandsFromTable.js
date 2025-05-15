import { loadDataFromTable } from "../loadDataFromTable";

/**
 * Loading brands from database and add to array
 * and filters out duplicates
 * @returns array with brands from database
 */
async function getBrandsFromTable () {
    const data = await loadDataFromTable('tabacoo');
    const brands = [];

    data.forEach(tabacoo => {
        if (!brands.includes(tabacoo.brand)) {
            brands.push(tabacoo.brand);
        }
    });

    return brands;
}

export default getBrandsFromTable;