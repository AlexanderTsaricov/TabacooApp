<template>
    <form class="addTabacooBox" @submit.prevent="handleSubmit">
        <h2 class="addTabacooBox_headerText">Добавить табак</h2>
        <div class="addTabacooBox_cateoryBox">
            <label for="tabacooName" addTabacooBox_label>Название табака</label>
            <input class="addTabacooBox_input" v-model="name" id="tabacooName" name="name" type="text" required>
        </div>
        <div class="addTabacooBox_cateoryBox">
            <label for="tabacooBrand" addTabacooBox_label>Название бренда</label>
            <input class="addTabacooBox_input" v-model="brand" id="tabaccooBrand" name="brand" type="text" required>
        </div>
        <button class="addTabacooBox_submit" @click="handleAdd">Submit</button>
    </form>
</template>


<style scoped>
    .addTabacooBox {
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px; /* Расстояние между элементами */
        align-items: stretch; /* Полный размер внутренних элементов */
        max-width: 100%;
        margin: 0 auto; /* Центровка блока на странице */
        margin-bottom: 15px;
    }

    .addTabacooBox_headerText {
        font-size: 24px;
        font-weight: bold;
        color: #80d4ff; /* Яркий акцент для заголовка */
        text-align: center;
        margin-bottom: 15px;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }

    .addTabacooBox_cateoryBox {
        display: flex;
        flex-direction: column;
        gap: 10px; /* Пространство между label и input */
    }

    .addTabacooBox_label {
        font-size: 16px;
        color: #e0e0e0;
    }

    .addTabacooBox_input {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .addTabacooBox_submit {
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

    .addTabacooBox_submit:active {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    .loadTabacooFromXlsButton {
  display: block !important;
  background-color: red; /* Для визуального теста */
  color: white;
}

</style>


<script>
import { addTabacooToTable } from '../../../Storage/TabacooStorageScripts/addTabacooToTable.js';

export default {
  data() {
    return {
      name: "",
      brand: "",
      jsonData: null, // Данные из файла
    };
  },
  methods: {
    async handleAdd() {
      // Проверка на пустые поля
      if (!this.name.trim() || !this.brand.trim()) {
        alert("Пожалуйста, заполните все поля!");
        return;
      }

      try {
        // Попытка добавления данных
        const result = await addTabacooToTable(this.name, this.brand);
        console.log("Результат добавления:", result);

        // Очистка полей после добавления
        this.name = "";
        this.brand = "";
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
};
</script>