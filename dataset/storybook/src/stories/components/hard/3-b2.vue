<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-0.5">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        id="zielort"
        v-model="state.zielort"
        :options="cityOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-0.5">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        id="reisezeitraum"
        v-model="state.reisezeitraum"
        placeholder="Reisezeitraum wählen"
        class="w-72"
      />
    </div>

    <div class="flex">
      <InputNumber
        v-model="state.personen"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        :min="0"
        inputId="personen"
      />
    </div>

    <div class="flex flex-col items-end gap-2">
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
  zielort: null,
  reisezeitraum: null,
  personen: 2
});

const cityOptions = [
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
];
</script>