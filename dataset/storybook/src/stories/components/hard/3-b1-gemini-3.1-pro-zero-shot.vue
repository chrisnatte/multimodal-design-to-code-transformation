<template>
  <div class="flex flex-row gap-8 items-start">
    <!-- Select Container -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal font-inter text-surface-700">Zielort</label>
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name" 
        placeholder="Zielort auswählen" 
        class="w-full" 
      />
    </div>

    <!-- DatePicker Container -->
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal font-inter text-surface-700">Reisezeitraum</label>
      <DatePicker 
        v-model="selectedDate" 
        placeholder="Reisezeitraum wählen" 
        class="w-full" 
      />
    </div>

    <!-- InputNumber Container -->
    <div class="flex flex-col gap-0.5 w-[192px]">
      <label class="text-sm font-normal font-inter text-surface-700">Personen</label>
      <InputNumber 
        v-model="persons" 
        showButtons 
        buttonLayout="horizontal" 
        class="w-full" 
      />
    </div>

    <!-- Button Container -->
    <div class="flex flex-col justify-end items-end h-[60px] w-[65px]">
      <Button 
        label="Suche" 
        class="w-full" 
      />
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