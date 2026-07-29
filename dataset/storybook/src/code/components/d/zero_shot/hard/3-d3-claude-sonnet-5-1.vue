<template>
  <div class="bg-white p-6 flex flex-col gap-2.5">
    <div class="flex flex-row gap-8 items-start">
      <!-- Zielort Select -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm text-gray-700">Zielort</label>
        <Select
          v-model="selectedCity"
          :options="cities"
          filter
          filterPlaceholder="Suche..."
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>

      <!-- Reisezeitraum DatePicker -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm text-gray-700">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          selectionMode="range"
          placeholder="Reisezeitraum wählen"
          class="w-full"
          dateFormat="dd.mm.yy"
        />
      </div>

      <!-- Personen InputNumber -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label class="text-sm text-gray-700">Personen</label>
        <InputNumber
          v-model="persons"
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
      <div class="flex flex-col justify-end pt-[21px]">
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

const dateRange = ref(null);

const persons = ref(2);
</script>