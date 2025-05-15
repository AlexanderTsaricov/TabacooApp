import { loadDataFromTable } from "./loadDataFromTable";

async function getRandomTabacooFromTable(selectedBrands = []) {
    const data = await loadDataFromTable('tabacoo');
    const filtredData = [];
    
    if (selectedBrands.length < 1) {
        const randomNumber = Math.floor(Math.random() * data.length);
        return data[randomNumber];
    }

    const filteredData = data.filter(item => selectedBrands.includes(item.brand));
    const randomNumber = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomNumber];
    
}

export default getRandomTabacooFromTable;