<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-0.5 w-64">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        v-model="state.zielort"
        inputId="zielort"
        :options="cityOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Zielort auswählen"
        filter
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-2 w-80">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="state.reisezeitraum"
        inputId="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-2 w-40">
      <label for="personen" class="text-sm">Personen</label>
      <InputNumber
        v-model="state.personen"
        inputId="personen"
        :step="1"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-full"
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