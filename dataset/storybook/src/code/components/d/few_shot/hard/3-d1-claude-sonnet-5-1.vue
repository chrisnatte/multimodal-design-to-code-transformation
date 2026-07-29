<template>
  <div class="flex items-end gap-8 p-6">
    <div class="flex w-54 flex-col gap-2">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        v-model="zielort"
        input-id="zielort"
        :options="zielortOptions"
        filter
        filter-placeholder="Suche..."
        placeholder="Zielort auswählen"
        class="w-full"
      />
    </div>
    <div class="flex w-54 flex-col gap-2">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="reisezeitraum"
        input-id="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        selection-mode="range"
        class="w-full"
      />
    </div>
    <div class="flex w-48 flex-col gap-2">
      <label for="personen" class="text-sm">Personen</label>
      <InputNumber
        v-model="personen"
        input-id="personen"
        show-buttons
        button-layout="horizontal"
        :min="1"
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
    <Button label="Suche" severity="primary" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const zielort = ref(null)
  const zielortOptions = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
  const reisezeitraum = ref(null)
  const personen = ref(2)
</script>