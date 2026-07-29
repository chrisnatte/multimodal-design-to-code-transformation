<template>
    <div class="flex w-full items-center bg-white px-6 py-6">
        <div class="flex w-full items-center gap-6">
            <div class="relative w-[216px]">
                <i class="pi pi-search pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
                <InputText
                    v-model="username"
                    aria-label="Benutzer suchen"
                    class="!h-[33px] !w-full !pl-9 !text-sm"
                />
            </div>

            <InputNumber
                v-model="age"
                input-id="age"
                placeholder="Alter eingeben"
                :use-grouping="false"
                show-buttons
                button-layout="horizontal"
                decrement-button-icon="pi pi-minus"
                increment-button-icon="pi pi-plus"
                class="w-[292px]"
                input-class="!h-[33px] !text-sm"
                increment-button-class="!h-[33px] !w-[35px]"
                decrement-button-class="!h-[33px] !w-[35px]"
            />

            <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />

            <div class="flex items-center gap-4">
                <ToggleSwitch
                    v-model="showInformation"
                    input-id="show-information"
                    aria-label="Informationen einblenden"
                    class="scale-[0.84]"
                    style="--p-toggleswitch-checked-background: #10b981; --p-toggleswitch-checked-hover-background: #10b981"
                />
                <label for="show-information" class="whitespace-nowrap text-sm text-slate-900">
                    Informationen einblenden
                </label>
            </div>

            <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedOption"
                    input-id="option-one"
                    name="filter-option"
                    value="option-one"
                    style="--p-radiobutton-checked-background: #10b981; --p-radiobutton-checked-border-color: #10b981"
                />
                <label for="option-one" class="text-sm text-slate-600">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedOption"
                    input-id="option-two"
                    name="filter-option"
                    value="option-two"
                    style="--p-radiobutton-checked-background: #10b981; --p-radiobutton-checked-border-color: #10b981"
                />
                <label for="option-two" class="text-sm text-slate-600">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedOption"
                    input-id="option-three"
                    name="filter-option"
                    value="option-three"
                    disabled
                />
                <label for="option-three" class="text-sm text-slate-600">Option1</label>
            </div>

            <Button
                label="Suche"
                icon="pi pi-check"
                icon-pos="right"
                severity="success"
                class="!h-[33px] !px-3 !text-sm"
            />
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

const username = ref('Benutzer1')
const age = ref(null)
const showInformation = ref(true)
const selectedOption = ref('option-two')
</script>