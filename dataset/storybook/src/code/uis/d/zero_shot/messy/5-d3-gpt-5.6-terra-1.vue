<template>
  <div class="min-h-screen bg-white px-6 py-6 text-slate-700">
    <div class="mx-auto w-full max-w-[833px]">
      <header class="mb-10 flex items-center gap-4">
        <Button icon="pi pi-times-circle" text rounded class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-600" aria-label="Schließen" />
        <div>
          <h1 class="text-[32px] font-bold leading-none text-slate-800">Termin buchen</h1>
          <p class="mt-2 text-base text-slate-500">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <main class="flex flex-col gap-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <section class="rounded-xl bg-slate-100 p-[17px]">
            <h2 class="mb-4 text-[17px] font-medium text-slate-700">Datum wählen</h2>
            <DatePicker v-model="selectedDate" inline class="w-[292px] max-w-full" />
          </section>

          <section class="rounded-xl bg-slate-100 p-[17px]">
            <h2 class="mb-4 text-[17px] font-medium text-slate-700">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot" class="text-sm text-slate-600">{{ slot }}</label>
              </div>
            </div>

            <div class="mt-4">
              <label for="service" class="mb-2 block text-sm text-slate-600">Dienstleistung</label>
              <Select
                id="service"
                v-model="selectedService"
                :options="services"
                class="w-full"
              />
            </div>
          </section>
        </div>

        <section class="rounded-xl bg-slate-100 p-[17px]">
          <h2 class="mb-4 text-[17px] font-medium text-slate-700">Deine Daten</h2>

          <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label for="name" class="mb-2 block text-sm text-slate-600">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm text-slate-600">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full" />
            </div>
          </div>

          <div class="mt-3">
            <label for="notes" class="mb-2 block text-sm text-slate-600">Anmerkungen</label>
            <Textarea id="notes" v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full resize-none" />
          </div>

          <div class="mt-3 flex items-start gap-3">
            <ToggleSwitch v-model="reminder" input-id="reminder" />
            <label for="reminder" class="cursor-pointer">
              <span class="block text-sm font-semibold text-slate-700">Erinnerung senden</span>
              <span class="block text-[10px] text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </label>
          </div>
        </section>

        <div class="flex justify-end gap-3 pt-12">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Buchen" @click="confirmationVisible = true" />
        </div>
      </main>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      :draggable="false"
      :style="{ width: '350px' }"
      class="overflow-hidden"
    >
      <template #header>
        <span class="text-[17px] font-semibold text-slate-700">Buchung bestätigen</span>
      </template>

      <div class="flex flex-col gap-3 px-1 pt-1 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-slate-600">Datum:</span>
          <strong class="font-semibold text-slate-700">15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-slate-600">Zeit</span>
          <strong class="font-semibold text-slate-700">11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-slate-600">Dienstleistung</span>
          <strong class="font-semibold text-slate-700">Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
          <Button label="Bestätigen" @click="confirmationVisible = false" />
        </div>
      </template>
    </Dialog>
  </div>
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
const reminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]

const services = [
  'Beratungsgespräch',
  'Untersuchung'
]
</script>