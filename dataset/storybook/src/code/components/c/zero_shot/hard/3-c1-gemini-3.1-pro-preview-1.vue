<template>
    <div class="flex flex-row flex-wrap items-end gap-6 p-6 font-sans">
        <!-- Zielort -->
        <div class="flex flex-col gap-2">
            <label for="zielort" class="text-gray-700 text-sm">Zielort</label>
            <Select 
                v-model="selectedCity" 
                :options="cities" 
                optionLabel="name" 
                placeholder="Zielort auswählen" 
                filter 
                filterPlaceholder="Suche..." 
                inputId="zielort"
                class="w-64 border-emerald-500" 
            />
        </div>

        <!-- Reisezeitraum -->
        <div class="flex flex-col gap-2">
            <label for="reisezeitraum" class="text-gray-700 text-sm">Reisezeitraum</label>
            <DatePicker 
                v-model="dates" 
                selectionMode="range" 
                placeholder="Reisezeitraum wählen" 
                inputId="reisezeitraum"
                class="w-64 border-emerald-500" 
            />
        </div>

        <!-- Personen -->
        <div class="flex flex-col gap-2">
            <label for="personen" class="text-gray-700 text-sm">Personen</label>
            <InputNumber 
                v-model="persons" 
                inputId="personen" 
                showButtons 
                buttonLayout="horizontal" 
                :min="1" 
                :max="20" 
                class="w-36" 
                inputClass="text-center w-full"
            >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus text-gray-400" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus text-gray-400" />
                </template>
            </InputNumber>
        </div>

        <!-- Suche Button -->
        <Button 
            label="Suche" 
            class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white px-6 py-2.5" 
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedCity = ref({ name: 'Berlin', code: 'BER' });
const cities = ref([
    { name: 'Berlin', code: 'BER' },
    { name: 'Amsterdam', code: 'AMS' },
    { name: 'Barcelona', code: 'BCN' },
    { name: 'Paris', code: 'PAR' }
]);

const dates = ref(null);
const persons = ref(2);
</script>