function filterTastesByType(tastesData, selectedTypes = []) {
    if (selectedTypes.length > 0) {
        const filtredTabacoos = [];
        tastesData.forEach(tabacoo => {
            if (selectedTypes.includes(tabacoo.type)) {
                filtredTabacoos.push(tabacoo);
            }
        });
        return filtredTabacoos;
    } else {
        return tastesData;
    }
}

function filterTastesByString(tastesData, searchString='') {
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

function filterTaste(tastesData, searchString='', selectedTypes = []) {
    const filtredTabacoosByBrands = filterTastesByType(tastesData, selectedTypes);
    const result = filterTastesByString(filtredTabacoosByBrands, searchString);
    return result;
}

export default filterTaste;