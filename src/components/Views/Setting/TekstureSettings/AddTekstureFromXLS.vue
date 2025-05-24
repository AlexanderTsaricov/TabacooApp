<template>
  <div class="loadXLSBox">
    <h2 class="loadXLSBox_header">Загрузить вкусы и текстуры</h2>
    <h2 class="loadXLSBox_header">с Excel таблицы</h2>

    <label
      class="loadXLSBox_label"
      :class="{ selected: selectedFile }"
    >
      <span class="loadXLSBox_label_text">
        {{ selectedFile ? selectedFile.name : 'Выбрать файл' }}
      </span>
      <input
        class="loadXLSBox_input"
        type="file"
        accept=".xls,.xlsx"
        @change="fileInputed"
      />
    </label>

    <button
      class="loadXLSBox_button"
      :disabled="isLoading"
      @click="load"
    >
      Upload
    </button>
  </div>
</template>

<style scoped>
.loadXLSBox {
  background-color: #1e1e2f;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto 15px;
}

.loadXLSBox_header {
  font-size: 24px;
  font-weight: bold;
  color: #80d4ff;
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.loadXLSBox_label {
  background-color: #2a2a40;
  color: #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.loadXLSBox_label.selected {
  background-color: #3a3a5a;
  color: #ffffff;
}

.loadXLSBox_label_text {
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.loadXLSBox_input {
  display: none;
}

.loadXLSBox_button {
  background-color: #2a2a40;
  color: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.loadXLSBox_button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loadXLSBox_button:hover:not(:disabled) {
  background-color: #3a3a5a;
}

.loadXLSBox_button:active:not(:disabled) {
  background-color: #ff9966;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
  transform: scale(0.98);
}
</style>

<script>
import loadDataFromXls from '../../../Storage/loadDatafromxls.js';
import addTasteToTable from '../../../Storage/TasteStorageScripts/addTasteToTable.js';
import addTekstureToTable from '../../../Storage/TekstureStorageScripts/addTekstureToTable';

export default {
  data() {
    return {
      selectedFile: null,
      list: 0,
      isLoading: false
    };
  },
  methods: {
    fileInputed(event) {
      const files = event.target.files;
      this.selectedFile = files && files.length ? files[0] : null;
    },
    async load() {
      if (!this.selectedFile || this.isLoading) return;
      this.isLoading = true;
      try {
        const jsonData = await loadDataFromXls(this.selectedFile, this.list);
        for (const row of jsonData) {
          const taste = row['Вкус'];
          const teksture = row['Текстура'];
          const type = row['Тип'];
          console.log(`Обработка: ${taste}, ${teksture}, ${type}`);
          await addTasteToTable(taste);
          await addTekstureToTable(teksture, type);
        }
        console.log(`Обработано ${jsonData.length} строк.`);
      } catch (err) {
        console.error('Ошибка загрузки XLS:', err?.message || err);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
