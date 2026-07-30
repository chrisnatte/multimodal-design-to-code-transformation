<template>
  <main class="min-h-screen bg-white px-6 py-6 text-slate-700">
    <div class="mx-auto w-full max-w-[594px]">
      <header class="mb-10 flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <i class="pi pi-times-circle text-xl"></i>
        </div>
        <div>
          <h1 class="text-2xl font-bold leading-7 text-slate-800">Termin buchen</h1>
          <p class="mt-1 text-sm text-slate-500">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="rounded-xl bg-slate-100 p-3">
          <h2 class="mb-3 text-sm font-medium text-slate-700">Datum wählen</h2>
          <DatePicker
            v-model="selectedDate"
            inline
            show-week
            class="w-full"
          />
        </div>

        <div class="rounded-xl bg-slate-100 p-3">
          <h2 class="mb-3 text-sm font-medium text-slate-700">Zeitslot wählen</h2>

          <div class="flex flex-col gap-2">
            <label
              v-for="slot in timeSlots"
              :key="slot"
              class="flex cursor-pointer items-center gap-2 text-xs text-slate-600"
            >
              <RadioButton v-model="selectedTime" :input-id="slot" name="timeSlot" :value="slot" />
              <span>{{ slot }}</span>
            </label>
          </div>

          <div class="mt-4">
            <label for="service" class="mb-1 block text-xs text-slate-600">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              class="w-full"
            />
          </div>
        </div>

        <div class="rounded-xl bg-slate-100 p-3 md:col-span-2">
          <h2 class="mb-3 text-sm font-medium text-slate-700">Deine Daten</h2>

          <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label for="name" class="mb-1 block text-xs text-slate-600">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div>
              <label for="email" class="mb-1 block text-xs text-slate-600">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full" />
            </div>
          </div>

          <div class="mt-3">
            <label for="notes" class="mb-1 block text-xs text-slate-600">Anmerkungen</label>
            <Textarea
              id="notes"
              v-model="notes"
              placeholder="Optionale Nachricht..."
              rows="4"
              class="w-full resize-none"
            />
          </div>

          <div class="mt-3 flex items-start gap-2">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <label for="reminder" class="cursor-pointer">
              <span class="block text-xs font-semibold text-slate-700">Erinnerung senden</span>
              <span class="block text-[9px] text-slate-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </label>
          </div>
        </div>
      </section>

      <div class="mt-10 flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </div>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      class="w-[350px] max-w-[calc(100vw-2rem)]"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-sm font-semibold text-slate-700">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            size="small"
            aria-label="Schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-2 px-1 pb-1 text-xs">
        <div class="grid grid-cols-[1fr_auto] items-center">
          <span class="text-slate-600">Datum:</span>
          <strong class="font-semibold text-slate-700">15. Juni 2029</strong>
        </div>
        <div class="grid grid-cols-[1fr_auto] items-center">
          <span class="text-slate-600">Zeit</span>
          <strong class="font-semibold text-slate-700">{{ selectedTime }}</strong>
        </div>
        <div class="grid grid-cols-[1fr_auto] items-center">
          <span class="text-slate-600">Dienstleistung</span>
          <strong class="font-semibold text-slate-700">{{ selectedService }}</strong>
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
          <Button
            label="Bestätigen"
            size="small"
            @click="confirmationVisible = false"
          />
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
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
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