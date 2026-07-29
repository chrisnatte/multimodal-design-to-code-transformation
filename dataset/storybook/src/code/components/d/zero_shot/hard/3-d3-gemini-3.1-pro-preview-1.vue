<template>
  <div class="flex flex-row gap-8 p-6 bg-white w-fit">
    <!-- Zielort -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-normal text-surface-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        filter
        filterPlaceholder="Suche..."
        placeholder="Zielort auswählen"
        class="w-[216px]"
      />
    </div>

    <!-- Reisezeitraum -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-normal text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="travelDate"
        placeholder="Reisezeitraum wählen"
        class="w-[216px]"
      />
    </div>

    <!-- Personen -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-normal text-surface-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        class="w-[192px]"
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
    <div class="flex flex-col justify-end h-[60px]">
      <Button label="Suche" class="w-[65px]" />
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
  'Berlin',
  'Amsterdam',
  'Barcelona',
  'Paris'
]);

const travelDate = ref(null);
const persons = ref(2);
</script>