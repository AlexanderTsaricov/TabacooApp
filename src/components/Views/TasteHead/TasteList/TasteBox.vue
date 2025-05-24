<template>
    <div class="tasteBox">
		<p class="tasteBox_name">Taste: {{ item.taste }}</p>
		<button class="tasteBox_button" @click="deleteTaste">DELETE</button>
    </div>
</template>

<script>

	import deleteTasteFromTable from '../../../Storage/TasteStorageScripts/deleteTasteFromTable.js';
    export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		methods: {
			deleteTaste() {
				deleteTasteFromTable(this.item.taste);
			}
		}
    }
</script>

<style scoped>
  /* Контейнер вкуса */
  .tasteBox {
    background-color: #2a2a40;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: transform 0.2s ease;
  }

  .tasteBox:hover {
    transform: scale(1.01);
  }

  /* Название вкуса и текстура */
  .tasteBox_name {
    font-size: 16px;
    font-weight: bold;
    color: #80d4ff;
    margin: 0;
    line-height: 1.4;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  /* Texture — визуально чуть светлее и без bold */
  .tasteBox_name:nth-of-type(2) {
    color: #c0c0ff;
    font-weight: normal;
  }

  /* Тип вкуса */
  .tasteBox_type {
    font-size: 14px;
    color: #e0e0e0;
    margin: 0 0 10px 0;
    font-style: italic;
  }

  /* Кнопка удаления на всю ширину */
  .tasteBox_button {
    width: 100%;
    background-color: #ff5555;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    transition: background-color 0.3s ease, transform 0.1s ease;
    /* убираем align-self */
    /* align-self: flex-end; */
  }

  .tasteBox_button:hover {
    background-color: #ff7777;
  }

  .tasteBox_button:active {
    background-color: #ff3333;
    transform: scale(0.96);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
  }
</style>