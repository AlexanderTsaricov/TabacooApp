<template>
  <div class="tabacooListBox">
    <h1 class="tabacooListBox_header">Tabacoo List</h1>
    <ul class="tabacooListBox_ul">
      <li
        v-for="item in tabacooList"
        :key="item.name + item.brand"
        class="tabacooListBox_li"
      >
        <!-- Слушаем событие на самом компоненте -->
        <TabacooBox
          :item="item"
          @deleted="onDeleted"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { loadDataFromTable } from '../../Storage/loadDataFromTable.js';
import TabacooBox from './TabacooBox.vue';

export default {
  name: 'TabacooList',
  components: { TabacooBox },

  data() {
    return {
      tabacooList: []
    };
  },

  methods: {
    // Вынесли логику загрузки в отдельный метод
    async fetchTabacoos() {
      try {
        const data = await loadDataFromTable();
        if (Array.isArray(data)) {
          this.tabacooList = data;
        } else {
          console.error('Загруженные данные не являются массивом.');
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },

    // Метод-обработчик события удаления
    onDeleted(deletedItem) {
      // Оптимистично удаляем из локального массива
      this.tabacooList = this.tabacooList.filter(
        item => !(item.name === deletedItem.name && item.brand === deletedItem.brand)
      );
    }
  },

  // При монтировании сразу подгружаем список
  async mounted() {
    await this.fetchTabacoos();
  }
};
</script>
  
  <style scoped>
  /* Контейнер списка */
  .tabaacooListBox {
    background-color: #1e1e2f;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    color: #e0e0e0;
  }
  
  /* Заголовок списка */
  .tabacooListBox_header {
    font-size: 24px;
    font-weight: bold;
    color: #80d4ff;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  
  /* Список без маркеров */
  .tabacooListBox_ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  /* Элемент списка */
  .tabacooListBox_li {
    background-color: #2a2a40;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
  }
  </style>
  