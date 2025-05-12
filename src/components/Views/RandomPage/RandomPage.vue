<script setup lang="ts">
    import StranghtOfTabacooBox from './StranghtOfTabacooBox.vue';
    import getRandomTabacooFromTable from '../../Storage/getRandomTabacooFromTable.js';
    import { ref } from 'vue';

    
    const selectedBrands = ref<string[]>([]);
    const firstTabacooText = ref('Первый табак еще не отрандомен');
    const secondTabacooText = ref('Второй табак еще не отрандомен');

    // Обработчик события для обновления выбранных брендов
    
    const sendToConsoleSelectedBrands = async () => {
        if (selectedBrands.value.length == 0) {
            const tabacoo = await getRandomTabacooFromTable();
            const tabacooName = 'Name: ' + tabacoo['name'] + ' | Brand: ' + tabacoo['brand'];
            writeTabacooToRandomBox(tabacooName);
        } else {
            const tabacoo = await getRandomTabacooFromTable(selectedBrands.value);
            const tabacooName = 'Name: ' + tabacoo['name'] + ' | Brand: ' + tabacoo['brand'];
            writeTabacooToRandomBox(tabacooName);
        }
    }

    function writeTabacooToRandomBox(tabacoo: string) {
        if (firstTabacooText.value == 'Первый табак еще не отрандомен') {
            firstTabacooText.value = tabacoo;
        } else if (secondTabacooText.value == 'Второй табак еще не отрандомен') {
            secondTabacooText.value = tabacoo;
        } else {
            secondTabacooText.value = 'Второй табак еще не отрандомен';
            firstTabacooText.value = tabacoo;
        }
    }

    
</script>



<template>
  <div class="randomBox">
    <h1 class="random_header">Tabacoo random</h1>
    <div class="tabacooOutBox">
      <h3 class="tabacooOutBox_header">Зарандомь свой табак!</h3>
      <p class="tabacooOutBox_firstTabacooName">{{ firstTabacooText }}</p>
      <p class="tabacooOutBox_secondTabacooName">{{ secondTabacooText }}</p>
    </div>
    <StranghtOfTabacooBox 
        msg="Vite + Vue" 
        @update-selected-brands="(brands: string[]) => selectedBrands = brands"
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
        background-color: #2a2a40;
        padding: 15px;
        border-radius: 10px;
        margin: 15px 0;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    .tabacooOutBox_header {
        font-size: 18px;
        font-weight: bold;
        color: #80d4ff;
    }

    .tabacooOutBox p {
        margin: 10px 0;
        font-style: italic;
        color: #d1d1d1;
    }

    .randomBox_label {
        color: #e0e0e0;
        font-weight: normal;
        margin: 10px;
        display: inline-block;
    }

    .randomBox_checkBox {
        margin-left: 10px;
        accent-color: #ff6699; /* Цвет для чекбоксов */
    }

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

    .randomBox_select {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
</style>