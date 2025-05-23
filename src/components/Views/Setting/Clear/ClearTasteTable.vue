<template>
    <div class="clearTablesBox">
        <button class="clearTasteTable" @click="clearTasteTable">Очистить таблицу вкусов</button>
    </div>
</template>

<script>
    import clearTable from "../../../Storage/clearTable.js";
    export default {
        methods: {
            async clearTabacooTable () {
                try {
                    await clearTable('tabacoo');
                    alert("Данные успешно очищены!");
                    console.log("Таблица tabacoo очищена");
                } catch (err) {
                    console.error("Ошибка при очистке tabacoo:", err);
                }
            },
            async clearTasteTable () {
                try {
                    await clearTable('tastes');
                    alert("Данные успешно очищены!");
                    console.log("Таблица tastes очищена");
                } catch (err) {
                    console.error("Ошибка при очистке tastes:", err);
                }
            }
        }
    }
</script>

<style scoped>
    .clearTablesBox {
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: stretch;
        max-width: 100%;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    .clearTabacooTable,
    .clearTasteTable {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        text-align: center;
    }

    .clearTabacooTable:active,
    .clearTasteTable:active {
        background-color: #ff6666;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }
</style>
