<template>
    <div class="flex h-36 items-center justify-center gap-4">
        <Slider v-model="sliderValue" :min="0" :max="100" class="w-56" aria-label="Value slider" />

        <InputNumber
            v-model="numberValue"
            :min="0"
            :max="99"
            showButtons
            buttonLayout="vertical"
            class="w-8"
            aria-label="Number value"
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

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const sliderValue = ref(26);
const numberValue = ref(2);
</script>