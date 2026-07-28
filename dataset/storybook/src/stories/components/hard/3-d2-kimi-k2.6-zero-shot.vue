<template>
  <div class="flex items-end gap-8">
    <div class="flex flex-col gap-0.5">
      <span class="text-sm">Zielort</span>
      <Select v-model="selectedDestination" :options="destinations" optionLabel="name" placeholder="Zielort auswählen" filter filterPlaceholder="Suche..." class="w-56" />
    </div>
    <div class="flex flex-col gap-0.5">
      <span class="text-sm">Reisezeitraum</span>
      <DatePicker v-model="travelDate" placeholder="Reisezeitraum wählen" class="w-56" />
    </div>
    <div class="flex flex-col gap-0.5">
      <span class="text-sm">Personen</span>
      <InputNumber v-model="personCount" showButtons buttonLayout="horizontal" :min="1" class="w-48">
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
    <Button label="Suche" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref(null);
const travelDate = ref(null);
const personCount = ref(2);

const destinations = ref([
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
]);
</script>