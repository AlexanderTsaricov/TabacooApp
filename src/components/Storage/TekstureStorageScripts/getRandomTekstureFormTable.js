import { loadDataFromTable } from "../loadDataFromTable";
import Teksture from "../../Model/Teksture";

export default async function getRandomTakstureFromTable(selectedTypes = []) {
    const data = await loadDataFromTable('tekstures');
    const tekstures = [];

    data.forEach(row => {
        if (selectedTypes.includes(row['type'])) {
            tekstures.push(new Teksture(row['teksture'], row['type']));
        }
    });

    const randomNumber = Math.floor(Math.random() * tekstures.length);

    return tekstures[randomNumber];
}