<template>
  <div class="logoBox">
    <img class="logoBox_img" src="/ic_launcher.png" alt="logo" />
    <div class="logoBox_headings">
      <h1 class="logoBox_text">
        <span class="logoBox_initial">H</span>ookah
      </h1>
      <h1 class="logoBox_text">
        <span class="logoBox_initial">R</span>andomizer
      </h1>
    </div>
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
  gap: 15px;
}

.logoBox_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffcc00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}

.logoBox_texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logoBox_text {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: #80d4ff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  line-height: 1.2;
}

.logoBox_initial {
  color: #ff6b6b;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(255, 107, 107, 0.7);
  width: 1em;
  text-align: left;
}

</style>
