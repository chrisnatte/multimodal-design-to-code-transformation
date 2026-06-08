<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-1">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        id="zielort"
        v-model="form.zielort"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        id="reisezeitraum"
        v-model="form.reisezeitraum"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="personen" class="text-sm">Personen</label>
      <InputNumber
        id="personen"
        v-model="form.personen"
        :step="1"
        showButtons
        buttonLayout="horizontal"
        :min="1"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <div class="flex flex-col gap-2 justify-end">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const form = reactive({
  zielort: null,
  reisezeitraum: null,
  personen: 2
})

const cities = reactive([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
])
</script>