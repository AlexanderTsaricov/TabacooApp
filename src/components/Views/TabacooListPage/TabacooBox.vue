<template>
    <li class="tabacooListBox_li">
        <p class="tabacooListBox_tabacooName">Tabacoo name: <span class="tabacooListBox_tabacooName__span">{{ item.name }}</span></p>
        <p class="tabacooListBox_brandName">Brand name: <span class="tabacooListBox_tabacooName__span">{{ item.brand }}</span></p>
        <button @click="del()">Delete</button>
    </li>
</template>

<script>
import { deleteTabacoo } from '../../Storage/deleteDataFromTable.js';

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