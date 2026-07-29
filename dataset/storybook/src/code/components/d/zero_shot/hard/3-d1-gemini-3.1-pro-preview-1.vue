<template>
  <div class="bg-white p-6 flex flex-col gap-2.5">
    <div class="flex flex-row gap-8">
      <!-- Zielort Select -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-inter text-surface-700">Zielort</label>
        <Select
          v-model="selectedDestination"
          :options="destinations"
          optionLabel="name"
          placeholder="Zielort auswählen"
          class="w-full border-primary-500"
          :filter="true"
        >
          <template #filtericon>
            <i class="pi pi-search"></i>
          </template>
        </Select>
      </div>

      <!-- Reisezeitraum DatePicker -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-inter text-surface-700">Reisezeitraum</label>
        <DatePicker
          v-model="selectedDate"
          placeholder="Reisezeitraum wählen"
          class="w-full border-primary-500"
          dateFormat="dd.mm.yy"
        />
      </div>

      <!-- Personen InputNumber -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label class="text-sm font-normal font-inter text-surface-700">Personen</label>
        <InputNumber
          v-model="personCount"
          showButtons
          buttonLayout="horizontal"
          :min="1"
          :max="10"
          class="w-full"
        >
          <template #incrementbuttonicon>
            <i class="pi pi-plus"></i>
          </template>
          <template #decrementbuttonicon>
            <i class="pi pi-minus"></i>
          </template>
        </InputNumber>
      </div>

      <!-- Suche Button -->
      <div class="flex flex-col justify-end h-[60px]">
        <Button label="Suche" class="bg-[#10B981] border-[#10B981] hover:bg-[#059669] hover:border-[#059669]" />
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

const selectedDestination = ref(null);
const destinations = ref([
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
]);

const selectedDate = ref(null);
const personCount = ref(2);
</script>