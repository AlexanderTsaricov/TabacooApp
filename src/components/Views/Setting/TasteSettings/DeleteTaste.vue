<template>
    <form class="deleteTasteForm">
        <h2 class="deleteTasteForm_header">Удалить вкус</h2>
        <label for="name">Название вкуса</label>
        <input class="deleteTasteForm_input" v-model="taste" id="taste" type="taste">
        <label for="type">Текстура продукта</label>
        <input class="deleteTasteForm_input" v-model="teksture" id="teksture" type="text">
        <label for="type">Тип продукта</label>
        <input class="deleteTasteForm_input" v-model="type" id="type" type="text">
        <button class="deleteTasteForm_submit" @click="handleDel">Submit</button>
    </form>
</template>

<script>
    import deleteTasteFromTable from '../../../Storage/TasteStorageScripts/deleteTasteFromTable';
    export default {
        data() {
            return {
            taste: "",
            teksture: "",
            type: "",
            };
        },
        methods: {
            async handleDel() {
                if (!this.taste.trim() || !this.teksture.trim() || !this.type.trim()) {
                    alert("Пожалуйста, заполните все поля!");
                    return;
                }
                try {
                    const result = await deleteTasteFromTable(this.taste, this.teksture, this.type);
                    this.taste = "";
                    this.teksture = "";
                    this.type = "type"
                    alert("Данные успешно удалены!");
                } catch (error) {
                    console.error('Error delete date from tastes', error);
                }
            }
        }
    }
</script>

<style scoped>
.deleteTasteForm {
  background-color: #2a1e2e;    /* Тёмный фон */
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

.deleteTasteForm_header {
  font-size: 24px;
  font-weight: bold;
  color: #ff6b6b;               /* Красный акцент */
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.deleteTasteForm label {
  font-size: 16px;
  color: #e0e0e0;
}

.deleteTasteForm_input {
  background-color: #3a2a40;
  color: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.deleteTasteForm_input:focus {
  outline: none;
  background-color: #4b3654;
}

.deleteTasteForm_submit {
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

.deleteTasteForm_submit:hover {
  background-color: #ff5252;    /* Более явный красный при наведении */
}
</style>