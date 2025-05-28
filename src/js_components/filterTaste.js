/**
 * 
 * @param {Array} tastesData Array with tastes objects 
 * @param {String} searchString Sought string in tastes name
 * @returns {Array} Filtred by searchString array with Tastes objects
 */
function filterTaste(tastesData, searchString='') {
    if (searchString.length > 0) {
        const filtredTabacoos = [];
        tastesData.forEach(taste => {
            if (taste.taste.toLowerCase().includes(searchString.toLowerCase())) {
                filtredTabacoos.push(taste);
            }
        });
        return filtredTabacoos;
    } else {
        return tastesData;
    }
}

export default filterTaste;