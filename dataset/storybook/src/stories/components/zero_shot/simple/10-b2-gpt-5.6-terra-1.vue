<template>
    <div class="flex w-full max-w-[1303.5px] flex-col bg-white p-6">
        <div class="flex items-center gap-6">
            <div class="relative w-[216px]">
                <i class="pi pi-search absolute left-[10.5px] top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500" aria-hidden="true"></i>
                <InputText
                    v-model="username"
                    aria-label="Benutzer suchen"
                    class="h-[33px] w-full !pl-9 text-sm"
                />
            </div>

            <InputNumber
                v-model="age"
                inputId="age"
                placeholder="Alter eingeben"
                showButtons
                buttonLayout="horizontal"
                :step="1"
                fluid
                class="h-[33px] w-[292px]"
                inputClass="h-[33px] text-sm"
            >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus text-sm" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus text-sm" />
                </template>
            </InputNumber>

            <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !w-[9px]" />

            <div class="flex items-center gap-4">
                <ToggleSwitch v-model="showInformation" inputId="show-information" />
                <label for="show-information" class="whitespace-nowrap text-sm">Informationen einblenden</label>
            </div>

            <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !w-[9px]" />

            <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                    <RadioButton v-model="selectedOption" inputId="option-1" name="filter-option" value="Option1" />
                    <label for="option-1" class="text-sm">Option1</label>
                </div>

                <div class="flex items-center gap-2">
                    <RadioButton v-model="selectedOption" inputId="option-2" name="filter-option" value="Option2" />
                    <label for="option-2" class="text-sm">Option2</label>
                </div>

                <div class="flex items-center gap-2">
                    <RadioButton v-model="selectedOption" inputId="option-3" name="filter-option" value="Option3" disabled />
                    <label for="option-3" class="text-sm text-surface-400">Option3</label>
                </div>
            </div>

            <Button label="Suche" icon="pi pi-check" iconPos="right" class="h-[33px] text-sm" />
        </div>
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