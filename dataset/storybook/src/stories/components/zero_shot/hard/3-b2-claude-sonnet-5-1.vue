<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-row gap-8 items-start">
      <!-- Select -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label for="zielort" class="text-sm">Zielort</label>
        <Select
          id="zielort"
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Zielort auswählen"
          filter
          class="w-full"
        />
      </div>

      <!-- DatePicker -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
        <DatePicker
          id="reisezeitraum"
          v-model="dateRange"
          selectionMode="range"
          :manualInput="false"
          placeholder="Reisezeitraum wählen"
          class="w-full"
        />
      </div>

      <!-- InputNumber -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label for="personen" class="text-sm">Personen</label>
        <InputNumber
          id="personen"
          v-model="personen"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          :min="0"
          fluid
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
      <div class="flex flex-col justify-end h-[60px]">
        <Button label="Suche" severity="primary" />
      </div>
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
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
]);

const dateRange = ref(null);
const personen = ref(2);
</script>