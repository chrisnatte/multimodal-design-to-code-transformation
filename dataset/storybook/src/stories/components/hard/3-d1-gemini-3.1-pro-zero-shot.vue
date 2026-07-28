<template>
  <div class="flex flex-row gap-8 items-end p-4 font-sans">
    
    <!-- Target Location -->
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-sm text-surface-700 font-normal">
        Zielort
      </label>
      <Select
        id="destination"
        v-model="selectedDestination"
        :options="destinations"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-[216px]"
      />
    </div>

    <!-- Travel Period -->
    <div class="flex flex-col gap-2">
      <label for="travel-period" class="text-sm text-surface-700 font-normal">
        Reisezeitraum
      </label>
      <div>
        <DatePicker
          id="travel-period"
          v-model="travelPeriod"
          placeholder="Reisezeitraum wählen"
          class="w-[216px]"
          selectionMode="range"
          :manualInput="false"
        />
      </div>
    </div>

    <!-- Persons -->
    <div class="flex flex-col gap-2">
      <label for="persons" class="text-sm text-surface-700 font-normal">
        Personen
      </label>
      <InputNumber
        id="persons"
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        decrementButtonIcon="pi pi-minus"
        incrementButtonIcon="pi pi-plus"
        :min="1"
        :max="20"
        :step="1"
        class="w-[192px]"
        inputClass="text-center w-full"
      />
    </div>

    <!-- Search Button -->
    <Button
      label="Suche"
      class="h-[43px] px-5 !bg-[#10b981] !border-[#10b981] !text-white font-medium hover:!bg-[#0e9f6e]"
    />

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
  'Berlin',
  'Amsterdam',
  'Barcelona',
  'Paris'
]);

const travelPeriod = ref();
const persons = ref(2);
</script>