import renderPage from "./renderPage";
import getIdActiveMenuButton from "./getIdActiveMenuButton";
/**
 * Renders pages by active menu button
 */
export default function handleMenu() {
    let activeButton = getIdActiveMenuButton();
    renderPage(activeButton);
}
