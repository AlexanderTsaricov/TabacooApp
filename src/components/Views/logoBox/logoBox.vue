<template>
    <div class="logoBox">
        <img class="logoBox_img" src="/ic_launcher.png" alt="logo">
        <h1 class="logoBox_text"><span>H</span>ookah <span>R</span>andomizer</h1>
    </div>
</template>

<style scoped>
  .logoBox {
        background-color: #1e1e2f;
        color: #e0e0e0;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        gap: 15px; /* Расстояние между логотипом и текстом */
    }

    .logoBox_img {
        width: 50px; /* Размер логотипа */
        height: 50px;
        border-radius: 50%; /* Круглая форма для изображения */
        border: 2px solid #ffcc00; /* Акцентный цвет рамки вокруг логотипа */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .logoBox_text {
        font-size: 24px;
        font-weight: bold;
        color: #80d4ff; /* Яркий акцент для текста */
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5); /* Легкая тень для текста */
        text-align: left;
        margin-left: 20px;
    }

    .logoBox_text span {
        color: #ff6b6b; /* Красный оттенок для первых букв */
        font-weight: bold; /* Подчеркнутость */
        text-shadow: 2px 2px 6px rgba(255, 107, 107, 0.7); /* Яркая тень для усиления эффекта */
        font-size: 28px; /* Немного увеличиваем размер для выделения */
    }
</style>