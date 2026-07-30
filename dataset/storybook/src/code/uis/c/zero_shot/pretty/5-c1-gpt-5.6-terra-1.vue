<template>
  <main class="min-h-screen bg-slate-50 px-6 py-5 text-slate-700">
    <div class="mx-auto max-w-[634px]">
      <header class="mb-9 flex items-start gap-3 pl-5">
        <Button
          icon="pi pi-times"
          text
          rounded
          severity="secondary"
          aria-label="Schließen"
          class="!mt-0.5 !h-8 !w-8 !border !border-slate-300"
        />
        <div>
          <h1 class="text-2xl font-bold leading-7 text-slate-800">Termin buchen</h1>
          <p class="mt-0.5 text-sm text-slate-500">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="rounded-lg bg-white p-3 shadow-sm">
          <h2 class="mb-2 text-sm font-semibold text-slate-700">Datum wählen</h2>
          <DatePicker
            v-model="appointmentDate"
            inline
            :firstDayOfWeek="1"
            class="w-full"
          />
        </div>

        <div class="rounded-lg bg-white p-3 shadow-sm">
          <h2 class="mb-2 text-sm font-semibold text-slate-700">Zeitslot wählen</h2>

          <div class="flex flex-col gap-1.5">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-1.5">
              <RadioButton v-model="selectedTime" :inputId="slot" name="time" :value="slot" />
              <label :for="slot" class="text-xs text-slate-600">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-3">
            <label for="service" class="mb-1 block text-xs font-medium text-slate-600">Dienstleistung</label>
            <Select
              v-model="selectedService"
              inputId="service"
              :options="services"
              class="w-full"
            />
            <Listbox
              v-model="selectedService"
              :options="services"
              class="mt-0.5 w-full"
            />
          </div>
        </div>
      </section>

      <section class="mt-3 rounded-lg bg-white p-3 shadow-sm">
        <h2 class="mb-2 text-sm font-semibold text-slate-700">Deine Daten</h2>

        <div>
          <label for="name" class="mb-1 block text-xs font-medium text-slate-600">Name</label>
          <InputText v-model="name" inputId="name" class="w-full" />
        </div>

        <div class="mt-2">
          <label for="notes" class="mb-1 block text-xs font-medium text-slate-600">Anmerkungen</label>
          <Textarea
            v-model="notes"
            inputId="notes"
            placeholder="Optionale Nachricht..."
            rows="3"
            class="w-full resize-none"
          />
        </div>

        <div class="mt-2 flex items-start gap-2">
          <ToggleSwitch v-model="reminder" inputId="reminder" class="mt-0.5" />
          <div>
            <label for="reminder" class="block text-xs font-semibold text-slate-700">Erinnerung senden</label>
            <p class="text-[9px] leading-3 text-slate-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </section>

      <footer class="mt-12 flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      :draggable="false"
      class="w-[250px]"
    >
      <template #header>
        <span class="text-sm font-bold text-slate-700">Buchung bestätigen</span>
      </template>

      <div class="space-y-2 pt-1 text-xs">
        <div class="flex items-center justify-between gap-4">
          <span class="text-slate-600">Datum:</span>
          <strong class="text-slate-700">15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-4">
          <span class="text-slate-600">Zeit</span>
          <strong class="text-slate-700">11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between gap-4">
          <span class="text-slate-600">Dienstleistung</span>
          <strong class="text-slate-700">Untersuchung</strong>
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
const reminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
])

const services = ref([
  'Beratungsgespräch',
  'Untersuchung'
])
</script>