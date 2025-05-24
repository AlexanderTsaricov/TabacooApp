<template>
  <div class="stranghtTabacooBox_selectBox">
    <input
      type="checkbox"
      :name="brand"
      :id="brand"
      class="stranghtTabacooBox_checkbox"
      @change="handleChange($event)"
    />
    <label class="stranghtTabacooBox_label" :for="brand">
      {{ brand }}
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
        font-size: 16px;
        color: #e0e0e0;
        cursor: pointer;
        transition: color 0.3s ease, font-weight 0.3s ease;
        user-select: none;
        display: inline-block;
    }

    /* Полностью скрыть стандартный чекбокс */
    .stranghtTabacooBox_checkbox {
        display: none;
    }

    /* Изменяем стиль текста, когда чекбокс активен */
    .stranghtTabacooBox_checkbox:checked + .stranghtTabacooBox_label {
        color: #ffcc00;
        font-weight: bold;
    }

</style>