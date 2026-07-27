<template>
    <div class="flex h-[101px] w-[286px] items-center gap-6">
        <Slider
            v-model="sliderValue"
            :min="0"
            :max="100"
            aria-label="Value slider"
            class="w-[214px]"
            :dt="{
                track: {
                    background: '#e2e8f0',
                    size: '3px',
                    borderRadius: '6px'
                },
                range: {
                    background: '#10b981'
                },
                handle: {
                    width: '20px',
                    height: '20px',
                    borderRadius: '9999px',
                    background: '#e2e8f0',
                    content: {
                        width: '16px',
                        height: '16px',
                        borderRadius: '9999px',
                        background: '#ffffff'
                    }
                }
            }"
        />
        <InputNumber
            v-model="numberValue"
            input-id="value-number"
            aria-label="Value number"
            show-buttons
            button-layout="vertical"
            :use-grouping="false"
            class="h-[101px] w-[48px]"
            :pt="{
                root: { class: 'h-[101px] w-[48px]' },
                pcInputText: { root: { class: 'h-[33px] w-[48px] text-center text-sm' } },
                incrementButton: { class: 'h-[35px] w-[48px]' },
                decrementButton: { class: 'h-[35px] w-[48px]' }
            }"
            :dt="{
                button: {
                    width: '48px',
                    background: '#000000',
                    color: '#ffffff',
                    border: {
                        color: '#000000'
                    }
                }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const sliderValue = ref(26);
const numberValue = ref(2);
</script>