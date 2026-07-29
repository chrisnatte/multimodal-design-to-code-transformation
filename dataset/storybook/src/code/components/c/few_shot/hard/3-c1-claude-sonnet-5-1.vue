<template>
  <div class="flex items-end gap-6 p-6">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        v-model="zielort"
        input-id="zielort"
        :options="zielortOptions"
        placeholder="Zielort auswählen"
        filter
        filter-placeholder="Suche..."
        class="w-52"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="reisezeitraum"
        input-id="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        selection-mode="range"
        class="w-52"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm">Personen</label>
      <InputNumber
        v-model="personen"
        input-id="personen"
        show-buttons
        button-layout="horizontal"
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
    <Button label="Suche" severity="primary" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const zielort = ref('Berlin')
  const zielortOptions = ['Berlin', 'Amsterdam', 'Barcelona', 'Paris']
  const reisezeitraum = ref()
  const personen = ref(2)
</script>