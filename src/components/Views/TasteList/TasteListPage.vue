<template>
    <div class="tasteListPageBox">
        <h2 class="tasteListPageBox_header">Taste List</h2>
        <li class="tasteListPageBox_lists">

        </li>
    </div>
</template>

<style scoped>
  /* Обёртка страницы со списком вкусов */
  .tasteListPageBox {
    background-color: #1e1e2f;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 25px;
    max-width: 700px;
    margin: 20px auto;
    color: #e0e0e0;
  }

  /* Заголовок страницы */
  .tasteListPageBox_header {
    font-size: 26px;
    font-weight: bold;
    color: #80d4ff;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  /* Контейнер для списка: сброс стандартных отступов и маркеров */
  .tasteListPageBox_lists {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px; /* промежуток между элементами списка */
  }
</style>
