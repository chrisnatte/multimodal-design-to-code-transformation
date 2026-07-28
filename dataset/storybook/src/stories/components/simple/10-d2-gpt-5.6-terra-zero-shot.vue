<template>
    <div class="flex h-[33px] items-center gap-6 whitespace-nowrap">
        <div class="relative w-[216px]">
            <i class="pi pi-search absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" aria-hidden="true"></i>
            <InputText
                id="user-search"
                v-model="userName"
                aria-label="Benutzer suchen"
                class="h-[33px] w-full !border-[#cbd5e1] !py-[7px] !pl-[35px] !pr-[10px] text-sm"
            />
        </div>

        <InputNumber
            v-model="age"
            inputId="age"
            aria-label="Alter eingeben"
            placeholder="Alter eingeben"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            class="h-[33px] w-[292px]"
            inputClass="h-[33px] !border-[#cbd5e1] !rounded-none !px-[10px] text-sm"
            decrementButtonClass="!h-[33px] !w-[35px] !border-[#cbd5e1] !bg-white !text-slate-400 !rounded-r-none"
            incrementButtonClass="!h-[33px] !w-[35px] !border-[#cbd5e1] !bg-white !text-slate-400 !rounded-l-none"
        >
            <template #decrementbuttonicon>
                <span class="pi pi-minus text-sm"></span>
            </template>
            <template #incrementbuttonicon>
                <span class="pi pi-plus text-sm"></span>
            </template>
        </InputNumber>

        <Divider layout="vertical" type="dashed" class="!mx-0 !h-6 !min-h-6 !py-0" />

        <div class="flex items-center gap-4">
            <ToggleSwitch
                v-model="showInformation"
                inputId="show-information"
                aria-label="Informationen einblenden"
                class="!h-[21px] !w-[35px]"
                :dt="{
                    checkedBackground: '#10b981',
                    checkedHoverBackground: '#10b981'
                }"
            />
            <label for="show-information" class="text-sm text-slate-900">Informationen einblenden</label>
        </div>

        <Divider layout="vertical" type="dashed" class="!mx-0 !h-6 !min-h-6 !py-0" />

        <div class="flex items-center gap-[7px]">
            <RadioButton v-model="selectedOption" inputId="option-one" name="options" value="option-one" />
            <label for="option-one" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-[7px]">
            <RadioButton v-model="selectedOption" inputId="option-two" name="options" value="option-two" />
            <label for="option-two" class="text-sm text-slate-600">Option1</label>
        </div>

        <div class="flex items-center gap-[7px]">
            <RadioButton v-model="selectedOption" inputId="option-three" name="options" value="option-three" disabled />
            <label for="option-three" class="text-sm text-slate-600">Option1</label>
        </div>

        <Button
            label="Suche"
            icon="pi pi-check"
            iconPos="right"
            class="!h-[33px] !px-[11px] !py-[7px] !text-sm"
            :dt="{
                primaryBackground: '#10b981',
                primaryHoverBackground: '#10b981',
                primaryActiveBackground: '#10b981',
                primaryBorderColor: '#10b981'
            }"
        />
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

const userName = ref('Benutzer1');
const age = ref(null);
const showInformation = ref(true);
const selectedOption = ref('option-two');
</script>