<template>
    <div class="flex h-20 items-center gap-6 px-6">
        <IconField class="w-[216px]">
            <InputIcon class="pi pi-search" />
            <InputText v-model="userName" class="h-8 w-full text-sm" aria-label="Benutzer suchen" />
        </IconField>

        <InputGroup class="w-[293px]">
            <InputGroupAddon class="p-0">
                <Button
                    icon="pi pi-minus"
                    severity="secondary"
                    text
                    class="h-8 w-9 rounded-none"
                    aria-label="Alter verringern"
                />
            </InputGroupAddon>
            <InputText
                v-model="age"
                placeholder="Alter eingeben"
                class="h-8 w-full text-sm"
                aria-label="Alter eingeben"
            />
            <InputGroupAddon class="p-0">
                <Button
                    icon="pi pi-plus"
                    severity="secondary"
                    text
                    class="h-8 w-9 rounded-none"
                    aria-label="Alter erhöhen"
                />
            </InputGroupAddon>
        </InputGroup>

        <Divider layout="vertical" class="!mx-1 !h-6" />

        <div class="flex items-center gap-3">
            <ToggleSwitch v-model="showInformation" input-id="information" />
            <label for="information" class="text-sm text-surface-900">
                Informationen einblenden
            </label>
        </div>

        <Divider layout="vertical" class="!mx-1 !h-6" />

        <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option-one" name="option" value="one" />
                <label for="option-one" class="text-sm text-surface-600">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option-two" name="option" value="two" />
                <label for="option-two" class="text-sm text-surface-600">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option-three" name="option" value="three" />
                <label for="option-three" class="text-sm text-surface-600">Option1</label>
            </div>
        </div>

        <Button
            label="Suche"
            icon="pi pi-check"
            icon-pos="right"
            severity="success"
            class="ml-auto h-8 px-3 text-sm"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const userName = ref('Benutzer1')
const age = ref('')
const showInformation = ref(true)
const selectedOption = ref('two')
</script>