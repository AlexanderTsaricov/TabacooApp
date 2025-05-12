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

<style scoped>
  /* Контейнер одного вкуса */
  .tasteBox {
    background-color: #2a2a40;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 15px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Название вкуса */
  .tasteBox_name {
    font-size: 18px;
    font-weight: bold;
    color: #80d4ff;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  /* Тип вкуса */
  .tasteBox_type {
    font-size: 14px;
    color: #e0e0e0;
    margin: 0 1rem;
    flex-grow: 1;
  }

  /* Кнопка удаления */
  .tasteBox_button {
    background-color: #1e1e2f;
    color: #e0e0e0;
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: background-color 0.3s ease, transform 0.1s ease;
  }

  .tasteBox_button:hover {
    background-color: #3a3a5a;
  }

  .tasteBox_button:active {
    background-color: #ff9966;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(0.98);
  }
</style>
