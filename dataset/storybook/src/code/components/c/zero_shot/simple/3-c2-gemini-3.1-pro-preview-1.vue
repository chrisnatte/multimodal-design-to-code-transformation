<template>
    <div class="flex items-center justify-center p-8 gap-6">
        <Slider v-model="value" class="w-48" :min="0" :max="10" />
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="vertical"
            style="width: 3rem"
            :min="0"
            :max="10"
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
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>