<script setup>
    import StranghtOfTabacooBox from './StranghtOfTabacooBox.vue';
    import getRandomTabacooFromTable from '../../../Storage/TabacooStorageScripts/getRandomTabacooFromTable.js';
    import { ref } from 'vue';

    
    const selectedBrands = ref([]);
    const firstTabacooName = ref('Первый табак');
    const firstTabacooBrand = ref('');
    const secondTabacooName = ref('Второй табак');
    const secondTabacooBrand = ref('');

    // Обработчик события для обновления выбранных брендов
    
    const sendToConsoleSelectedBrands = async () => {
        if (selectedBrands.value.length == 0) {
            const tabacoo = await getRandomTabacooFromTable();
            const tabacooArr = [tabacoo['name'], tabacoo['brand']];
            writeTabacooToRandomBox(tabacooArr);
        } else {
            const tabacoo = await getRandomTabacooFromTable(selectedBrands.value);
            const tabacooArr = [tabacoo['name'], tabacoo['brand']];
            writeTabacooToRandomBox(tabacooArr);
        }
    }

    function writeTabacooToRandomBox(tabacoo) {
        if (firstTabacooName.value == 'Первый табак') {
            firstTabacooName.value = tabacoo[0];
            firstTabacooBrand.value = tabacoo[1];
        } else if (secondTabacooName.value == 'Второй табак') {
            secondTabacooName.value = tabacoo[0];
            secondTabacooBrand.value = tabacoo[1];
        } else {
            secondTabacooName.value = 'Второй табак';
            secondTabacooBrand.value = '';
            firstTabacooName.value = tabacoo[0];
            firstTabacooBrand.value = tabacoo[1];
        }
    }

    
</script>



<template>
  <div class="randomBox">
    <h1 class="random_header">Tabacoo random</h1>
    <div class="tabacooOutBox">
      <h3 class="tabacooOutBox_header">Зарандомь свой табак!</h3>
      <div class="tabacooOutBox_tabBox">
        <h4 class="tabacooOutBox_tabBox__header">Первый табак</h4>
        <p class="tabacooOutBox_firstTabacooName"><span class="tabacooOutBox_firstTabacooName__span">Name</span>{{ firstTabacooName }}</p>
        <p class="tabacooOutBox_firstTabacooName"><span class="tabacooOutBox_firstTabacooName__span">Brand</span>{{ firstTabacooBrand }}</p>
      </div>
      <div class="tabacooOutBox_tabBox">
        <h4 class="tabacooOutBox_tabBox__header">Второй табак</h4>
        <p class="tabacooOutBox_firstTabacooName"><span class="tabacooOutBox_firstTabacooName__span">Name</span>{{ secondTabacooName }}</p>
        <p class="tabacooOutBox_firstTabacooName"><span class="tabacooOutBox_firstTabacooName__span">Brand</span>{{ secondTabacooBrand }}</p>
      </div>
    </div>
    <StranghtOfTabacooBox 
        msg="Vite + Vue" 
        @update-selected-brands="(brands) => selectedBrands = brands"
    />
    <button class="randomTabacoo" @click="sendToConsoleSelectedBrands()">Start Random</button>
  </div>
</template>

<style scoped>
.randomBox {
  background-color: #1e1e2f;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.random_header {
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
  text-align: center;
}

.tabacooOutBox {
  margin: 15px 0;
}

.tabacooOutBox_header {
  font-size: 18px;
  font-weight: bold;
  color: #80d4ff;
  margin-bottom: 12px;
}

/* Контейнер для каждого табачного бокса */
.tabacooOutBox_tabBox {
  background-color: #2a2a40;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Заголовок внутри каждого табачного бокса */
.tabacooOutBox_tabBox__header {
  font-size: 16px;
  font-weight: bold;
  color: #ffcc00;
  margin-bottom: 8px;
}

/* Параграфы с name/brand */
.tabacooOutBox_firstTabacooName {
  margin: 6px 0;
  display: flex;
  gap: 6px;
}

/* Метки «Name», «Brand» */
.tabacooOutBox_firstTabacooName__span {
  font-weight: bold;
  color: #ffcc00;
}

/* Кнопка */
.randomTabacoo {
  background-color: #4a4a60;
  color: #f2f2f2;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Отступ над селектором */
.randomBox_select {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
