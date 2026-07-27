<template>
  <div class="flex flex-row gap-8 items-start p-4">
    <!-- Select: Zielort -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm">Zielort</label>
      <Select
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="label"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <!-- DatePicker: Reisezeitraum -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="travelDateRange"
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
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
        :step="1"
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
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref(null);
const destinations = ref([
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
]);

const travelDateRange = ref(null);

const personCount = ref(2);
</script>