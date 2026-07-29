<template>
  <div class="flex items-end gap-4 p-4">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-surface-700">Zielort</label>
      <Select
        v-model="selectedZielort"
        :options="zielorte"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        inputId="zielort"
        class="w-64"
        :pt="{
          root: 'border-primary-500',
        }"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="selectedReisezeitraum"
        inputId="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        selectionMode="range"
        :manualInput="false"
        class="w-64"
        :pt="{
          root: 'border-primary-500',
        }"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-surface-700">Personen</label>
      <InputNumber
        v-model="personen"
        inputId="personen"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="10"
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

    <Button label="Suche" severity="primary" class="mb-0.5" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const selectedZielort = ref()
  const zielorte = ref([
    { name: 'Berlin', code: 'BER' },
    { name: 'Amsterdam', code: 'AMS' },
    { name: 'Barcelona', code: 'BCN' },
    { name: 'Paris', code: 'PAR' },
  ])

  const selectedReisezeitraum = ref()
  const personen = ref(2)
</script>