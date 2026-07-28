<template>
    <div class="flex w-[79.5px] flex-col gap-1">
        <div class="flex h-[17.5px] items-center gap-[7px]">
            <RadioButton
                v-model="selectedOption"
                inputId="option1"
                name="options"
                value="Option1"
                class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-checked-background:#10b981] [--p-radiobutton-checked-border-color:#10b981] [--p-radiobutton-icon-size:10.5px]"
            />
            <label for="option1" class="text-sm leading-[17px]">Option1</label>
        </div>

        <Divider class="!my-0 !h-[13px] !py-[6px] [--p-divider-border-color:#e2e8f0]" />

        <div class="flex h-[17.5px] items-center gap-[7px]">
            <RadioButton
                v-model="selectedOption"
                inputId="option2"
                name="options"
                value="Option2"
                class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
            />
            <label for="option2" class="text-sm leading-[17px]">Option2</label>
        </div>

        <Divider class="!my-0 !h-[13px] !py-[6px] [--p-divider-border-color:#e2e8f0]" />

        <div class="flex h-[17.5px] items-center gap-[7px]">
            <RadioButton
                v-model="selectedOption"
                inputId="option3"
                name="options"
                value="Option3"
                class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
            />
            <label for="option3" class="text-sm leading-[17px]">Option3</label>
        </div>

        <Divider class="!my-0 !h-[13px] !py-[6px] [--p-divider-border-color:#e2e8f0]" />

        <div class="flex h-[17.5px] items-center gap-[7px]">
            <RadioButton
                v-model="selectedOption"
                inputId="option4"
                name="options"
                value="Option4"
                class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
            />
            <label for="option4" class="text-sm leading-[17px]">Option4</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>