<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-row gap-8">
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-inter">Zielort</label>
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Zielort auswählen"
          class="w-full"
          filter
          filterPlaceholder="Suche..."
        />
      </div>

      <div class="flex flex-col gap-0.5 w-[268px]">
        <label class="text-sm font-normal font-inter">Reisezeitraum</label>
        <DatePicker
          v-model="selectedDate"
          placeholder="Reisezeitraum wählen"
          class="w-full"
          :showIcon="false"
        />
      </div>

      <div class="flex flex-col gap-0.5 w-[124px]">
        <label class="text-sm font-normal font-inter">Personen</label>
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

      <div class="flex flex-col justify-end h-[60px]">
        <Button label="Suche" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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