<script>
import TypesSelectBox from './TypesSelectBox.vue';
import { ref, onMounted } from 'vue';
import getTypesFromTable from '../../Storage/TasteStorageScripts/getTypesFromTable.js';

export default {
  components: {
    TypesSelectBox,
  },
  setup(_, { emit }) {
    const types = ref([]); // Все типы
    const selectedTypes = ref([]); // Выбранные типы

    onMounted(async () => {
      types.value = await getTypesFromTable();
    });

    const updateSelection = ({ type, checked }) => {
      if (checked) {
        if (!selectedTypes.value.includes(type)) {
          selectedTypes.value.push(type);
        }
      } else {
        selectedTypes.value = selectedTypes.value.filter((b) => b !== type);
      }
      console.log('Emitting update-selected-types:', JSON.stringify(selectedTypes.value));
      emit('update-selected-types', selectedTypes.value);
    };

    return {
      types,
      selectedTypes,
      updateSelection,
    };
  },
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
  grid-template-columns: repeat(2, 1fr); /* 2 колонки */
  gap: 10px; /* Отступы между элементами */
  margin-top: 10px; /* Отступ сверху */
  width: 100%;
  box-sizing: border-box;
}

.stranghtTabacooBox {
  background-color: #2a2a40;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 15px 20px;
  margin: 15px auto;
  max-width: 400px;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.stranghtTabacooBox[open] {
  max-height: 500px;
  opacity: 1;
}

.stranghtTabacooBox_header {
  font-size: 18px;
  font-weight: bold;
  color: #80d4ff;
  cursor: pointer;
  text-shadow: none;
}
</style>
