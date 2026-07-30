<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-8 p-8 font-sans">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-times"
        rounded
        text
        severity="secondary"
        class="!h-12 !w-12 !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Termin buchen</h1>
        <p class="text-base text-slate-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Card 1: Datum wählen -->
      <Card class="rounded-xl bg-slate-100 shadow-none">
        <template #title>
          <span class="text-lg font-medium text-slate-900">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline class="w-full rounded-lg bg-white" />
        </template>
      </Card>

      <!-- Card 2: Zeitslot wählen -->
      <Card class="rounded-xl bg-slate-100 shadow-none">
        <template #title>
          <span class="text-lg font-medium text-slate-900">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-sm text-slate-700">{{ slot }}</label>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm text-slate-700">Dienstleistung</label>
              <Select
                v-model="selectedService"
                :options="services"
                optionLabel="label"
                placeholder="Dienstleistung wählen"
                class="w-full bg-white"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Card 3: Deine Daten -->
    <Card class="rounded-xl bg-slate-100 shadow-none">
      <template #title>
        <span class="text-lg font-medium text-slate-900">Deine Daten</span>
      </template>
      <template #content>
        <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm text-slate-700">Name</label>
            <InputText id="name" v-model="name" placeholder="Name eingeben" class="bg-white" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-slate-700">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="E-Mail eingeben" class="bg-white" />
          </div>
        </div>
        <div class="mb-6 flex flex-col gap-2">
          <label for="notes" class="text-sm text-slate-700">Anmerkungen</label>
          <Textarea
            id="notes"
            v-model="notes"
            rows="4"
            placeholder="Optionale Nachricht..."
            class="bg-white"
          />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="sendReminder" inputId="reminder" />
          <div class="flex flex-col">
            <label for="reminder" class="text-sm font-semibold text-slate-900"
              >Erinnerung senden</label
            >
            <span class="text-xs text-slate-500"
              >Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span
            >
          </div>
        </div>
      </template>
    </Card>

    <!-- Footer Actions -->
    <div class="flex justify-end gap-3">
      <Button
        label="Abbrechen"
        severity="secondary"
        class="!border-none !bg-slate-100 !text-slate-900"
      />
      <Button label="Buchen" @click="showDialog = true" />
    </div>

    <!-- Dialog -->
    <Dialog
      v-model:visible="showDialog"
      header="Buchung bestätigen"
      modal
      :style="{ width: '350px' }"
      :pt="{ root: 'rounded-xl' }"
    >
      <div class="flex flex-col gap-3 py-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-slate-600">Datum:</span>
          <span class="text-sm font-semibold text-slate-900">{{ formattedDate }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-slate-600">Zeit:</span>
          <span class="text-sm font-semibold text-slate-900">{{ selectedTime }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-slate-600">Dienstleistung:</span>
          <span class="text-sm font-semibold text-slate-900">{{ selectedService?.label }}</span>
        </div>
      </div>
      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="showDialog = false"
          class="!border-none !bg-slate-100 !text-slate-900"
        />
        <Button label="Bestätigen" @click="showDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2029, 5, 15))
const selectedTime = ref('11:00 - 12:30')
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']

const services = [
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
]
const selectedService = ref(services[1])

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showDialog = ref(true)

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})
</script>