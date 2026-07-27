<template>
    <div class="flex items-center gap-6">
        <IconField class="w-[216px]">
            <InputIcon class="pi pi-search" />
            <InputText
                v-model="username"
                class="h-[33px] w-full text-sm"
                placeholder="Benutzer eingeben"
                aria-label="Benutzer suchen"
            />
        </IconField>

        <InputNumber
            v-model="age"
            class="w-[292px]"
            inputClass="h-[33px] text-sm"
            placeholder="Alter eingeben"
            showButtons
            buttonLayout="horizontal"
            fluid
            aria-label="Alter eingeben"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !min-h-6" />

        <div class="flex items-center gap-4">
            <ToggleSwitch v-model="showInformation" inputId="show-information" />
            <label for="show-information" class="text-sm">Informationen einblenden</label>
        </div>

        <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !min-h-6" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-1" name="options" value="Option1" />
            <label for="option-1" class="text-sm">Option1</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-2" name="options" value="Option2" />
            <label for="option-2" class="text-sm">Option2</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-3" name="options" value="Option3" disabled />
            <label for="option-3" class="text-sm">Option3</label>
        </div>

        <Button label="Suche" icon="pi pi-check" iconPos="right" class="h-[33px]" />
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

const username = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const selectedOption = ref('Option2');
</script>