<template>
  <div class="flex flex-row items-start gap-8 p-4 bg-white">
    <!-- Zielort Select -->
    <div class="flex flex-col gap-0.5" style="width: 216px">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <!-- Reisezeitraum DatePicker -->
    <div class="flex flex-col gap-0.5" style="width: 268px">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-full"
        showIcon={false}
      />
    </div>

    <!-- Personen InputNumber -->
    <div class="flex flex-col gap-0.5" style="width: 192px">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
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

    <!-- Suche Button -->
    <div class="flex flex-col justify-end" style="height: 60px">
      <Button label="Suche" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const destination = ref(null);
const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);

const dateRange = ref(null);

const persons = ref(2);
</script>