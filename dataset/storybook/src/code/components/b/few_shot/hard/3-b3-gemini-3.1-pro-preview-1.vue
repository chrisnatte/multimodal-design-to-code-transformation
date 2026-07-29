<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex flex-row items-end gap-8">
      <div class="flex flex-col gap-2">
        <label for="destination" class="text-sm text-surface-700">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="destinations"
          option-label="name"
          filter
          placeholder="Zielort auswählen"
          class="w-56"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="date" class="text-sm text-surface-700">Reisezeitraum</label>
        <DatePicker
          v-model="date"
          input-id="date"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          class="w-56"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="persons" class="text-sm text-surface-700">Personen</label>
        <InputNumber
          v-model="persons"
          input-id="persons"
          show-buttons
          button-layout="horizontal"
          :min="1"
          class="w-48"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>

      <div class="flex h-[60px] flex-col justify-end">
        <Button label="Suche" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const destination = ref()
  const destinations = ref([
    { name: 'Berlin', code: 'DE' },
    { name: 'Amsterdam', code: 'NL' },
    { name: 'Barcelona', code: 'ES' },
    { name: 'Paris', code: 'FR' },
  ])

  const date = ref()
  const persons = ref(2)
</script>