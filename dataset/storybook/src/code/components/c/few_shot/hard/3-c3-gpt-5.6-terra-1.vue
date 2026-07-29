<template>
  <div class="flex min-h-[381px] items-start gap-8 p-6">
    <div class="relative flex w-[216px] flex-col gap-2">
      <span class="text-sm text-slate-700">Zielort</span>
      <Select
        ref="destinationSelect"
        v-model="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        append-to="self"
        class="w-full"
        input-id="destination"
      />
    </div>

    <div class="relative flex w-[216px] flex-col gap-2">
      <span class="text-sm text-slate-700">Reisezeitraum</span>
      <DatePicker
        ref="travelDatePicker"
        v-model="travelPeriod"
        selection-mode="range"
        placeholder="Reisezeitraum wählen"
        append-to="self"
        input-id="travel-period"
        class="w-full"
      />
    </div>

    <div class="flex w-[160px] flex-col gap-2">
      <span class="text-sm text-slate-700">Personen</span>
      <InputNumber
        v-model="persons"
        :min="1"
        :max="10"
        :use-grouping="false"
        show-buttons
        button-layout="horizontal"
        class="w-full"
        input-id="persons"
      />
    </div>

    <Button label="Suche" severity="success" class="mt-[27px]" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destination = ref(null)
const travelPeriod = ref([])
const persons = ref(2)

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])

const destinationSelect = ref()
const travelDatePicker = ref()

onMounted(() => {
  destinationSelect.value?.show()
  travelDatePicker.value?.show()
})
</script>