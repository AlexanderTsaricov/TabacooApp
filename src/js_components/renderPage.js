import getPageInstanceArray from "./getPageInstanseArray";

export default function renderPage(activeButton) {
    const instanceArray = getPageInstanceArray();

    // Проверяем, существует ли инстанс для activeButton
    if (!instanceArray[activeButton]) {
        console.error(`Инстанс для кнопки "${activeButton}" не найден.`);
        return;
    }

    const container = document.querySelector(".activePageBox");

    // Проверяем, существует ли элемент в DOM
    if (!container) {
        console.error('Элемент с классом ".activePageBox" не найден.');
        return;
    }

    // Проверяем, был ли ранее смонтирован другой инстанс и размонтируем его
    if (container.__vue_app__) {
        //console.log("Размонтирование предыдущего инстанса.");
        container.__vue_app__.unmount();
    }

    // Монтируем новый инстанс
    try {
        instanceArray[activeButton].mount(".activePageBox");
        //console.log(`Инстанс для "${activeButton}" успешно смонтирован.`);
    } catch (error) {
        console.error("Ошибка при монтировании инстанса:", error);
    }
}
