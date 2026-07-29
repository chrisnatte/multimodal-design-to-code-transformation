<template>
  <div class="bg-white p-6 rounded-md">
    <div class="flex flex-row gap-8 items-start flex-wrap">
      <!-- Zielort Select -->
      <div class="flex flex-col gap-1 w-[216px]">
        <label for="zielort" class="text-sm text-gray-700">Zielort</label>
        <Select
          id="zielort"
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          filter
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>

      <!-- Reisezeitraum DatePicker -->
      <div class="flex flex-col gap-1 w-[268px]">
        <label for="reisezeitraum" class="text-sm text-gray-700">Reisezeitraum</label>
        <DatePicker
          id="reisezeitraum"
          v-model="dateRange"
          selectionMode="range"
          :manualInput="false"
          placeholder="Reisezeitraum wählen"
          class="w-full"
        />
      </div>

      <!-- Personen InputNumber -->
      <div class="flex flex-col gap-1 w-[192px]">
        <label for="personen" class="text-sm text-gray-700">Personen</label>
        <InputNumber
          id="personen"
          v-model="personCount"
          showButtons
          buttonLayout="horizontal"
          :min="1"
          :max="20"
          class="w-full"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>

      <!-- Suche Button -->
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
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);

const dateRange = ref();
const personCount = ref(2);
</script>