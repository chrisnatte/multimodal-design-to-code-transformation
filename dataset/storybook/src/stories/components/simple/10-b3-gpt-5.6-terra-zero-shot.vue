<template>
    <div class="flex h-[33px] w-fit items-center gap-6">
        <div class="relative w-[216px]">
            <span class="pi pi-search absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500" aria-hidden="true" />
            <InputText v-model="searchValue" aria-label="Benutzer suchen" class="!h-[33px] !w-full !pl-9 text-sm" />
        </div>

        <InputNumber
            v-model="age"
            input-id="age"
            placeholder="Alter eingeben"
            show-buttons
            button-layout="horizontal"
            :step="1"
            class="w-[292px]"
            input-class="!h-[33px] text-sm"
            aria-label="Alter eingeben"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus text-sm" />
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus text-sm" />
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dashed" class="!h-6 !w-[9px]" />

        <div class="flex h-[21px] w-[220px] items-center gap-4">
            <ToggleSwitch v-model="showInformation" input-id="show-information" />
            <label for="show-information" class="whitespace-nowrap text-sm">Informationen einblenden</label>
        </div>

        <Divider layout="vertical" type="dashed" class="!h-6 !w-[9px]" />

        <label class="flex w-[75.5px] items-center gap-2 text-sm">
            <RadioButton v-model="selectedOption" input-id="option-1" name="options" value="option1" />
            <span>Option1</span>
        </label>

        <label class="flex w-[77.5px] items-center gap-2 text-sm">
            <RadioButton v-model="selectedOption" input-id="option-2" name="options" value="option2" />
            <span>Option2</span>
        </label>

        <label class="flex w-[78.5px] items-center gap-2 text-sm">
            <RadioButton v-model="selectedOption" input-id="option-3" name="options" value="option3" disabled />
            <span>Option3</span>
        </label>

        <Button label="Suche" icon="pi pi-check" icon-pos="right" class="!h-[33px] !w-[86px] text-sm" />
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

const searchValue = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const selectedOption = ref('option2');
</script>