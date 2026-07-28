<template>
  <div class="flex flex-row items-end gap-8 p-4">
    <!-- Zielort Options -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal text-surface-700">Zielort</label>
      <Select
        v-model="selectedZielort"
        :options="zielortOptions"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-[216px]"
      />
    </div>

    <!-- Reisezeitraum Picker -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        class="w-[216px]"
      />
    </div>

    <!-- Personen Input -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal text-surface-700">Personen</label>
      <InputNumber
        v-model="personenCount"
        showButtons
        buttonLayout="horizontal"
        class="w-[192px]"
      >
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
      </InputNumber>
    </div>

    <!-- Suche Button -->
    <div class="flex flex-col justify-end h-[61px]">
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

const selectedZielort = ref(null);
const zielortOptions = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);

const reisezeitraum = ref(null);
const personenCount = ref(2);
</script>