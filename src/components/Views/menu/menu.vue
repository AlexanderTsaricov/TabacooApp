<template>
    <div class="headMenuBox">
        <button :class="`headMenuBox_button ${activeMenu == 'hookah' ? 'headMenuBox_button__active' : ''}`" id="hookah" @click="activateHeadMenu('hookah')">
            <img class="headMenuBox_img" :src="`${iconPath}hookah${ activeMenu === 'hookah' ? '-open' : '' }.svg`" alt="hookah">
        </button>
        <button :class="`headMenuBox_button ${activeMenu == 'setting' ? 'headMenuBox_button__active' : ''}`" id="setting" @click="activateHeadMenu('setting')">
            <img class="headMenuBox_img" :src="`${iconPath}settings${ activeMenu === 'setting' ? '-open' : '' }.svg`" alt="settings">
        </button>
        <button :class="`headMenuBox_button ${activeMenu == 'taste' ? 'headMenuBox_button__active' : ''}`" id="taste" @click="activateHeadMenu('taste')">
            <img class="headMenuBox_img" :src="`${iconPath}taste${ activeMenu === 'taste' ? '-open' : '' }.svg`" alt="taste">
        </button>
    </div>
    <menu :class="`menu menu_hookah ${activeMenu == 'hookah' ? '' : 'menu_hidden'}`">
        <button class="menu_button" id="tabacooRand">Tabacoo Random</button>
        <button class="menu_button" id="tabacooList">Tabacoo List</button>
    </menu>
    <menu :class="`menu menu_setting ${activeMenu == 'setting' ? '' : 'menu_hidden'}`">
        <button class="menu_button" id="tabacooSetting">Setting Tabacoo</button>
        <button class="menu_button" id="tasteSetting">Setting Taste</button>
    </menu>
    <menu :class="`menu taste ${activeMenu == 'taste' ? '' : 'menu_hidden'}`">
        <button class="menu_button" id="tasteRand">Taste Random</button>
        <button class="menu_button" id="tasteList">Taste List</button>
        <button class="menu_button" id="tekstureList">Texture List</button>
    </menu>
</template>

<style scoped>
    .menu_hidden {
        display: none !important;
    }
    .headMenuBox {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        max-width: 100%;
        margin: 16px 0;
    }
    .headMenuBox_button {
        background-color: #2a2a40;
        border: none;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: box-shadow 0.1s ease, transform 0.1s ease;
        /* чтобы при фокусе не было обводки браузера */
        outline: none;
    }
    .headMenuBox_button__active {
        /* внутренняя тень, как будто вдавили */
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
        /* чуть «опустить» кнопку */
        transform: translateY(1px);
    }
    .headMenuBox_img {
        max-width: 30px;
        
    }
    .menu {
        max-width: 100%;
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-items: center;
    }

    .menu_button:first-child {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        grid-column: 1 / -1; /* "Setting" кнопка занимает всю ширину */
        transition: background-color 0.3s ease, transform 0.2s ease;
        justify-self: center;
        width: 100%;
    }

    .menu_button:first-child:active {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    .menu_button:not(:first-child) {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 10px 12px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .menu_button:not(:first-child):hover {
        background-color: #ffcc00;
        color: #1e1e2f;
        transform: scale(1.05);
    }

    .menu_button__active {
        background-color: #ff9966 !important;
        color: #1e1e2f !important;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5) !important;
    }
</style>

<script>
    export default {
        data() {
            //const iconPath = '../../../../public/icons/';
            const iconPath = '/icons/';
            return {
                iconPath,
                tabacoo_icon_path: iconPath + 'hookah.svg',
                tabacoo_icon_path_open: iconPath + 'hookah-open.svg',
                setting_icon_path: iconPath + 'settings.svg',
                setting_icon_path_open: iconPath + 'settings-open.svg',
                taste_icon_path: iconPath + 'taste.svg',
                taste_icon_path_open: iconPath + 'taste-open.svg',
                activeMenu: 'hookah',
                activeHeadButton: ''
            }
        },
        mounted() {
            const firstButtonMenu = document.querySelector("#tabacooRand");
            if (firstButtonMenu) {
                firstButtonMenu.classList.add("menu_button__active");
            } else {
                console.error("Элемент с id #tabacooRand не найден.");
            }
        },
        methods: {
            activateHeadMenu(name) {
            // 1) убрать класс у старой
                if (this.activeHeadButton) {
                    this.activeHeadButton.classList.remove('headMenuBox_button__active');
                }

                // 2) найти новую кнопку и сохранить
                const btn = document.querySelector(`#${name}`);
                btn.classList.add('headMenuBox_button__active');
                this.activeHeadButton = btn;

                // 3) переключить меню
                this.activeMenu = name;
            }
        }
    };
</script>