<template>
  <div class="flex items-end gap-6 p-8">
    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-600">Zielort</label>
      <Select
        ref="selectRef"
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-600">Reisezeitraum</label>
      <DatePicker
        ref="datePickerRef"
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-600">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="99"
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

    <div class="flex flex-col gap-2">
      <Button label="Suche" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const selectedDestination = ref(null);
const destinations = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]);
const dateRange = ref(null);
const persons = ref(2);

const selectRef = ref();
const datePickerRef = ref();

onMounted(() => {
  selectRef.value?.show?.();
  datePickerRef.value?.show?.();
});
</script>