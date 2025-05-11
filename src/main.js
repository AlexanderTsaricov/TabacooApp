import { createApp, nextTick } from "vue";
import "./style.css";
import App from "./App.vue";
import getIdActiveMenuButton from "./js_components/getIdActiveMenuButton";
import renderPage from "./js_components/renderPage";
import handleMenu from "./js_components/handleMenu";
import setupDatabase from "./components/Storage/setupDatabase";

createApp(App).mount("#app");

nextTick(() => {
    setupDatabase();
    let activeButton = getIdActiveMenuButton();
    renderPage(activeButton);
    const menuButtons = document.querySelectorAll(".menu_button");
    menuButtons.forEach((button) => {
        button.addEventListener("click", () => {
            menuButtons.forEach((element) => {
                element.classList.remove("menu_button__active");
            });
            button.classList.add("menu_button__active");
            handleMenu();
        });
    });
});
