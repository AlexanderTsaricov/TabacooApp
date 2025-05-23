import { loadDataFromTable } from "../loadDataFromTable";

export default async function getTypesFromTable() {
    const data = await loadDataFromTable('tekstures');
    const types = [];

    data.forEach(teksture => {
        if (!types.includes(teksture.type)) {
            types.push(teksture.type);
        }
    });

    return types;
}