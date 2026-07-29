<template>
    <div class="flex h-20 items-center gap-6 bg-white px-6">
        <span class="relative block w-[216px]">
            <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
            <InputText v-model="username" size="small" class="w-full !pl-9" aria-label="Benutzer" />
        </span>

        <InputNumber
            v-model="age"
            placeholder="Alter eingeben"
            size="small"
            showButtons
            buttonLayout="horizontal"
            :useGrouping="false"
            class="w-[297px]"
            aria-label="Alter"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus text-sm" />
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus text-sm" />
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dotted" class="!mx-0 !h-6" />

        <div class="flex items-center gap-3">
            <ToggleSwitch v-model="showInformation" inputId="show-information" />
            <label for="show-information" class="whitespace-nowrap text-sm text-slate-900">
                Informationen einblenden
            </label>
        </div>

        <Divider layout="vertical" type="dotted" class="!mx-0 !h-6" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-one" name="options" value="option-one" />
            <label for="option-one" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-two" name="options" value="option-two" />
            <label for="option-two" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option-three" name="options" value="option-three" disabled />
            <label for="option-three" class="text-sm text-slate-600">Option1</label>
        </div>

        <Button label="Suche" icon="pi pi-check" iconPos="right" size="small" class="ml-auto" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('Benutzer1')
const age = ref(null)
const showInformation = ref(true)
const selectedOption = ref('option-two')
</script>