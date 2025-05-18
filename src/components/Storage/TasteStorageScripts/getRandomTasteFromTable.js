import { loadDataFromTable } from "../loadDataFromTable";

export default async function getRandomTasteFromTable(selectedTypes = []) {
    const data = await loadDataFromTable('tastes');
    console.log('Выбранные типы для рандома:');
    selectedTypes.forEach(type => {
        console.log(type);
    });

    if (selectedTypes.length < 1) {
        const randomNumber = Math.floor(Math.random() * data.length);
        return data[randomNumber];
    }

    const filteredData = data.filter(item => selectedTypes.includes(item.type));

    if (filteredData.length === 0) {
        console.warn('Нет вкусов по выбранным типам:', selectedTypes);
        return null;
    }

    const randomNumber = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomNumber];
}
