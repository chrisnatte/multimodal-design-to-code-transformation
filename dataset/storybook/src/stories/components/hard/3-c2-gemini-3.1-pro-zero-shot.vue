<template>
    <div class="flex flex-row items-end gap-6 p-8 font-sans">
        <!-- Zielort -->
        <div class="flex flex-col gap-2">
            <label for="zielort" class="text-gray-700 text-sm font-medium">Zielort</label>
            <Select
                id="zielort"
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-64"
            />
        </div>

        <!-- Reisezeitraum -->
        <div class="flex flex-col gap-2">
            <label for="reisezeitraum" class="text-gray-700 text-sm font-medium">Reisezeitraum</label>
            <DatePicker
                id="reisezeitraum"
                v-model="travelDates"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                class="w-64"
            />
        </div>

        <!-- Personen -->
        <div class="flex flex-col gap-2">
            <label for="personen" class="text-gray-700 text-sm font-medium">Personen</label>
            <InputNumber
                id="personen"
                v-model="persons"
                showButtons
                buttonLayout="horizontal"
                :min="1"
                class="w-36"
            >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus text-gray-500" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus text-gray-500" />
                </template>
            </InputNumber>
        </div>

        <!-- Suche Button -->
        <Button 
            label="Suche" 
            class="!bg-[#1eb589] !border-[#1eb589] hover:!bg-[#179b74] text-white px-8 py-2.5 font-medium rounded-md" 
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedCity = ref(null);
const cities = ref([
    { name: 'Berlin' },
    { name: 'Amsterdam' },
    { name: 'Barcelona' },
    { name: 'Paris' }
]);

const travelDates = ref(null);
const persons = ref(2);
</script>