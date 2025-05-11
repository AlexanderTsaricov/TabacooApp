export default function getIdActiveMenuButton() {
    const menuButtons = document.querySelectorAll(".menu_button");
    let result;
    menuButtons.forEach((button) => {
        if (button.classList.contains("menu_button__active")) {
            result = button.id;
        }
    });
    return result;
}
