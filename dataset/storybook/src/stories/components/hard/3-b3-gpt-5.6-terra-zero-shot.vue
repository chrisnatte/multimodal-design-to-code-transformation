<template>
    <div class="flex w-[837px] items-start gap-8 bg-white">
        <div class="flex w-[216px] flex-col gap-0.5">
            <label for="destination" class="text-sm leading-[21px] text-surface-900">Zielort</label>
            <Select
                v-model="destination"
                inputId="destination"
                :options="destinations"
                optionLabel="label"
                optionValue="value"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-[216px]"
            />
        </div>

        <div class="flex w-[268px] flex-col">
            <label for="travel-period" class="mb-0.5 w-[216px] text-sm leading-[21px] text-surface-900">Reisezeitraum</label>
            <DatePicker
                v-model="travelPeriod"
                inputId="travel-period"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                dateFormat="dd.mm.yy"
                class="w-[216px]"
            />
            <DatePicker
                v-model="travelPeriod"
                selectionMode="range"
                inline
                :defaultDate="calendarDate"
                class="mt-0.5 w-[268px]"
            />
        </div>

        <div class="flex w-[192px] items-end">
            <div class="flex w-full flex-col">
                <label for="people" class="mb-0.5 text-sm leading-[21px] text-surface-900">Personen</label>
                <InputNumber
                    v-model="people"
                    inputId="people"
                    :min="0"
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonIcon="pi pi-minus"
                    incrementButtonIcon="pi pi-plus"
                    class="w-[192px]"
                    inputClass="w-full"
                />
            </div>
        </div>

        <div class="flex h-[60px] w-[65px] items-end">
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

const destinations = ref([
    { label: 'Berlin', value: 'Berlin' },
    { label: 'Amsterdam', value: 'Amsterdam' },
    { label: 'Barcelona', value: 'Barcelona' },
    { label: 'Paris', value: 'Paris' }
]);

const destination = ref(null);
const travelPeriod = ref(null);
const calendarDate = ref(new Date(2024, 6, 1));
const people = ref(2);
</script>