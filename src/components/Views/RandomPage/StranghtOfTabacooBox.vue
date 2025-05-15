<script>
    import BrandBox from './BrandBox.vue';
    import { ref, onMounted, watch } from 'vue';
    import getBrandsFromTable from '../../Storage/TabacooStorageScripts/getBrandsFromTable.js';

    export default {
        components: {
            BrandBox
        },
        setup(_, { emit }) {
            const brands = ref([]); // Все бренды
            const selectedBrands = ref([]); // Выбранные бренды

            onMounted(async () => {
                brands.value = await getBrandsFromTable();
            });

            const updateSelection = ({ brand, checked }) => {
                if (checked) {
                    selectedBrands.value.push(brand); // Добавляем бренд, если чекбокс выбран
                } else {
                    selectedBrands.value = selectedBrands.value.filter(b => b !== brand); // Удаляем бренд, если чекбокс снят
                }
                emit('update-selected-brands', selectedBrands.value);
            };

            return {
                brands,
                selectedBrands,
                updateSelection
            };
        }
    };
    // TODO: не изменяются данные выбранных чекбоксов
</script>

<template>
    <details class="stranghtTabacooBox">
        <summary class="stranghtTabacooBox_header">Brand select</summary>
        <div class="brand-grid">
            <BrandBox
                v-for="(brand, index) in brands"
                :key="index"
                :brand="brand"
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
