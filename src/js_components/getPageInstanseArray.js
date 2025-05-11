import { createApp, h } from "vue";
import RandomPage from "../components/Views/RandomPage/RandomPage.vue";
import TabacooListPage from "../components/Views/TabacooListPage/TabacooListPage.vue";
import Setting from "../components/Views/Setting/Setting.vue";

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

    return arrayInstance;
}
