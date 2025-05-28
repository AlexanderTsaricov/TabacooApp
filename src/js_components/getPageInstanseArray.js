import { createApp, h } from "vue";
import RandomPage from "../components/Views/TabacooHead/RandomPage/RandomPage.vue";
import TabacooListPage from "../components/Views/TabacooHead/TabacooListPage/TabacooListPage.vue";
import TasteListPage from "../components/Views/TasteHead/TasteList/TasteListPage.vue"
import RandomTastePage from "../components/Views/TasteHead/RandomTastePage/RandomTastePage.vue";
import TabacooSettingsPage from "../components/Views/Setting/TabasooSettings/TabacooSettingsPage.vue";
import TasteSettingsPage from "../components/Views/Setting/TasteSettings/TasteSettingsPage.vue";
import TextureListPage from "../components/Views/TasteHead/TextureListPage/TextureListPage.vue";
import TekstureSettingsPage from "../components/Views/Setting/TekstureSettings/TekstureSettingsPage.vue";
/**
 * 
 * @returns instances pages
 */
export default function getPageInstanceArray() {
    const arrayInstance = {};

    arrayInstance["tabacooRand"] = createApp({
        render: () => h(RandomPage),
    });
    arrayInstance["tabacooList"] = createApp({
        render: () => h(TabacooListPage),
    });
    arrayInstance["tabacooSetting"] = createApp({
        render: () => h(TabacooSettingsPage),
    });
     arrayInstance["tasteSetting"] = createApp({
        render: () => h(TasteSettingsPage),
    });
    arrayInstance["tasteList"] = createApp({
        render: () => h(TasteListPage),
    });
    arrayInstance["tasteRand"] = createApp({
        render: () => h(RandomTastePage),
    });
    arrayInstance["tekstureList"] = createApp({
        render: () => h(TextureListPage),
    });
    arrayInstance["textureSetting"] = createApp({
        render: () => h(TekstureSettingsPage),
    });


    return arrayInstance;
}
