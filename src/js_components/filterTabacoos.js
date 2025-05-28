/**
 * 
 * @param {Array} tabacooData Array with objects Tabacoo.
 * @param {Array} selectedBrands Array with string.
 * @returns {Array} Returns array with filtred by brands objects
 */
function filterTabacoosByBrands(tabacooData, selectedBrands = []) {
    if (selectedBrands.length > 0) {
        const filtredTabacoos = [];
        tabacooData.forEach(tabacoo => {
            if (selectedBrands.includes(tabacoo.brand)) {
                filtredTabacoos.push(tabacoo);
            }
        });
        return filtredTabacoos;
    } else {
        return tabacooData;
    }
}
/**
 * 
 * @param {Array} tabacooData Array with objects Tabacoo.
 * @param {String} searchString Sought string in Tabacoos name
 * @returns 
 */
function filterTabaccosByString(tabacooData, searchString='') {
    if (searchString.length > 0) {
        const filtredTabacoos = [];
        tabacooData.forEach(tabacoo => {
            if (tabacoo.name.toLowerCase().includes(searchString.toLowerCase())) {
                filtredTabacoos.push(tabacoo);
            }
        });
        return filtredTabacoos;
    } else {
        return tabacooData;
    }
}
/**
 * 
 * @param {*} tabacooData Array with objects Tabacoo.
 * @param {*} searchString Sought string in Tabacoos name
 * @param {*} selectedBrands Sought brands in tabacooData
 * @returns Filtred by sought string and brands array with objects Tabacoo.
 */
function filtredTabacoos(tabacooData, searchString='', selectedBrands = []) {
    const filtredTabacoosByBrands = filterTabacoosByBrands(tabacooData, selectedBrands);
    const result = filterTabaccosByString(filtredTabacoosByBrands, searchString);
    return result;
}

export default filtredTabacoos;