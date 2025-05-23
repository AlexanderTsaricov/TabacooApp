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

function filterTaste(tastesData, searchString='') {
    const result = filterTastesByString(tastesData, searchString);
    return result;
}

export default filterTaste;