<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="text-sm">Zielort</label>
        <Select
          ref="destinationSelect"
          v-model="destination"
          input-id="destination"
          :options="destinations"
          placeholder="Zielort auswählen"
          filter
          filter-placeholder="Suche..."
          class="w-full"
          :pt="{
            overlay: 'mt-0',
            option: 'py-2',
          }"
        />
      </div>

      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="travel-period" class="text-sm">Reisezeitraum</label>
        <InputText
          id="travel-period"
          v-model="travelPeriodText"
          placeholder="Reisezeitraum wählen"
          class="w-[216px]"
        />
        <DatePicker
          v-model="travelPeriod"
          inline
          :view-date="calendarViewDate"
          class="mt-0.5 w-full"
        />
      </div>

      <div class="flex w-48 flex-col gap-0.5">
        <label for="people" class="text-sm">Personen</label>
        <InputNumber
          v-model="people"
          input-id="people"
          show-buttons
          button-layout="horizontal"
          :min="1"
          class="w-full"
          :pt="{
            incrementButton: { icon: 'pi pi-plus' },
            decrementButton: { icon: 'pi pi-minus' },
          }"
        />
      </div>

      <div class="flex h-[61px] flex-col justify-end">
        <Button label="Suche" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const destination = ref<string | null>(null)
const destinationSelect = ref<InstanceType<typeof Select> | null>(null)
const travelPeriod = ref<Date | null>(null)
const travelPeriodText = ref('')
const calendarViewDate = ref(new Date(2024, 6, 1))
const people = ref(2)

onMounted(() => {
  destinationSelect.value?.show()
})
</script>