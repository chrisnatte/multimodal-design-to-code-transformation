<template>
  <div class="flex w-fit flex-row items-end gap-8 bg-white p-6">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-surface-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        inputId="zielort"
        class="w-[216px]"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="travelDate"
        placeholder="Reisezeitraum wählen"
        inputId="reisezeitraum"
        class="w-[216px]"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-surface-700">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="personen"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-[192px]"
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

  const selectedCity = ref()
  const cities = ref([
    { name: 'Berlin' },
    { name: 'Amsterdam' },
    { name: 'Barcelona' },
    { name: 'Paris' },
  ])

  const travelDate = ref()
  const persons = ref(2)
</script>