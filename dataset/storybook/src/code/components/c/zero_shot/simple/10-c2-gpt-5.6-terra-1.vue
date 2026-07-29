<template>
    <div class="flex h-20 items-center border-b border-surface-200 bg-surface-0 px-6 shadow-sm">
        <div class="relative w-[13.5rem]">
            <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-400"></i>
            <InputText
                v-model="username"
                aria-label="Benutzer suchen"
                class="w-full !py-2 !pl-9 !text-sm"
            />
        </div>

        <InputNumber
            v-model="age"
            inputId="age"
            placeholder="Alter eingeben"
            showButtons
            buttonLayout="horizontal"
            :useGrouping="false"
            class="ml-6 w-[18.25rem]"
            inputClass="!text-sm"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus"></span>
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus"></span>
            </template>
        </InputNumber>

        <div class="mx-6 h-6">
            <Divider layout="vertical" class="!m-0 !h-6 !p-0" type="dotted" />
        </div>

        <div class="flex items-center gap-3 whitespace-nowrap">
            <ToggleSwitch v-model="showInformation" inputId="show-information" />
            <label for="show-information" class="text-sm text-surface-900">Informationen einblenden</label>
        </div>

        <div class="ml-14 flex items-center gap-8">
            <div class="flex items-center gap-2 whitespace-nowrap">
                <RadioButton v-model="selectedOption" inputId="option-one" name="options" value="Option1" />
                <label for="option-one" class="text-sm text-surface-600">Option1</label>
            </div>

            <div class="flex items-center gap-2 whitespace-nowrap">
                <RadioButton v-model="selectedOption" inputId="option-two" name="options" value="Option2" />
                <label for="option-two" class="text-sm text-surface-600">Option1</label>
            </div>

            <div class="flex items-center gap-2 whitespace-nowrap">
                <RadioButton v-model="selectedOption" inputId="option-three" name="options" value="Option3" />
                <label for="option-three" class="text-sm text-surface-600">Option1</label>
            </div>
        </div>

        <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" class="ml-6 !px-3 !py-2 !text-sm" />
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
const selectedOption = ref('Option2');
</script>