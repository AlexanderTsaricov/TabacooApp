<template>
  <div class="tasteListPageBox">
    <h2 class="tasteListPageBox_header">Texture List</h2>
    <div class="tasteListPageBox_searchBox">
        <div class="tasteListPageBox_searchRow">
            <label class="tasteListPageBox_searchText" for="tasteListPageBox_searchInput">Search</label>
            <input class="tasteListPageBox_searchInput"
				id="tasteListPageBox_searchInput"
				type="text"
				v-model="searchString"
				placeholder="Search by texture..."
				@input="applyFilter"
            />
        </div>
    </div>
    <ul class="tasteListPageBox_lists">
		<li v-for="item in tasteList" :key="item.taste + item.teksture + item.type">
			<TextureBox :item="item" />
		</li>
    </ul>
  </div>
</template>

<script>
import TextureBox from './TextureBox.vue';
import { loadDataFromTable } from '../../../Storage/loadDataFromTable.js';
import filterTekstures from '../../../../js_components/filterTekstures.js';

export default {
	name: 'TasteListPage',
	components: { TextureBox },
	data() {
		return {
			originalTasteList: [],
			tasteList: [],
			searchString: '',
			typesSelected: []
		};
	},
	methods: {
		async fetchTastes() {
			try {
				const data = await loadDataFromTable('tekstures');
				if (Array.isArray(data)) {
					this.originalTasteList = data;
					this.tasteList = filterTekstures(data, this.searchString, this.typesSelected);
				} else {
					console.error('fetched data is not array');
				}
			} catch (error) {
				console.error('Error fetch tastes', error);
			}
		},
		applyFilter() {
			this.tasteList = filterTekstures(this.originalTasteList, this.searchString, this.typesSelected);
		},
	},
	async mounted() {
		await this.fetchTastes();
	},
};
</script>

<style scoped>
/* Общие рекомендации */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Контейнер Taste List */
.tasteListPageBox {
  /* background-color: transparent; */ /* если нужен прозрачный фон */
  /* border-radius: 0; */
  /* box-shadow: none; */
  padding: 25px;
  max-width: 700px;
  margin: 20px auto;
  color: #e0e0e0;
  /* для предотвращения случайного overflow */
  overflow-wrap: break-word;
}

/* Заголовок */
.tasteListPageBox_header {
  font-size: 26px;
  font-weight: bold;
  color: #80d4ff;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

/* Список вкусов */
.tasteListPageBox_lists {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tasteListPageBox_searchBox {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.tasteListPageBox_searchRow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
}

.tasteListPageBox_searchText {
  font-size: 16px;
  font-weight: bold;
  color: #80d4ff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  user-select: none;
  min-width: 70px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
}

.tasteListPageBox_searchInput {
  flex: 1;
  min-width: 0;
  background-color: #2a2a40;
  color: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  caret-color: #80d4ff;
  outline: none;
  box-sizing: border-box;
  margin: 0;
}

.tasteListPageBox_typesSelectWrapper {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Также убедись, что обёртка tasteListPageBox не добавляет отступов */
.tasteListPageBox {
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}

</style>
