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

function filterTekstures(teksturesData, searchString='', selectedTypes = []) {
    const filtredTeksturesByType = filterTeksturesByType(teksturesData, selectedTypes);
    const result = filterTeksturesByString(filtredTeksturesByType, searchString);
    return result;
}

export default filterTekstures;