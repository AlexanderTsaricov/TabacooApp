<script>
    import TypesSelectBox from './TypesSelectBox.vue';
    import { ref, onMounted, watch } from 'vue';
    import getTypesFromTable from '../../Storage/TasteStorageScripts/getTypesFromTable.js';

    export default {
        components: {
            TypesSelectBox
        },
        setup(_, { emit }) {
            const types = ref([]); // Все типы
            const selectedTypes = ref([]); // Выбранные типы

            onMounted(async () => {
                types.value = await getTypesFromTable();
            });

            const updateSelection = ({ type, checked }) => {
                if (checked) {
                    selectedTypes.value.push(type); // Добавляем тип, если чекбокс выбран
                } else {
                    selectedTypes.value = selectedTypes.value.filter(b => b !== type); // Удаляем тип, если чекбокс снят
                }
                console.log('Emitting update-selected-types:', JSON.stringify(selectedTypes.value));
                emit('update-selected-types', selectedTypes.value);
            };

            return {
                types,
                selectedTypes,
                updateSelection
            };
        }
    };
</script>

<template>
    <details class="stranghtTabacooBox">
        <summary class="stranghtTabacooBox_header">Type select</summary>
        <div class="brand-grid">
            <TypesSelectBox
                v-for="(type, index) in types"
                :key="index"
                :type="type"
                @update-selection="updateSelection"
            />
        </div>
    </details>
</template>

<style scoped>
    .brand-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 колонки */
        gap: 10px; /* Отступы между элементами */
        margin-top: 10px; /* Отступ от заголовка */
    }


    .stranghtTabacooBox {
        background-color: #2a2a40; /* Основной фон блока */
        border-radius: 10px; /* Закругленные углы */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Тень для эффекта всплытия */
        padding: 15px 20px; /* Пространство внутри блока */
        margin: 15px auto; /* Центровка и отступы */
        transition: max-height 0.3s ease, opacity 0.3s ease; /* Плавное раскрытие */
        max-width: 400px; /* Ограничение ширины блока */
        overflow: hidden; /* Предотвращение разрыва содержимого */
    }

    .stranghtTabacooBox[open] {
        max-height: 500px; /* Раскрытие при открытии */
        opacity: 1;
    }

    .stranghtTabacooBox_header {
        font-size: 18px;
        font-weight: bold;
        color: #80d4ff; /* Акцентный цвет заголовка */
        cursor: pointer; /* Указатель при наведении */
        text-shadow: none; /* Убрана тень для заголовка */
    }
</style>
