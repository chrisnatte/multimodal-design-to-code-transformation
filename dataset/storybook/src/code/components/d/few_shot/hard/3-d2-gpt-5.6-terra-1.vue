<template>
  <div class="flex w-fit flex-col gap-2 p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination">Zielort</label>
        <Select
          ref="destinationSelect"
          v-model="destination"
          input-id="destination"
          :options="destinations"
          placeholder="Zielort auswählen"
          filter
          filter-placeholder="Suche..."
          fluid
          append-to="self"
          class="relative"
        />
      </div>

      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="travel-period">Reisezeitraum</label>
        <DatePicker
          ref="travelDatePicker"
          v-model="travelPeriod"
          input-id="travel-period"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          :manual-input="false"
          append-to="self"
          fluid
        />
      </div>

      <div class="flex w-48 flex-col gap-0.5">
        <label for="travelers">Personen</label>
        <InputNumber
          v-model="travelers"
          input-id="travelers"
          :min="1"
          show-buttons
          button-layout="horizontal"
          decrement-button-icon="pi pi-minus"
          increment-button-icon="pi pi-plus"
          fluid
        />
      </div>

      <div class="flex h-[61px] flex-col justify-end">
        <Button label="Suche" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destination = ref<string | null>(null)
const travelPeriod = ref<[Date | null, Date | null] | null>(null)
const travelers = ref(2)

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])

const destinationSelect = useTemplateRef('destinationSelect')
const travelDatePicker = useTemplateRef('travelDatePicker')

onMounted(async () => {
  await nextTick()

  const select = destinationSelect.value as unknown as { show?: () => void }
  const datePicker = travelDatePicker.value as unknown as { show?: () => void }

  select.show?.()
  datePicker.show?.()
})
</script>