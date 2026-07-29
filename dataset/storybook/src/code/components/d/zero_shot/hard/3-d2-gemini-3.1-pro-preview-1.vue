<template>
  <div class="p-6 bg-white flex flex-row gap-8 items-end w-max">
    <!-- Zielort -->
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-surface-700 font-normal">Zielort</label>
      <Select
        id="zielort"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        class="w-56"
      />
    </div>

    <!-- Reisezeitraum -->
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-surface-700 font-normal">Reisezeitraum</label>
      <DatePicker
        id="reisezeitraum"
        v-model="travelPeriod"
        placeholder="Reisezeitraum wählen"
        class="w-64"
      />
    </div>

    <!-- Personen -->
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-surface-700 font-normal">Personen</label>
      <InputNumber
        id="personen"
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        class="w-48"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <!-- Suche -->
    <div class="flex flex-col gap-2">
      <Button 
        label="Suche" 
        class="!bg-[#10B981] !border-[#10B981] hover:!bg-[#059669] hover:!border-[#059669]" 
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
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);

const travelPeriod = ref(null);
const persons = ref(2);
</script>