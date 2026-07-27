<template>
  <div class="flex flex-row gap-8">
    <!-- Select -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Zielort</label>
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name" 
        placeholder="Zielort auswählen" 
        filter 
        class="w-full" 
      />
    </div>

    <!-- DatePicker -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Reisezeitraum</label>
      <DatePicker 
        v-model="selectedDate" 
        placeholder="Reisezeitraum wählen" 
        class="w-full" 
      />
    </div>

    <!-- InputNumber -->
    <div class="flex flex-col gap-0.5 w-[192px]">
      <label class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Personen</label>
      <InputNumber 
        v-model="persons" 
        showButtons 
        buttonLayout="horizontal" 
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

    <!-- Button -->
    <div class="flex flex-col justify-end items-end h-[60px] w-[65px]">
      <Button label="Suche" severity="primary" class="w-full" />
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
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
]);

const selectedDate = ref(null);
const persons = ref(2);
</script>