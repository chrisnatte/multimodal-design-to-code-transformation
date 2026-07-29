<template>
    <div class="w-fit bg-white p-6">
        <div class="flex items-center gap-6">
            <div class="relative w-[216px]">
                <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500" aria-hidden="true" />
                <InputText
                    v-model="searchValue"
                    aria-label="Benutzer suchen"
                    class="!h-[33px] !w-[216px] !pl-9"
                />
            </div>

            <InputNumber
                v-model="ageValue"
                input-id="age"
                aria-label="Alter eingeben"
                placeholder="Alter eingeben"
                :use-grouping="false"
                show-buttons
                button-layout="horizontal"
                class="w-[292px]"
                input-class="!h-[33px]"
            >
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
            </InputNumber>

            <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

            <div class="flex items-center gap-4">
                <ToggleSwitch
                    v-model="showInformation"
                    input-id="show-information"
                    aria-label="Informationen einblenden"
                />
                <label for="show-information" class="whitespace-nowrap text-sm">
                    Informationen einblenden
                </label>
            </div>

            <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

            <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                    <RadioButton
                        v-model="selectedOption"
                        input-id="option-1"
                        name="filter-option"
                        value="Option1"
                    />
                    <label for="option-1" class="text-sm">Option1</label>
                </div>

                <div class="flex items-center gap-2">
                    <RadioButton
                        v-model="selectedOption"
                        input-id="option-2"
                        name="filter-option"
                        value="Option2"
                    />
                    <label for="option-2" class="text-sm">Option2</label>
                </div>

                <div class="flex items-center gap-2">
                    <RadioButton
                        v-model="selectedOption"
                        input-id="option-3"
                        name="filter-option"
                        value="Option3"
                        disabled
                    />
                    <label for="option-3" class="text-sm text-surface-400">Option3</label>
                </div>
            </div>

            <Button label="Suche" icon="pi pi-check" icon-pos="right" class="!h-[33px]" />
        </div>
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

const searchValue = ref('Benutzer1')
const ageValue = ref(null)
const showInformation = ref(true)
const selectedOption = ref('Option2')
</script>