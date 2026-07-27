<template>
  <div class="flex flex-row gap-8">
    <div class="flex flex-col gap-2 w-[216px]">
      <label for="zielort" class="text-sm font-normal">Zielort</label>
      <Select
        inputId="zielort"
        v-model="selectedCity"
        :options="cities"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-2 w-[216px]">
      <label for="reisezeitraum" class="text-sm font-normal">Reisezeitraum</label>
      <DatePicker
        inputId="reisezeitraum"
        v-model="date"
        placeholder="Reisezeitraum wählen"
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-2 w-[192px]">
      <label for="personen" class="text-sm font-normal">Personen</label>
      <InputNumber
        inputId="personen"
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="0"
        class="w-full"
      />
    </div>
    <div class="flex flex-col justify-end items-end w-[65px] h-[60px]">
      <Button label="Suche" class="w-full" />
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
const cities = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);
const date = ref(null);
const persons = ref(2);
</script>