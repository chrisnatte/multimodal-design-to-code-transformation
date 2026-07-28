<template>
  <div class="flex flex-wrap items-end gap-4 p-6">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium text-gray-700">Zielort</label>
      <Select
        v-model="destination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="travelPeriod"
        placeholder="Reisezeitraum wählen"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-32"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <Button label="Suche" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destination = ref(null);
const travelPeriod = ref(null);
const persons = ref(2);

const destinations = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);
</script>