<script setup>
    import AddTexture from './AddTexture.vue';
	import AddTekstureFromXLS from './AddTekstureFromXLS.vue';
	import DeleteTeksture from './DeleteTeksture.vue';
	import ClearTekstureTable from '../Clear/ClearTekstureTable.vue';
</script>

<template>
	<ClearTekstureTable msg="Vite + Vue" />
	<AddTexture msg="Vite + Vue" />
	<AddTekstureFromXLS msg="Vite + Vue" />
	<DeleteTeksture msg="Vite + Vue" />
</template>