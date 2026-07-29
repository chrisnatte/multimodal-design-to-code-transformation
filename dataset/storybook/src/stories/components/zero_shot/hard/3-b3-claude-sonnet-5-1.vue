<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-row gap-8 items-start">
      <!-- Select: Zielort -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm">Zielort</label>
        <Select
          v-model="selectedCity"
          :options="cityOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Zielort auswählen"
          filter
          filterPlaceholder="Suche..."
          class="w-full"
        />
      </div>

      <!-- DatePicker: Reisezeitraum -->
      <div class="flex flex-col gap-0.5 w-[268px]">
        <label class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          selectionMode="range"
          placeholder="Reisezeitraum wählen"
          showIcon
          class="w-full"
        />
      </div>

      <!-- InputNumber: Personen -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label class="text-sm">Personen</label>
        <InputNumber
          v-model="personen"
          showButtons
          buttonLayout="horizontal"
          :min="1"
          :max="20"
          :step="1"
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

      <!-- Search Button -->
      <div class="flex flex-col justify-end items-end w-[65px] h-[60px]">
        <Button label="Suche" severity="primary" class="w-full" />
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
const cityOptions = ref([
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
]);

const dateRange = ref(null);

const personen = ref(2);
</script>