<template>
  <div class="p-6 bg-white inline-block rounded-lg">
    <div class="flex flex-row gap-8 items-end">
      <!-- Destination Select -->
      <div class="flex flex-col gap-1 w-[216px]">
        <label class="text-sm font-normal text-surface-700">Zielort</label>
        <Select 
          v-model="selectedDestination" 
          :options="destinations" 
          optionLabel="name" 
          placeholder="Zielort auswählen" 
          filter 
          filterPlaceholder="Suche..."
          class="w-full" 
        />
      </div>

      <!-- Travel Period DatePicker -->
      <div class="flex flex-col gap-1 w-[216px]">
        <label class="text-sm font-normal text-surface-700">Reisezeitraum</label>
        <DatePicker 
          v-model="travelPeriod" 
          selectionMode="range" 
          placeholder="Reisezeitraum wählen" 
          class="w-full" 
        />
      </div>

      <!-- Persons InputNumber -->
      <div class="flex flex-col gap-1 w-[192px]">
        <label class="text-sm font-normal text-surface-700">Personen</label>
        <InputNumber 
          v-model="persons" 
          showButtons 
          buttonLayout="horizontal" 
          :min="1" 
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

      <!-- Search Button -->
      <Button label="Suche" severity="primary" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref(null);
const destinations = ref([
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
]);

const travelPeriod = ref(null);
const persons = ref(2);
</script>