<script setup>
    import AddTabacoo from './TabasooSettings/AddTabacoo.vue';
    import DeleteTabacoo from './TabasooSettings/DeleteTabacoo.vue';
    import AddTabacooFromXLS from './TabasooSettings/AddTabacooFromXLS.vue';
    import AddTeste from './TasteSettings/AddTaste.vue';
    import ClearTables from './Clear/ClearTables.vue';
    import DeleteTaste from './TasteSettings/DeleteTaste.vue';
    import AddTasteFromXLS from './TasteSettings/AddTasteFromXLS.vue';
</script>

<template>
        <ClearTables msg="Vite + Vue"/>
        <AddTabacoo msg="Vite + Vue" />
        <DeleteTabacoo msg="Vite + Vue" />
        <AddTabacooFromXLS msg="Vite + Vue"/>
        <AddTeste msg="Vite + Vue" />
        <DeleteTaste msg="Vite + Vue" />
        <AddTasteFromXLS msg="Vite + Vue" />
</template>


