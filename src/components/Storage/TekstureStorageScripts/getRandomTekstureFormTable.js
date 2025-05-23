import { loadDataFromTable } from "../loadDataFromTable";
import Taste from "../../Model/Taste";

export default async function getRandomTakstureFromTable(selectedTypes = []) {
    const data = await loadDataFromTable('tekstures');

    /**
     * @todo вставить фильтр
     */

    const randomNumber = Math.floor(Math.random() * filteredData.length);

    return new Taste(data[randomNumber]);
}