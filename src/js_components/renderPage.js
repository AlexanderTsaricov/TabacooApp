import getPageInstanceArray from "./getPageInstanseArray";
/**
 * Render page by active button menu
 * @param {Integer} activeButton id active button
 */
export default function renderPage(activeButton) {
    const instanceArray = getPageInstanceArray();

    // check have instance for activeButton
    if (!instanceArray[activeButton]) {
        console.error(`Инстанс для кнопки "${activeButton}" не найден.`);
        return;
    }

    const container = document.querySelector(".activePageBox");

    // check have element in DOM
    if (!container) {
        console.error('Элемент с классом ".activePageBox" не найден.');
        return;
    }

    // check the previously created instance and decreate this
    if (container.__vue_app__) {
        container.__vue_app__.unmount();
    }

    // Creating new instance
    try {
        instanceArray[activeButton].mount(".activePageBox");
    } catch (error) {
        console.error("Ошибка при монтировании инстанса:", error);
    }
}
