<template>
  <div class="flex items-start gap-8">
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label for="zielort" class="text-sm text-gray-700">Zielort</label>
      <Select
        inputId="zielort"
        v-model="selectedDestination"
        :options="destinationOptions"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        filterIcon="pi pi-search"
        fluid
      />
    </div>

    <div class="flex flex-col gap-0.5 w-[216px]">
      <label for="reisezeitraum" class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        inputId="reisezeitraum"
        v-model="travelDate"
        placeholder="Reisezeitraum wählen"
        fluid
      />
    </div>

    <div class="flex flex-col gap-0.5 w-48">
      <label for="personen" class="text-sm text-gray-700">Personen</label>
      <InputNumber
        inputId="personen"
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :step="1"
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

    <div class="flex flex-col justify-end h-[60px] w-[65px]">
      <Button label="Suche" severity="success" fluid />
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
const travelDate = ref(null);
const personCount = ref(2);

const destinationOptions = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);
</script>