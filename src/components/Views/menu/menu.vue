<template>
    <menu  class="menu">
        <button class="menu_button" id="setting">Setting</button>
        <button class="menu_button" id="tabacooRand">Tabacoo Random</button>
        <button class="menu_button" id="tasteRand">Taste Random</button>
        <button class="menu_button" id="tabacooList">Tabacoo list</button>
        <button class="menu_button" id="tasteList">Taste list</button>
    </menu>
</template>

<style scoped>
    .menu {
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: grid;
        grid-template-rows: auto auto; /* Первая строка для "Setting", вторая — для остальных кнопок */
        gap: 15px;
    }

    .menu_button:first-child {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        grid-column: 1 / -1; /* "Setting" кнопка занимает всю ширину */
        transition: background-color 0.3s ease, transform 0.2s ease;
        justify-self: center;
    }

    .menu_button:first-child:active {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    .menu {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Остальные кнопки располагаются в 2 колонки */
        gap: 15px;
        justify-items: center;
    }

    .menu_button:not(:first-child) {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px 12px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .menu_button:not(:first-child):hover {
        background-color: #ffcc00;
        color: #1e1e2f;
        transform: scale(1.05);
    }

    .menu_button__active {
        background-color: #ff9966 !important;
        color: #1e1e2f !important;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5) !important;
    }
</style>

<script>
    export default {
        mounted() {
            const firstButtonMenu = document.querySelector("#tabacooRand");
            if (firstButtonMenu) {
                firstButtonMenu.classList.add("menu_button__active");
            } else {
                console.error("Элемент с id #tabacooRand не найден.");
            }
        },
    };
</script>