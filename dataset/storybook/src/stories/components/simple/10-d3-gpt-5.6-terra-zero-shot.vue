<template>
    <div class="flex items-center gap-6 bg-white p-6 font-sans">
        <span class="relative block w-[216px]">
            <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
            <InputText
                v-model="user"
                aria-label="Benutzer"
                class="!h-[33px] !w-full !pl-9 !text-sm"
            />
        </span>

        <InputNumber
            v-model="age"
            input-id="age"
            placeholder="Alter eingeben"
            :use-grouping="false"
            show-buttons
            button-layout="horizontal"
            :step="1"
            class="w-[292px]"
            :pt="{
                input: { class: '!h-[33px] !rounded-none !text-sm' },
                decrementButton: { class: '!h-[33px] !w-[35px] !rounded-r-none' },
                incrementButton: { class: '!h-[33px] !w-[35px] !rounded-l-none' }
            }"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus text-sm" />
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus text-sm" />
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dashed" class="!mx-0 !h-6 !min-h-6" />

        <div class="flex items-center gap-4">
            <ToggleSwitch v-model="showInformation" input-id="show-information" />
            <label for="show-information" class="whitespace-nowrap text-sm text-slate-800">
                Informationen einblenden
            </label>
        </div>

        <Divider layout="vertical" type="dashed" class="!mx-0 !h-6 !min-h-6" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" input-id="option-one" name="options" value="one" />
            <label for="option-one" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" input-id="option-two" name="options" value="two" />
            <label for="option-two" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" input-id="option-three" name="options" value="three" disabled />
            <label for="option-three" class="text-sm text-slate-600">Option1</label>
        </div>

        <Button label="Suche" icon="pi pi-check" icon-pos="right" class="!h-[33px] !px-3 !text-sm" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const user = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const selectedOption = ref('two');
</script>