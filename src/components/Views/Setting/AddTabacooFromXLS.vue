<template>
    <div class="loadXLSBox">
        <h2 class="loadXLSBox_header">Загрузить табак с Exel таблицы</h2>
        <input class="loadXLSBox_input" type="file" accept=".xls,.xlsx" @change="fileInputed" placeholder="Выберите файл...">
        <button class="loadXLSBox_button" @click="load">Upload</button>
    </div>
</template>

<style scoped>
    .loadXLSBox {
        background-color: #1e1e2f;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
        max-width: 400px;
        margin: 0 auto 15px;
    }

    .loadXLSBox_header {
        font-size: 24px;
        font-weight: bold;
        color: #80d4ff;
        text-align: center;
        margin: 0;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }

    .loadXLSBox_input {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 12px;
        font-size: 16px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .loadXLSBox_input:hover {
        background-color: #3a3a5a;
    }

    .loadXLSBox_input:active {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    /* Стили для текста-подсказки внутри input */
    .loadXLSBox_input::placeholder {
        color: #a0a0a0;
        font-style: italic;
    }

    .loadXLSBox_button {
        background-color: #2a2a40;
        color: #e0e0e0;
        border: none;
        border-radius: 8px;
        padding: 12px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .loadXLSBox_button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .loadXLSBox_button:hover:not(:disabled) {
        background-color: #3a3a5a;
    }

    .loadXLSBox_button:active:not(:disabled) {
        background-color: #ff9966;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
        transform: scale(0.98);
    }
</style>

<script>
    import loadDataFromXls  from '../../Storage/loadDatafromxls';
    import { addTabacooToTable } from '../../Storage/addTabacooToTable.js';

    export default {
        data() {
            return {
            selectedFile: null,  // selected file from input
            list: 0
            };
        },
        methods: {
            fileInputed(event) {
                const files = event.target.files;
                this.selectedFile = files && files.length ? files[0] : null;
            },
            async load() {
                if (!this.selectedFile) {
                    return;
                }
                try {
                    const jsonData = await loadDataFromXls(this.selectedFile, this.list);
                    // 2. Проходим по каждой строке и вставляем в БД
                    for (const row of jsonData) {
                        const brand = row['Бренд'];
                        const name  = row['Название Смеси'];
                        // вы можете также передавать крепость, если расширите функцию
                        
                        // ждем выполнения insert’а перед переходом к следующей строке
                        await addTabacooToTable(name, brand);
                    }

                    console.log(`Обработано ${jsonData.length} строк.`);
                } catch (err) {
                    console.error('Ошибка загрузки XLS:', err);
                }
            }
        }
    }
</script>
