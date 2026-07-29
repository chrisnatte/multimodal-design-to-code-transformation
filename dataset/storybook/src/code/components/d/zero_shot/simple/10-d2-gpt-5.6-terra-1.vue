<template>
    <div class="w-full bg-white p-6">
        <div class="flex min-w-max items-center gap-6">
            <div class="relative w-[216px]">
                <i class="pi pi-search pointer-events-none absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
                <InputText
                    id="user-search"
                    v-model="username"
                    aria-label="Benutzer suchen"
                    class="!h-[33px] !w-[216px] !pl-9 !text-sm"
                />
            </div>

            <InputNumber
                v-model="age"
                inputId="age"
                placeholder="Alter eingeben"
                aria-label="Alter eingeben"
                showButtons
                buttonLayout="horizontal"
                class="!w-[292px]"
                :pt="{
                    decrementButton: { class: '!h-[33px] !w-[35px]' },
                    incrementButton: { class: '!h-[33px] !w-[35px]' },
                    pcInputText: { root: { class: '!h-[33px] !text-sm' } }
                }"
            >
                <template #decrementbuttonicon>
                    <span class="pi pi-minus text-sm" />
                </template>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus text-sm" />
                </template>
            </InputNumber>

            <div class="flex h-6 w-[9px] items-center justify-center">
                <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />
            </div>

            <div class="flex items-center gap-4">
                <ToggleSwitch
                    v-model="showInformation"
                    inputId="show-information"
                    aria-label="Informationen einblenden"
                    class="[--p-toggleswitch-width:35px] [--p-toggleswitch-height:21px] [--p-toggleswitch-handle-size:14px]"
                />
                <label for="show-information" class="whitespace-nowrap text-sm text-slate-900">Informationen einblenden</label>
            </div>

            <div class="flex h-6 w-[9px] items-center justify-center">
                <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />
            </div>

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option-one"
                    name="filter-option"
                    value="option-one"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-icon-size:10.5px]"
                />
                <label for="option-one" class="text-sm text-slate-700">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedOption"
                    inputId="option-two"
                    name="filter-option"
                    value="option-two"
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px] [--p-radiobutton-icon-size:10.5px]"
                />
                <label for="option-two" class="text-sm text-slate-700">Option1</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="disabledOption"
                    inputId="option-three"
                    name="disabled-filter-option"
                    value="option-three"
                    disabled
                    class="[--p-radiobutton-width:17.5px] [--p-radiobutton-height:17.5px]"
                />
                <label for="option-three" class="text-sm text-slate-700">Option1</label>
            </div>

            <Button
                label="Suche"
                icon="pi pi-check"
                iconPos="right"
                class="!h-[33px] !px-[10.5px] !py-[7px] !text-sm"
            />
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
const selectedOption = ref('option-two');
const disabledOption = ref(null);
</script>