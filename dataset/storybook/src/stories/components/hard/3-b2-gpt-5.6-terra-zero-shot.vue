<template>
    <div class="flex items-start gap-8">
        <div class="flex w-[216px] flex-col gap-0.5">
            <label for="destination" class="text-sm">Zielort</label>
            <Select
                v-model="destination"
                inputId="destination"
                :options="destinations"
                optionLabel="label"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                appendTo="self"
                class="w-full"
                :pt="{
                    root: { class: 'border-primary' },
                    overlay: { class: 'mt-0.5' }
                }"
            />
        </div>

        <div class="flex w-[268px] flex-col">
            <label for="travel-period" class="mb-0.5 w-[216px] text-sm">Reisezeitraum</label>
            <DatePicker
                v-model="travelPeriod"
                inputId="travel-period"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                appendTo="self"
                class="w-[216px]"
                inputClass="border-primary"
            />
            <DatePicker
                v-model="travelPeriod"
                selectionMode="range"
                inline
                :defaultValue="calendarDate"
                class="mt-0.5 w-[268px]"
            />
        </div>

        <div class="flex w-[192px] flex-col">
            <label for="travelers" class="mb-0.5 ml-[34px] text-sm">Personen</label>
            <InputNumber
                v-model="travelers"
                inputId="travelers"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                fluid
            >
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
            </InputNumber>
        </div>

        <div class="flex h-[60px] w-[65px] flex-col justify-end">
            <Button label="Suche" class="h-[33px] w-[65px]" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destination = ref(null);
const travelPeriod = ref(null);
const travelers = ref(2);
const calendarDate = ref(new Date(2024, 6, 1));
const destinations = ref([
    { label: 'Berlin' },
    { label: 'Amsterdam' },
    { label: 'Barcelona' },
    { label: 'Paris' }
]);
</script>