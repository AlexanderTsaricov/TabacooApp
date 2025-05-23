import { loadDataFromTable } from "../loadDataFromTable";
import Taste from "../../Model/Taste";

export default async function getRandomTasteFromTable() {
    const data = await loadDataFromTable('tastes');
    const randomNumber = Math.floor(Math.random() * filteredData.length);

    return new Taste(data[randomNumber]);
}
