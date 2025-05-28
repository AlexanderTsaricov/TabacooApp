/**
 * 
 * @param {Array} teksturesData Array with Textures objects
 * @param {Array} selectedTypes Array with strings types of textures
 * @returns {Array} Filtred by types array with Textures objects
 */
function filterTeksturesByType(teksturesData, selectedTypes = []) {
    if (selectedTypes.length > 0) {
        const filtredTekstures = [];
        tastesData.forEach(teksture => {
            if (teksturesData.includes(teksture.type)) {
                filtredTekstures.push(teksture);
            }
        });
        return filtredTekstures;
    } else {
        return teksturesData;
    }
}
/**
 * 
 * @param {Array} teksturesData Array with Textures objects
 * @param {String} searchString Sought string in Textures names
 * @returns {Array} Filtred by searchString array with Textures objects
 */
function filterTeksturesByString(teksturesData, searchString='') {
    if (searchString.length > 0) {
        const filtredTekstures = [];
        teksturesData.forEach(teksture => {
            if (teksture.teksture.toLowerCase().includes(searchString.toLowerCase())) {
                filtredTekstures.push(teksture);
            }
        });
        return filtredTekstures;
    } else {
        return teksturesData;
    }
}
/**
 * 
 * @param {Array} teksturesData Array with Textures objects
 * @param {String} searchString Sought string in Textures names
 * @param {Array} selectedTypes Array with strings types of textures
 * @returns {Array} Filtred by types and sought strng array with Textures objects
 */
function filterTekstures(teksturesData, searchString='', selectedTypes = []) {
    const filtredTeksturesByType = filterTeksturesByType(teksturesData, selectedTypes);
    const result = filterTeksturesByString(filtredTeksturesByType, searchString);
    return result;
}

export default filterTekstures;