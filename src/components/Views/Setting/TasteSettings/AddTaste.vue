<template>
    <form class="addTasteForm">
        <h2 class="addTasteForm_header">Добавить вкус</h2>
        <label for="name">Название вкуса</label>
        <input class="addTasteForm_inputName" v-model="taste" id="taste" type="taste">
        <label for="type">Текстура продукта</label>
        <input class="addTasteForm_inputType" v-model="teksture" id="teksture" type="text">
        <label for="type">Тип продукта</label>
        <input class="addTasteForm_inputType" v-model="type" id="type" type="text">
        <button class="addTasteForm_submit">Submit</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
            taste: "",
            teksture: "",
            type: "",
            };
        },
    }
</script>