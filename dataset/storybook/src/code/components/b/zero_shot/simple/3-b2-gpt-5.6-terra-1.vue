<template>
    <div class="flex w-[334px] flex-col bg-white p-6">
        <div class="flex h-[101px] items-center gap-6">
            <Slider
                v-model="rating"
                aria-label="Bewertung"
                class="flex-1"
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
                        background: '#e2e8f0',
                        content: {
                            width: '16px',
                            height: '16px',
                            background: '#ffffff',
                            borderRadius: '8px'
                        }
                    }
                }"
            />
            <InputNumber
                v-model="rating"
                input-id="rating"
                aria-label="Bewertung"
                show-buttons
                button-layout="vertical"
                class="h-[101px] w-12"
                :pt="{
                    incrementButton: { class: 'bg-black border-black text-white' },
                    decrementButton: { class: 'bg-black border-black text-white' }
                }"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const rating = ref(2);
</script>