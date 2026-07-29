<template>
  <div class="flex flex-row gap-4 items-start p-4 font-sans">
    <!-- Zielort (Destination) -->
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-gray-700 font-medium">Zielort</label>
      <Select
        id="destination"
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64 border-green-500"
      />
    </div>

    <!-- Reisezeitraum (Travel Period) -->
    <div class="flex flex-col gap-2">
      <label for="travel-period" class="text-gray-700 font-medium">Reisezeitraum</label>
      <DatePicker
        id="travel-period"
        v-model="travelPeriod"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-64 border-green-500"
      />
    </div>

    <!-- Personen (Persons) -->
    <div class="flex flex-col gap-2">
      <label for="persons" class="text-gray-700 font-medium">Personen</label>
      <InputNumber
        id="persons"
        v-model="personsCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="10"
        class="w-40"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <!-- Suche (Search) Button -->
    <div class="flex flex-col gap-2 justify-end h-full mt-8">
      <Button label="Suche" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white px-6" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref(null);
const destinations = ref([
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
]);

const travelPeriod = ref(null);
const personsCount = ref(2);
</script>