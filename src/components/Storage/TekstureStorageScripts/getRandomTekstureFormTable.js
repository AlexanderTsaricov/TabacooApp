import { loadDataFromTable } from "../loadDataFromTable";
import Teksture from "../../Model/Teksture";

/**
 * Returns random teksture object from table
 * @param {Array} selectedTypes types of teksture
 * @returns {Teksture} Teksture object
 */
export default async function getRandomTakstureFromTable(selectedTypes = []) {
    const data = await loadDataFromTable('tekstures');
    const tekstures = [];

    if (selectedTypes.length > 0) {
        data.forEach(row => {
            if (selectedTypes.includes(row['type'])) {
                tekstures.push(new Teksture(row.teksture, row.type));
            }
        });
    } else {
        data.forEach(row => {
            tekstures.push(new Teksture(row.teksture, row.type));
        });
    }
    

    console.log(`Start random by ${tekstures.length} textures objects, loaded data ${data.length} row`);

    const randomNumber = Math.floor(Math.random() * tekstures.length);

    return tekstures[randomNumber];
}