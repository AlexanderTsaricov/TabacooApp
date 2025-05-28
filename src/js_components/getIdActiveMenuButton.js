/**
 * Return active menu button.
 * Searhing all buttons with class "menu_button" and return id button where
 * button have the class "menu_button__active."
 * @returns {Integer} returns id active menu button 
 */
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
