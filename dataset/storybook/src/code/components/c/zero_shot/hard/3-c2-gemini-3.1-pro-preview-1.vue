<template>
  <div class="flex flex-row items-end gap-6 p-8 font-sans">
    <!-- Zielort (Destination) -->
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-gray-700 text-sm font-medium">Zielort</label>
      <Select
        id="zielort"
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        class="w-64"
      />
    </div>

    <!-- Reisezeitraum (Travel Period) -->
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-gray-700 text-sm font-medium">Reisezeitraum</label>
      <DatePicker
        id="reisezeitraum"
        v-model="travelPeriod"
        placeholder="Reisezeitraum wählen"
        selectionMode="range"
        class="w-64"
      />
    </div>

    <!-- Personen (Persons) -->
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-gray-700 text-sm font-medium">Personen</label>
      <InputNumber
        id="personen"
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-32"
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
    <div class="flex flex-col gap-2">
      <Button 
        label="Suche" 
        class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] text-white px-6 py-2.5"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref({ name: 'Berlin', code: 'BER' });
const destinations = ref([
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
]);

const travelPeriod = ref(null);
const persons = ref(2);
</script>