<template>
    <li class="tasteBox">
        <p class="tasteBox_name">{{ item.name }}</p>
        <p class="tasteBox_type">{{ item.type }}</p>
        <button class="tasteBox_button">DELETE</button>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>