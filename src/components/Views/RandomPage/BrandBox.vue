<template>
    <div class="stranghtTabacooBox_selectBox">
            <label class="stranghtTabacooBox_label">
                {{brand}}
                <input 
                    type="checkbox" 
                    :name="brand" 
                    :id="brand" 
                    class="stranghtTabacooBox_checkbox"
                    @change="handleChange($event)"
                >
            </label>
        </div>
</template>

<script>
    export default {
        props: {
            brand: {
                type: String, // Тип данных, который ожидается
                required: true // Указывает, что пропс обязателен
            }
        },
        methods: {
            handleChange(event) {
                this.$emit('update-selection', { brand: this.brand, checked: event.target.checked })
            }
        }
    };
</script>

<style scoped>

    .stranghtTabacooBox_label {
        font-size: 16px; /* Размер шрифта текста */
        color: #e0e0e0; /* Цвет текста */
        display: flex;
        align-items: center; /* Выравнивание текста и чекбокса */
        gap: 10px; /* Расстояние между текстом и чекбоксом */
        cursor: pointer; /* Указатель при наведении */
    }

    .stranghtTabacooBox_checkbox {
        width: 20px; /* Ширина чекбокса */
        height: 20px; /* Высота чекбокса */
        accent-color: #ffcc00; /* Цвет галочки */
        border: 2px solid #ffcc00; /* Граница чекбокса */
        border-radius: 4px; /* Закруглённые углы чекбокса */
        cursor: pointer; /* Указатель при наведении */
    }

    .stranghtTabacooBox_checkbox:checked {
        transform: none; /* Убираем увеличение при выборе */
    }
</style>