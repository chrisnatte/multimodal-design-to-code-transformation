<template>
  <main class="min-h-screen bg-surface-50 px-6 py-5 text-surface-700">
    <section class="mx-auto w-full max-w-[635px]">
      <header class="mb-9 flex items-start gap-3">
        <Button
          icon="pi pi-times"
          rounded
          outlined
          severity="secondary"
          size="small"
          aria-label="Schließen"
          class="mt-1"
        />
        <div>
          <h1 class="m-0 text-2xl font-bold text-surface-900">Termin buchen</h1>
          <p class="mt-0.5 text-sm text-surface-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <section class="rounded-lg bg-surface-100 p-3">
          <h2 class="mb-2 text-sm font-semibold text-surface-800">Datum wählen</h2>
          <DatePicker
            v-model="appointmentDate"
            inline
            class="w-full"
          />
        </section>

        <section class="rounded-lg bg-surface-100 p-3">
          <h2 class="mb-2 text-sm font-semibold text-surface-800">Zeitslot wählen</h2>

          <div class="mb-3 flex flex-col gap-1.5">
            <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-1.5">
              <RadioButton
                v-model="selectedTime"
                :input-id="slot.value"
                name="timeslot"
                :value="slot.value"
              />
              <label :for="slot.value" class="text-xs text-surface-700">{{ slot.label }}</label>
            </div>
          </div>

          <label for="service" class="mb-1 block text-xs text-surface-700">Dienstleistung</label>
          <Select
            id="service"
            v-model="selectedService"
            :options="services"
            option-label="label"
            option-value="value"
            class="w-full"
          />
          <Listbox
            v-model="selectedService"
            :options="services"
            option-label="label"
            option-value="value"
            class="mt-0.5 w-full"
          />
        </section>
      </div>

      <section class="mt-3 rounded-lg bg-surface-100 p-3">
        <h2 class="mb-2 text-sm font-semibold text-surface-800">Deine Daten</h2>

        <label for="name" class="mb-1 block text-xs text-surface-700">Name</label>
        <InputText id="name" v-model="name" class="mb-2 w-full" />

        <label for="notes" class="mb-1 block text-xs text-surface-700">Anmerkungen</label>
        <Textarea
          id="notes"
          v-model="notes"
          placeholder="Optionale Nachricht..."
          rows="3"
          class="w-full resize-none"
        />

        <div class="mt-2 flex items-start gap-2">
          <ToggleSwitch v-model="sendReminder" input-id="reminder" />
          <div>
            <label for="reminder" class="block text-xs font-semibold text-surface-800">Erinnerung senden</label>
            <p class="m-0 text-[9px] text-surface-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </section>

      <div class="mt-12 flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" text size="small" />
        <Button label="Buchen" size="small" @click="confirmationVisible = true" />
      </div>
    </section>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      :draggable="false"
      class="w-[250px]"
    >
      <template #header>
        <span class="text-sm font-semibold text-surface-800">Buchung bestätigen</span>
      </template>

      <div class="flex flex-col gap-2 pt-1 text-xs">
        <div class="flex items-center justify-between gap-5">
          <span class="text-surface-600">Datum:</span>
          <strong class="text-surface-700">15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-5">
          <span class="text-surface-600">Zeit</span>
          <strong class="text-surface-700">11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between gap-5">
          <span class="text-surface-600">Dienstleistung</span>
          <strong class="text-surface-700">Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            text
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
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09:00 - 10:30' },
  { label: '11:00 - 12:30', value: '11:00 - 12:30' },
  { label: '14:00 - 15:30', value: '14:00 - 15:30' },
  { label: '16:00 - 17:30', value: '16:00 - 17:30' }
])

const services = ref([
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
])
</script>