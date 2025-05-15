<template>
    <div class="addTabacooBox">
      <h2 class="addTabacooBox_headerText">Удалить табак</h2>
      <div class="addTabacooBox_cateoryBox">
        <label for="tabacooName" class="addTabacooBox_label">Название табака</label>
        <input
          v-model="name"
          class="addTabacooBox_input"
          id="tabacooName"
          name="name"
          type="text"
          placeholder="Введите название"
        />
      </div>
      <div class="addTabacooBox_cateoryBox">
        <label for="tabacooBrand" class="addTabacooBox_label">Название бренда</label>
        <input
          v-model="brand"
          class="addTabacooBox_input"
          id="tabacooBrand"
          name="brand"
          type="text"
          placeholder="Введите бренд"
        />
      </div>
      <button class="addTabacooBox_submit" @click="handleDel">Submit</button>
    </div>
  </template>

<style scoped>
    .addTabacooBox {
        background-color: #2a1e2e; /* Более темный цвет для удаления */
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px; /* Расстояние между элементами */
        align-items: stretch; /* Полный размер внутренних элементов */
        max-width: 400px;
        margin: 0 auto; /* Центровка блока на странице */
        margin-bottom: 15px;
    }

    .addTabacooBox_headerText {
        font-size: 24px;
        font-weight: bold;
        color: #ff6b6b; /* Яркий акцент на удаление (красный оттенок) */
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
        background-color: #3a2a40; /* Немного темнее для визуального разделения */
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .addTabacooBox_submit {
        background-color: #3a2a40;
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
        background-color: #ff4d4d; /* Более насыщенный красный при нажатии */
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }

</style>

<script>
import {deleteTabacoo} from '../../../Storage/TabacooStorageScripts/deleteTabacooFromTable.js';

export default {
  data() {
    return {
      name: "",
      brand: ""
    };
  },
  methods: {
    async handleDel() {
      // Проверка на пустые поля
      if (!this.name.trim() || !this.brand.trim()) {
        return alert("Пожалуйста, заполните все поля!");
      }

      try {
        const result = await deleteTabacoo(this.name.trim(), this.brand.trim());
        console.log("Результат удаления:", result);

        if (result.response) {
          alert("Запись успешно удалена!");
        } else {
          alert("Запись не найдена или не удалилась.");
        }

        // Очистка полей
        this.name = "";
        this.brand = "";
      } catch (error) {
        console.error("Ошибка при удалении данных:", error);
        alert("Произошла ошибка при удалении данных.");
      }
    }
  }
};
</script>