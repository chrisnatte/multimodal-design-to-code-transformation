<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white w-fit">
    <div class="flex flex-row gap-8 items-start">
      <!-- Select: Zielort -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-sans text-gray-800">Zielort</label>
        <Select 
          v-model="selectedCity" 
          :options="cities" 
          optionLabel="name" 
          placeholder="Zielort auswählen" 
          filter 
          fluid 
        />
      </div>

      <!-- DatePicker: Reisezeitraum -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-sans text-gray-800">Reisezeitraum</label>
        <DatePicker 
          v-model="selectedDate" 
          placeholder="Reisezeitraum wählen" 
          fluid 
        />
      </div>

      <!-- InputNumber: Personen -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label class="text-sm font-normal font-sans text-gray-800">Personen</label>
        <InputNumber 
          v-model="persons" 
          showButtons 
          buttonLayout="horizontal" 
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

      <!-- Button: Suche -->
      <div class="flex flex-col justify-end w-[65px] h-[60px]">
        <Button label="Suche" fluid />
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
const cities = ref([
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
]);

const selectedDate = ref(null);

const persons = ref(2);
</script>