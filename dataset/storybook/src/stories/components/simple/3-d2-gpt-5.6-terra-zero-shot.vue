<template>
    <div class="flex h-[101px] w-[286px] items-center gap-6">
        <Slider
            v-model="sliderValue"
            :min="0"
            :max="100"
            aria-label="Value slider"
            class="figma-slider flex-1"
        />
        <InputNumber
            v-model="numberValue"
            :min="0"
            :max="99"
            :useGrouping="false"
            showButtons
            buttonLayout="vertical"
            aria-label="Number value"
            class="figma-inputnumber"
        >
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
        </InputNumber>
    </div>
</template>

<style scoped>
:deep(.figma-slider.p-slider) {
    height: 3px;
    background: #e2e8f0;
    border-radius: 6px;
}

:deep(.figma-slider .p-slider-range) {
    background: #10b981;
    border-radius: 6px 0 0 6px;
}

:deep(.figma-slider .p-slider-handle) {
    width: 20px;
    height: 20px;
    margin-top: -8.5px;
    margin-left: -10px;
    border: 2px solid #e2e8f0;
    border-radius: 9999px;
    background: #ffffff;
    box-shadow: none;
}

:deep(.figma-slider .p-slider-handle:hover),
:deep(.figma-slider .p-slider-handle:focus) {
    background: #ffffff;
    border-color: #cbd5e1;
    box-shadow: none;
}

:deep(.figma-inputnumber.p-inputnumber) {
    display: flex;
    width: 48px;
    height: 101px;
    flex-direction: column;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
}

:deep(.figma-inputnumber .p-inputnumber-input) {
    order: 2;
    width: 46px;
    height: 32px;
    padding: 7px 10px;
    border: 0;
    border-top: 1px solid #cbd5e1;
    border-bottom: 1px solid #cbd5e1;
    border-radius: 0;
    background: #ffffff;
    color: #334155;
    font-size: 14px;
    text-align: center;
    box-shadow: none;
}

:deep(.figma-inputnumber .p-inputnumber-button) {
    width: 46px;
    height: 34px;
    min-height: 34px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: #ffffff;
    color: #94a3b8;
    box-shadow: none;
}

:deep(.figma-inputnumber .p-inputnumber-increment-button) {
    order: 1;
}

:deep(.figma-inputnumber .p-inputnumber-decrement-button) {
    order: 3;
}

:deep(.figma-inputnumber .p-inputnumber-button:hover),
:deep(.figma-inputnumber .p-inputnumber-button:focus) {
    background: #f8fafc;
    color: #64748b;
    box-shadow: none;
}

:deep(.figma-inputnumber .p-button-icon) {
    font-size: 14px;
}
</style>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const sliderValue = ref(26);
const numberValue = ref(2);
</script>