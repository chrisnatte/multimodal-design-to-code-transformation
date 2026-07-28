<template>
    <div class="flex h-20 w-full items-center px-6">
        <IconField class="w-54">
            <InputIcon class="pi pi-search text-sm" />
            <InputText v-model="searchQuery" size="small" placeholder="Benutzer1" fluid />
        </IconField>

        <InputNumber
            v-model="age"
            class="ml-6 w-[18.25rem]"
            inputId="age"
            size="small"
            placeholder="Alter eingeben"
            showButtons
            buttonLayout="horizontal"
            :useGrouping="false"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
        </InputNumber>

        <Divider layout="vertical" class="!mx-7 !my-0 !h-6" />

        <div class="flex items-center gap-3">
            <ToggleSwitch v-model="showInformation" inputId="show-information" />
            <label for="show-information" class="text-sm text-surface-900">Informationen einblenden</label>
        </div>

        <div class="ml-14 flex items-center gap-2">
            <RadioButton v-model="firstOption" inputId="option-one" name="first-option" value="Option1" />
            <label for="option-one" class="text-sm text-surface-600">Option1</label>
        </div>

        <div class="ml-8 flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-two" name="selected-option" value="Option1" />
            <label for="option-two" class="text-sm text-surface-600">Option1</label>
        </div>

        <div class="ml-8 flex items-center gap-2">
            <RadioButton v-model="disabledOption" inputId="option-three" name="disabled-option" value="Option1" disabled />
            <label for="option-three" class="text-sm text-surface-600">Option1</label>
        </div>

        <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" size="small" class="ml-auto" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const searchQuery = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const firstOption = ref(null);
const selectedOption = ref('Option1');
const disabledOption = ref(null);
</script>