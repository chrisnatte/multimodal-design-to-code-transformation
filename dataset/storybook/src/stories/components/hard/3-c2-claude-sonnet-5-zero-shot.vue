<template>
  <div class="flex flex-wrap items-start gap-8 p-6">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        optionValue="name"
        filter
        placeholder="Zielort auswählen"
        inputId="zielort"
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        :manualInput="false"
        placeholder="Reisezeitraum wählen"
        inputId="reisezeitraum"
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="personen"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
        class="w-40"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <div class="flex flex-col gap-2 self-end">
      <Button label="Suche" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedCity = ref('Berlin');
const cities = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);

const dateRange = ref();
const persons = ref(2);
</script>