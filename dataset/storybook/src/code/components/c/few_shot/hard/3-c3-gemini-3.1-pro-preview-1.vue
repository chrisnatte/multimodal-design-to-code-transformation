<template>
  <div class="flex items-end gap-6 p-8 font-sans">
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        inputId="destination"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="dates" class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="selectedDates"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        inputId="dates"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="persons" class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="persons"
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

    <Button 
      label="Suche" 
      class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] text-white px-6" 
    />
  </div>
</template>

<script setup lang="ts">
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

const selectedDates = ref(null);
const persons = ref(2);
</script>