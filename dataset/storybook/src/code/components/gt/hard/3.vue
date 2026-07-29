<template>
  <div class="flex items-center gap-8">
    <div class="flex w-full max-w-3xs flex-col gap-2">
      <label for="destination-input" class="text-sm">Zielort</label>
      <Select
        v-model="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        input-id="destination-input"
      />
    </div>

    <div class="flex w-full max-w-3xs flex-col gap-2">
      <label for="travel-period-input" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="travelPeriod"
        selection-mode="range"
        placeholder="Reisezeitraum wählen"
        input-id="travel-period-input"
        :show-icon="true"
      />
    </div>

    <div class="flex w-full max-w-3xs flex-col gap-2">
      <label for="person-count-input" class="text-sm">Personen</label>
      <InputNumber
        v-model="personCount"
        placeholder="Personen eingeben"
        :min="1"
        show-buttons
        button-layout="horizontal"
        increment-icon="pi pi-plus"
        decrement-icon="pi pi-minus"
        input-id="person-count-input"
        input-class="w-full"
      />
    </div>
    <Button label="Suche" severity="primary" class="self-end" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const destination = ref('')
  const travelPeriod = ref()
  const personCount = ref(2)

  const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
</script>
