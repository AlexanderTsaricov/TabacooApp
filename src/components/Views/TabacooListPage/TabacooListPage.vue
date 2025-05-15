<template>
  <div class="tabacooListBox">
    <h1 class="tabacooListBox_header">Tabacoo List</h1>
    <div class="tabacooListBox_searchBox">
      <label class="tabacooListBox_searchText" for="tabacooListBox_searchInut">Search</label>
      <input class="tabacooListBox_searchInut" type="text" v-model="searchString" placeholder="Поиск по названию...">
    </div>
    <!-- Семантичный сворачиваемый список брендов -->
    <details class="tabacooListBox_filterSection">
      <summary class="tabacooListBox_filterHeader">
        Brands filter
      </summary>
      <div class="tabacooListBox_brandsList">
        <strength-checkbox
          v-for="brand in uniqueBrands"
          :key="brand"
          :brand="brand"
          @update-selection="onBrandSelection"
        />
      </div>
    </details>
    <ul class="tabacooListBox_ul">
      <li
        v-for="item in filteredTabacooList"
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
import StrengthCheckbox from '../RandomPage/BrandBox.vue';
import TabacooBox from './TabacooBox.vue';
import filterTabacoos from '../../../js_components/filterTabacoos.js';

export default {
  name: 'TabacooList',
  components: { TabacooBox, StrengthCheckbox },

  data() {
    return {
      tabacooList: [],
      searchString: '',
      selectedBrands: [] 
    };
  },

  computed: {
    uniqueBrands() {
      const brands = this.tabacooList.map(item => item.brand);
      return Array.from(new Set(brands));
    },
    // всегда возвращает отфильтрованный массив
    filteredTabacooList() {
      return filterTabacoos(this.tabacooList, this.searchString, this.selectedBrands);
    }
  },

  methods: {
    // Вынесли логику загрузки в отдельный метод
    async fetchTabacoos() {
      try {
        const data = await loadDataFromTable('tabacoo');
        if (Array.isArray(data)) {
          const filtredData = filterTabacoos(data, this.searchString);
          this.tabacooList = filtredData;
        } else {
          console.error('Загруженные данные не являются массивом.');
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },

    onBrandSelection({ brand, checked }) {
      if (checked && !this.selectedBrands.includes(brand)) {
        this.selectedBrands.push(brand);
      } else if (!checked) {
        this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
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
  .tabacooListBox_filterSection {
    background-color: #2a2a40;
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .tabacooListBox_filterHeader {
    list-style: none;
    cursor: pointer;
    padding: 12px 16px;
    font-weight: bold;
    color: #80d4ff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  .tabacooListBox_filterHeader::-webkit-details-marker {
    display: none;
  }

  .tabacooListBox_filterHeader::before {
    content: '▸';
    display: inline-block;
    margin-right: 8px;
    transition: transform 0.2s ease;
  }

  .tabacooListBox_filterSection[open] .tabacooListBox_filterHeader::before {
    transform: rotate(90deg);
  }

  .tabacooListBox_brandsList {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 16px;
    background-color: #1e1e2f;
  }

  /* Контейнер поиска */
  .tabacooListBox_searchBox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  /* Текст метки поиска */
  .tabacooListBox_searchText {
    font-size: 16px;
    font-weight: bold;
    color: #80d4ff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  /* Поле ввода поиска */
  .tabacooListBox_searchInut {
    flex: 1;
    background-color: #2a2a40;
    color: #e0e0e0;
    border: none;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 16px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .tabacooListBox_searchInut::placeholder {
    color: #a0a0a0;
    font-style: italic;
  }

  .tabacooListBox_searchInut:hover {
    background-color: #3a3a5a;
  }

  .tabacooListBox_searchInut:focus {
    outline: none;
    background-color: #3a3a5a;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.5);
  }
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
  