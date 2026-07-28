<template>
  <div class="flex flex-wrap items-end gap-4 p-6 font-sans">
    <!-- Zielort (Destination) -->
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-gray-700 text-sm font-medium">Zielort</label>
      <Select
        id="destination"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64 border-emerald-500"
      />
    </div>

    <!-- Reisezeitraum (Travel Period) -->
    <div class="flex flex-col gap-2">
      <label for="travel-period" class="text-gray-700 text-sm font-medium">Reisezeitraum</label>
      <DatePicker
        id="travel-period"
        v-model="travelDates"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-64 border-emerald-500"
      />
    </div>

    <!-- Personen (Persons) -->
    <div class="flex flex-col gap-2">
      <label for="persons" class="text-gray-700 text-sm font-medium">Personen</label>
      <InputNumber
        id="persons"
        v-model="personsCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
        class="w-32"
        inputClass="text-center w-full"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus text-gray-500"></span>
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus text-gray-500"></span>
        </template>
      </InputNumber>
    </div>

    <!-- Suche Button -->
    <Button
      label="Suche"
      class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white px-6 py-2 font-medium"
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

const travelDates = ref(null);
const personsCount = ref(2);
</script>