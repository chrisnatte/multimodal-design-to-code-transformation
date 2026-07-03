<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-1 w-64">
      <span class="text-sm">Zielort</span>
      <Select
        v-model="state.destination"
        :options="destinationOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Zielort auswählen"
        class="w-full"
        :filter="true"
        filterPlaceholder="Suche..."
      />
    </div>

    <div class="flex flex-col gap-1 w-72">
      <span class="text-sm">Reisezeitraum</span>
      <DatePicker
        v-model="state.travelPeriod"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-1 w-44">
      <span class="text-sm">Personen</span>
      <InputNumber
        v-model="state.persons"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        :min="1"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-2 justify-end">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const state = reactive({
  destination: null,
  travelPeriod: null,
  persons: 2
});

const destinationOptions = [
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
];
</script>