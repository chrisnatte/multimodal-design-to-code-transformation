<template>
  <div class="flex flex-row items-start gap-8 p-4 bg-white">
    <!-- Zielort Select -->
    <div class="flex flex-col gap-0.5 w-[216px]">
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
    <div class="flex flex-col gap-0.5 w-[268px]">
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
    <div class="flex flex-col gap-0.5 w-[192px]">
      <label for="personen" class="text-sm text-gray-700">Personen</label>
      <InputNumber
        id="personen"
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
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

    <!-- Suche Button -->
    <div class="flex flex-col items-end justify-end h-full pt-6">
      <Button label="Suche" />
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
  { name: 'Amsterdam', code: 'US' },
  { name: 'Barcelona', code: 'US' },
  { name: 'Paris', code: 'US' }
]);

const dateRange = ref();

const personCount = ref(2);
</script>