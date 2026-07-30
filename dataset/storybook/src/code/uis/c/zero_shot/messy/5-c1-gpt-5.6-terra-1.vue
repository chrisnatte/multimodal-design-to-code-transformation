<template>
  <main class="min-h-screen bg-surface-50 px-6 py-5 text-surface-700">
    <section class="mx-auto w-full max-w-[595px]">
      <header class="mb-9 flex items-start gap-3 pl-5">
        <Button
          icon="pi pi-times-circle"
          text
          rounded
          severity="secondary"
          aria-label="Schließen"
          class="mt-0.5 !h-8 !w-8"
        />
        <div>
          <h1 class="m-0 text-2xl font-bold leading-7 text-surface-900">Termin buchen</h1>
          <p class="m-0 mt-1 text-sm text-surface-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="flex gap-3">
        <Card class="w-1/2">
          <template #content>
            <h2 class="m-0 mb-2 text-sm font-semibold text-surface-800">Datum wählen</h2>
            <DatePicker
              v-model="selectedDate"
              inline
              showWeek
              :manualInput="false"
              class="w-full"
            />
          </template>
        </Card>

        <Card class="w-1/2">
          <template #content>
            <h2 class="m-0 mb-2 text-sm font-semibold text-surface-800">Zeitslot wählen</h2>

            <div class="flex flex-col gap-1">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-1.5">
                <RadioButton v-model="selectedTime" :inputId="slot" name="time" :value="slot" />
                <label :for="slot" class="text-xs text-surface-700">{{ slot }}</label>
              </div>
            </div>

            <div class="mt-3">
              <label for="service" class="mb-1 block text-xs text-surface-700">Dienstleistung</label>
              <Select
                v-model="selectedService"
                inputId="service"
                :options="services"
                optionLabel="label"
                optionValue="value"
                class="w-full"
              />
              <Listbox
                v-model="suggestedService"
                :options="suggestedServices"
                optionLabel="label"
                optionValue="value"
                class="w-full"
              />
            </div>
          </template>
        </Card>
      </div>

      <Card class="mt-3">
        <template #content>
          <h2 class="m-0 mb-2 text-sm font-semibold text-surface-800">Deine Daten</h2>

          <div class="mb-2">
            <label for="name" class="mb-1 block text-xs text-surface-700">Name</label>
            <InputText v-model="name" inputId="name" class="w-full" />
          </div>

          <div class="mb-2">
            <label for="notes" class="mb-1 block text-xs text-surface-700">Anmerkungen</label>
            <Textarea
              v-model="notes"
              inputId="notes"
              placeholder="Optionale Nachricht..."
              rows="3"
              class="w-full resize-none"
            />
          </div>

          <div class="flex items-start gap-2">
            <ToggleSwitch v-model="sendReminder" inputId="reminder" class="mt-0.5" />
            <div>
              <label for="reminder" class="block text-xs font-semibold text-surface-800">Erinnerung senden</label>
              <p class="m-0 text-[9px] leading-3 text-surface-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </p>
            </div>
          </div>
        </template>
      </Card>

      <footer class="mt-12 flex justify-end gap-2">
        <Button label="Abbrechen" text severity="secondary" size="small" />
        <Button label="Buchen" size="small" @click="confirmationVisible = true" />
      </footer>
    </section>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :draggable="false"
      :style="{ width: '250px' }"
    >
      <template #header>
        <span class="text-sm font-semibold text-surface-800">Buchung bestätigen</span>
      </template>

      <div class="space-y-2 text-xs">
        <div class="flex items-center justify-between gap-4">
          <span class="text-surface-600">Datum:</span>
          <strong class="font-semibold text-surface-700">15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-4">
          <span class="text-surface-600">Zeit</span>
          <strong class="font-semibold text-surface-700">11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between gap-4">
          <span class="text-surface-600">Dienstleistung</span>
          <strong class="font-semibold text-surface-700">Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            text
            severity="secondary"
            size="small"
            @click="confirmationVisible = false"
          />
          <Button label="Bestätigen" size="small" @click="confirmationVisible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Beratungsgespräch')
const suggestedService = ref(null)
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']

const services = [
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
]

const suggestedServices = [
  { label: 'Untersuchung', value: 'Untersuchung' }
]
</script>