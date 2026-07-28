<template>
    <div class="flex h-20 items-center bg-white px-6">
        <div class="relative w-[216px]">
            <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
            <InputText
                v-model="username"
                size="small"
                class="w-full !pl-9"
                aria-label="Benutzer"
            />
        </div>

        <InputNumber
            v-model="age"
            placeholder="Alter eingeben"
            size="small"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            class="ml-6 w-[292px]"
            inputClass="!text-sm"
            aria-label="Alter"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus text-sm"></span>
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus text-sm"></span>
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dashed" class="!mx-7 !h-6" />

        <div class="flex items-center gap-3">
            <ToggleSwitch v-model="showInformation" inputId="show-information" />
            <label for="show-information" class="text-sm text-slate-900">Informationen einblenden</label>
        </div>

        <Divider layout="vertical" type="dashed" class="!mx-7 !h-6" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-one" name="options" value="option-one" />
            <label for="option-one" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="ml-8 flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-two" name="options" value="option-two" />
            <label for="option-two" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="ml-8 flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-three" name="options" value="option-three" disabled />
            <label for="option-three" class="text-sm text-slate-600">Option1</label>
        </div>

        <Button label="Suche" icon="pi pi-check" iconPos="right" size="small" class="ml-auto" />
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

const username = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const selectedOption = ref('option-two');
</script>