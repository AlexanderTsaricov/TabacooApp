import { createApp, h } from "vue";
import RandomPage from "../components/Views/RandomPage/RandomPage.vue";
import TabacooListPage from "../components/Views/TabacooListPage/TabacooListPage.vue";
import Setting from "../components/Views/Setting/Setting.vue";
import TasteListPage from "../components/Views/TasteList/TasteListPage.vue"
import RandomTastePage from "../components/Views/RandomTastePage/RandomTastePage.vue";

export default function getPageInstanceArray() {
    const arrayInstance = {};

    arrayInstance["tabacooRand"] = createApp({
        render: () => h(RandomPage),
    });
    arrayInstance["tabacooList"] = createApp({
        render: () => h(TabacooListPage),
    });
    arrayInstance["setting"] = createApp({
        render: () => h(Setting),
    });
    arrayInstance["tasteList"] = createApp({
        render: () => h(TasteListPage),
    });
    arrayInstance["tasteRand"] = createApp({
        render: () => h(RandomTastePage),
    });

    return arrayInstance;
}
