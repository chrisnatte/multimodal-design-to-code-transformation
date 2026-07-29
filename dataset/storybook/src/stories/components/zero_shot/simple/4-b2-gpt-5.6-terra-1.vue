<template>
    <div class="flex h-[181px] w-[127.5px] flex-col bg-white p-6">
        <div class="flex w-[79.5px] flex-col gap-[4px]">
            <div class="flex h-[17.5px] items-center gap-[7px]">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option1"
                    name="options"
                    value="Option1"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-checked-background:#10b981] [--p-radiobutton-checked-border-color:#10b981] [--p-radiobutton-checked-hover-background:#10b981] [--p-radiobutton-checked-hover-border-color:#10b981] [--p-radiobutton-icon-checked-color:#ffffff]"
                />
                <label for="option1" class="font-['Inter'] text-[14px] font-normal leading-[17px] text-surface-900">
                    Option1
                </label>
            </div>

            <Divider class="m-0 h-[13px] w-full [--p-divider-border-color:#e2e8f0]" />

            <div class="flex h-[17.5px] items-center gap-[7px]">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option2"
                    name="options"
                    value="Option2"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
                />
                <label for="option2" class="font-['Inter'] text-[14px] font-normal leading-[17px] text-surface-900">
                    Option2
                </label>
            </div>

            <Divider class="m-0 h-[13px] w-full [--p-divider-border-color:#e2e8f0]" />

            <div class="flex h-[17.5px] items-center gap-[7px]">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option3"
                    name="options"
                    value="Option3"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
                />
                <label for="option3" class="font-['Inter'] text-[14px] font-normal leading-[17px] text-surface-900">
                    Option3
                </label>
            </div>

            <Divider class="m-0 h-[13px] w-full [--p-divider-border-color:#e2e8f0]" />

            <div class="flex h-[17.5px] items-center gap-[7px]">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option4"
                    name="options"
                    value="Option4"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-border-color:#cbd5e1]"
                />
                <label for="option4" class="font-['Inter'] text-[14px] font-normal leading-[17px] text-surface-900">
                    Option4
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>