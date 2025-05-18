import { loadDataFromTable } from "../loadDataFromTable";

export default async function getTypesFromTable() {
    const data = await loadDataFromTable('tastes');
    const types = [];

    data.forEach(taste => {
        if (!types.includes(taste.type)) {
            types.push(taste.type);
        }
    });

    return types;
}