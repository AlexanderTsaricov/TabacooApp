<template>
    <li class="tabacooListBox_li">
        <p class="tabacooListBox_tabacooName">Tabacoo name: <span class="tabacooListBox_tabacooName__span">{{ item.name }}</span></p>
        <p class="tabacooListBox_brandName">Brand name: <span class="tabacooListBox_tabacooName__span">{{ item.brand }}</span></p>
        <button class="tabacooListBox_deleteButton" @click="del()">DELETE</button>
    </li>
</template>

<script>
import { deleteTabacoo } from '../../../Storage/TabacooStorageScripts/deleteTabacooFromTable.js';

export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	methods: {
		async del() {
		try {
			await deleteTabacoo(this.item.name, this.item.brand);
			this.$emit('deleted', this.item);
		} catch (e) {
			console.error('Ошибка удаления табака:', e);
		}
		}
	}
}
</script>

<style scoped>
  .tabacooListBox_deleteButton {
    background-color: #ff4d4d; /* ярко-красный фон */
    color: #ffffff; /* белый текст */
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .tabacooListBox_deleteButton:hover {
    background-color: #ff1a1a;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }

  .tabacooListBox_deleteButton:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 77, 77, 0.5);
  }

  .tabacooListBox_deleteButton:active {
    background-color: #cc0000;
  }
</style>