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

function filtredTabacoos(tabacooData, searchString='', selectedBrands = []) {
    const filtredTabacoosByBrands = filterTabacoosByBrands(tabacooData, selectedBrands);
    const result = filterTabaccosByString(filtredTabacoosByBrands, searchString);
    return result;
}

export default filtredTabacoos;