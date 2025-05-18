<template>
    <form class="addTasteForm">
        <h2 class="addTasteForm_header">Добавить вкус</h2>
        <label for="name">Название вкуса</label>
        <input class="addTasteForm_input" v-model="taste" id="taste" type="taste">
        <label for="type">Текстура продукта</label>
        <input class="addTasteForm_input" v-model="teksture" id="teksture" type="text">
        <label for="type">Тип продукта</label>
        <input class="addTasteForm_input" v-model="type" id="type" type="text">
        <button class="addTasteForm_submit" @click="handleAdd">Submit</button>
    </form>
</template>

<script>
    import addTasteToTable from '../../../Storage/TasteStorageScripts/addTasteToTable';
    export default {
        data() {
            return {
            taste: "",
            teksture: "",
            type: "",
            };
        },
        methods: {
            async handleAdd() {
            // Проверка на пустые поля
            if (!this.taste.trim() || !this.teksture.trim() || !this.type.trim()) {
                alert("Пожалуйста, заполните все поля!");
                return;
            }

            try {
                // Попытка добавления данных
                const result = await addTasteToTable(this.taste, this.teksture, this.type);
                console.log("Результат добавления:", result);

                // Очистка полей после добавления
                this.taste = "";
                this.teksture = "";
                this.type = "type"
                alert("Данные успешно добавлены!");
            } catch (error) {
                console.error('Ошибка при добавлении данных:', error);
                console.error('→ code:', error.code);
                console.error('→ message:', error.message);
                console.dir(error);
                alert("Произошла ошибка при добавлении данных.");
            }
            },
        },
    }
    
</script>

<style scoped>
    .addTasteForm {
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
        max-width: 100%;
        margin: 0 auto 15px;
    }

    .addTasteForm_header {
        font-size: 24px;
        font-weight: bold;
        color: #80d4ff;
        text-align: center;
        margin-bottom: 10px;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }

    .addTasteForm_field {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .addTasteForm_label {
        font-size: 16px;
        color: #e0e0e0;
    }

    .addTasteForm_input {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .addTasteForm_input:focus {
        outline: none;
        background-color: #373754;
    }

    .addTasteForm_submit {
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
    }

    .addTasteForm_submit:active {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }
</style>