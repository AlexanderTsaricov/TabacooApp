<template>
    <div class="randomBox">
        <h1 class="random_header">Taste random</h1>
        <div class="tasteOutBox">
            <h3 class="tasteOutBox_header">Зарандомь свой вкус!</h3>
            <div class="tasteOutBox_tasteBox">
                <h4 class="tasteOutBox_tasteBox__header">Первый вкус</h4>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Taste </span>{{ tasteFirst }}</p>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Texture </span>{{ tekstureFirst }}</p>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Type </span>{{ typeFirst }}</p>
            </div>
            <div class="tasteOutBox_tasteBox">
                <h4 class="tasteOutBox_tasteBox__header">Второй вкус</h4>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Taste </span>{{ tasteSecond }}</p>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Texture </span>{{ tekstureSecond }}</p>
                <p class="tasteOutBox_firstTaste"><span class="tasteOutBox_firstTaste__span">Type </span>{{ typeSecond }}</p>
            </div>
        </div>
        <TypesSelectMenu @update-selected-types="onUpdateSelectedTypes" />
        <button class="randomTaste" @click="sendToConsoleSelectedTypes()">Start Random</button>
  </div>
</template>

<script>
    import TypesSelectMenu from './TypesSelectMenu.vue';
    import getRandomTasteFromTable from '../../Storage/TasteStorageScripts/getRandomTasteFromTable.js'
    import { ref } from 'vue';
    export default {
    components: { TypesSelectMenu },
    setup() {
        const tasteFirst = ref('Первый вкус');
        const tekstureFirst = ref('');
        const typeFirst = ref('');
        const tasteSecond = ref('Второй вкус');
        const tekstureSecond = ref('');
        const typeSecond = ref('');
        const selectedTypes = ref([]);

        const onUpdateSelectedTypes = (types) => {
            console.log('Parent received selected types:', types);
            selectedTypes.value = types;
        };

        const writeTasteToRandomBox = (tasteResult) => {
            if (tasteFirst.value === 'Первый вкус') {
                tasteFirst.value = tasteResult[0];
                tekstureFirst.value = tasteResult[1];
                typeFirst.value = tasteResult[2];
            } else if (tasteSecond.value === 'Второй вкус') {
                tasteSecond.value = tasteResult[0];
                tekstureSecond.value = tasteResult[1];
                typeSecond.value = tasteResult[2];
            } else {
                tasteFirst.value = tasteResult[0];
                tekstureFirst.value = tasteResult[1];
                typeFirst.value = tasteResult[2];
                tasteSecond.value = 'Второй вкус';
                tekstureSecond.value = '';
                typeSecond.value = '';
            }
        };

        const sendToConsoleSelectedTypes = async () => {
            let tasteRes = [];
            if (selectedTypes.value.length > 0) {
                const randTaste =  await getRandomTasteFromTable(selectedTypes.value);
                tasteRes = [randTaste.taste, randTaste.teksture, randTaste.type];
            } else {
                const randTaste = await getRandomTasteFromTable();
                tasteRes = [randTaste.taste, randTaste.teksture, randTaste.type];
            }
            writeTasteToRandomBox(tasteRes);
        };

        return {
            tasteFirst,
            tekstureFirst,
            typeFirst,
            tasteSecond,
            tekstureSecond,
            typeSecond,
            selectedTypes,
            onUpdateSelectedTypes,
            sendToConsoleSelectedTypes
        };
    }
};
</script>

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

.tasteOutBox {
  margin: 15px 0;
}

.tasteOutBox_header {
  font-size: 18px;
  font-weight: bold;
  color: #80d4ff;
  margin-bottom: 12px;
}

/* Общий контейнер для каждого «вкус‑бокса» */
.tasteOutBox_tasteBox {
  background-color: #2a2a40;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Заголовок внутри бокса */
.tasteOutBox_tasteBox__header {
  font-size: 16px;
  font-weight: bold;
  color: #ffcc00;
  margin-bottom: 8px;
}

/* Параграфы внутри бокса */
.tasteOutBox_firstTaste {
  margin: 6px 0;
  display: flex;
  gap: 6px;
}

/* Метки «Taste:», «Texture:», «Type:» */
.tasteOutBox_firstTaste__span {
  font-weight: bold;
  color: #ffcc00;
}

/* Кнопка отправки */
.randomTaste {
  background-color: #4a4a60;
  color: #f2f2f2;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Отступ перед селектором типов */
.randomBox_select {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>

