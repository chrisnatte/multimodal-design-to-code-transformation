<template>
  <div class="flex w-fit items-end gap-8 bg-white p-6">
    <!-- Zielort -->
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm text-surface-700">Zielort</label>
      <Select
        v-model="selectedZielort"
        :options="zielorte"
        filter
        placeholder="Zielort auswählen"
        input-id="zielort"
        class="w-56"
      />
    </div>

    <!-- Reisezeitraum -->
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="selectedDate"
        placeholder="Reisezeitraum wählen"
        input-id="reisezeitraum"
        class="w-56"
      />
    </div>

    <!-- Personen -->
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm text-surface-700">Personen</label>
      <InputNumber
        v-model="personenCount"
        show-buttons
        button-layout="horizontal"
        :min="1"
        input-id="personen"
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

    <!-- Suche Button -->
    <Button label="Suche" severity="primary" class="h-[42px]" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const selectedZielort = ref()
  const zielorte = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])

  const selectedDate = ref()
  const personenCount = ref(2)
</script>