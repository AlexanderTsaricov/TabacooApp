<script setup>
import Menu from './components/Views/menu/menu.vue';
import Logo from './components/Views/logoBox/logoBox.vue'
</script>

<template>
  <div class="app">
    <Logo msg="Vite + Vue"/>
    <Menu msg="Vite + Vue"/>
    <div class="activePageBox">
    </div>
  </div>
</template>

<style scoped>
  .app {
    max-width: 100vw;
  }
</style>
