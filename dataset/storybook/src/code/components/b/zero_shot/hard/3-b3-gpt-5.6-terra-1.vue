<template>
    <div class="flex w-[885px] flex-col gap-2.5 bg-white p-6">
        <div class="flex items-start gap-8">
            <div class="w-[216px]">
                <label for="destination" class="mb-1.5 block text-sm">Zielort</label>
                <Select
                    id="destination"
                    v-model="destination"
                    :options="destinations"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Zielort auswählen"
                    filter
                    filterPlaceholder="Suche..."
                    class="w-full"
                    inputClass="h-[33px] text-sm"
                    panelClass="text-sm"
                />
            </div>

            <div class="w-[268px]">
                <label for="travel-period" class="mb-1.5 block text-sm">Reisezeitraum</label>
                <DatePicker
                    id="travel-period"
                    v-model="travelPeriod"
                    selectionMode="range"
                    dateFormat="dd.mm.yy"
                    placeholder="Reisezeitraum wählen"
                    :showIcon="false"
                    class="w-[216px]"
                    inputClass="h-[33px] text-sm"
                />
            </div>

            <div class="w-[192px]">
                <label for="persons" class="mb-1.5 block text-sm">Personen</label>
                <InputNumber
                    id="persons"
                    v-model="persons"
                    :min="1"
                    :step="1"
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonIcon="pi pi-minus"
                    incrementButtonIcon="pi pi-plus"
                    class="w-full"
                    inputClass="h-[33px] text-sm"
                />
            </div>

            <div class="flex h-[60px] w-[65px] flex-col items-end justify-end">
                <Button label="Suche" class="h-[33px] w-[65px] text-sm" />
            </div>
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
const persons = ref(2);

const destinations = ref([
    { label: 'Berlin', value: 'berlin' },
    { label: 'Amsterdam', value: 'amsterdam' },
    { label: 'Barcelona', value: 'barcelona' },
    { label: 'Paris', value: 'paris' }
]);
</script>