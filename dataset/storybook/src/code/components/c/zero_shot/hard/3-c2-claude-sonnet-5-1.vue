<template>
  <div class="p-6 flex flex-wrap gap-8 items-start">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-gray-700">Zielort</label>
      <Select
        id="zielort"
        v-model="selectedCity"
        :options="cities"
        filter
        showClear
        placeholder="Zielort auswählen"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-gray-700">Reisezeitraum</label>
      <DatePicker
        id="reisezeitraum"
        v-model="dateRange"
        selectionMode="range"
        :manualInput="false"
        placeholder="Reisezeitraum wählen"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="personen" class="text-gray-700">Personen</label>
      <div class="flex items-center gap-2">
        <InputNumber
          id="personen"
          v-model="personen"
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
        <Button label="Suche" severity="success" />
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
const cities = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);

const dateRange = ref();
const personen = ref(2);
</script>