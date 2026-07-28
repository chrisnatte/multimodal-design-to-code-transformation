<template>
  <div class="flex flex-row items-end gap-8 p-4 font-sans">
    
    <!-- Zielort (Destination) -->
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-surface-700 dark:text-surface-300">Zielort</label>
      <Select
        inputId="zielort"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        filter
        placeholder="Zielort auswählen"
        class="w-[216px]"
      />
    </div>

    <!-- Reisezeitraum (Travel Period) -->
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-surface-700 dark:text-surface-300">Reisezeitraum</label>
      <DatePicker
        inputId="reisezeitraum"
        v-model="travelDate"
        placeholder="Reisezeitraum wählen"
        class="w-[216px]"
      />
    </div>

    <!-- Personen (Persons) -->
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-surface-700 dark:text-surface-300">Personen</label>
      <InputNumber
        inputId="personen"
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        class="w-[192px]"
      >
        <template #incrementbuttonicon>
          <i class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <i class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <!-- Suche (Search Button) -->
    <div class="flex flex-col">
      <Button label="Suche" class="px-6" />
    </div>

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
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
]);

const travelDate = ref(null);
const persons = ref(2);
</script>