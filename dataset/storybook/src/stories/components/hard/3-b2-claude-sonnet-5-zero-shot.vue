<template>
  <div class="flex flex-row gap-8 items-start p-4">
    <!-- Select -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label for="destination" class="text-sm">Zielort</label>
      <Select
        id="destination"
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        filter
        placeholder="Zielort auswählen"
        class="w-full"
      />
    </div>

    <!-- DatePicker -->
    <div class="flex flex-col gap-0.5 w-[268px]">
      <label for="daterange" class="text-sm">Reisezeitraum</label>
      <DatePicker
        id="daterange"
        v-model="dateRange"
        selectionMode="range"
        :manualInput="false"
        placeholder="Reisezeitraum wählen"
        showIcon
        class="w-full"
      />
    </div>

    <!-- InputNumber -->
    <div class="flex flex-col gap-0.5 w-[192px]">
      <label for="persons" class="text-sm">Personen</label>
      <InputNumber
        id="persons"
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        :min="1"
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
    <div class="flex flex-col justify-end h-full">
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
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);

const dateRange = ref();
const personCount = ref(2);
</script>