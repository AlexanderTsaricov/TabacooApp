import renderPage from "./renderPage";
import getIdActiveMenuButton from "./getIdActiveMenuButton";

export default function handleMenu() {
    let activeButton = getIdActiveMenuButton();
    console.log(activeButton);
    renderPage(activeButton);
}
