<template>
  <div class="flex flex-row items-end gap-6 p-8 font-sans">
    <!-- Zielort -->
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-gray-700 text-sm font-medium">Zielort</label>
      <Select
        inputId="zielort"
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
        inputId="reisezeitraum"
        v-model="selectedDate"
        placeholder="Reisezeitraum wählen"
        class="w-64"
      />
    </div>

    <!-- Personen -->
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-gray-700 text-sm font-medium">Personen</label>
      <InputNumber
        inputId="personen"
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-36"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <!-- Search Button -->
    <Button 
      label="Suche" 
      class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] text-white px-6 py-2 font-medium" 
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

const selectedDate = ref(null);
const personCount = ref(2);
</script>