<template>
  <main class="min-h-screen bg-white px-6 py-8 text-slate-700">
    <div class="mx-auto flex w-full max-w-[833px] flex-col gap-7">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-times"
          rounded
          outlined
          severity="secondary"
          aria-label="Schließen"
          class="!h-[50px] !w-[50px] !border-slate-200 !bg-slate-50 !text-slate-600"
        />
        <div>
          <h1 class="m-0 text-[32px] font-bold leading-tight text-slate-800">Termin buchen</h1>
          <p class="m-0 mt-1 text-base text-slate-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="rounded-xl bg-slate-50 p-[18px]">
          <h2 class="m-0 text-[18px] font-medium text-slate-700">Datum wählen</h2>
          <DatePicker
            v-model="selectedDate"
            inline
            class="mt-4"
          />
        </div>

        <div class="rounded-xl bg-slate-50 p-[18px]">
          <h2 class="m-0 text-[18px] font-medium text-slate-700">Zeitslot wählen</h2>

          <div class="mt-4 flex flex-col gap-2">
            <label v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2 text-sm text-slate-700">
              <RadioButton v-model="selectedTime" name="timeSlot" :value="slot" />
              <span>{{ slot }}</span>
            </label>
          </div>

          <div class="mt-4">
            <label for="service" class="mb-2 block text-sm text-slate-700">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              class="w-full"
            />
            <Listbox
              v-model="selectedService"
              :options="services"
              class="mt-1 w-full"
            />
          </div>
        </div>
      </section>

      <section class="rounded-xl bg-slate-50 p-[18px]">
        <h2 class="m-0 text-[18px] font-medium text-slate-700">Deine Daten</h2>

        <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label for="name" class="mb-2 block text-sm text-slate-700">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>
          <div>
            <label for="email" class="mb-2 block text-sm text-slate-700">E-Mail</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
        </div>

        <div class="mt-3">
          <label for="notes" class="mb-2 block text-sm text-slate-700">Anmerkungen</label>
          <Textarea
            id="notes"
            v-model="notes"
            placeholder="Optionale Nachricht..."
            rows="4"
            class="w-full resize-none"
          />
        </div>

        <div class="mt-3 flex items-start gap-3">
          <ToggleSwitch v-model="sendReminder" class="mt-0.5" />
          <div>
            <div class="text-sm font-semibold text-slate-700">Erinnerung senden</div>
            <div class="text-[10px] text-slate-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </div>
          </div>
        </div>
      </section>

      <div class="flex justify-end gap-3">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="resetForm"
        />
        <Button
          label="Buchen"
          severity="success"
          @click="showConfirmation = true"
        />
      </div>
    </div>

    <Dialog
      v-model:visible="showConfirmation"
      modal
      :draggable="false"
      :closable="false"
      :style="{ width: '350px' }"
      class="!rounded-xl"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-[18px] font-semibold text-slate-700">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Dialog schließen"
            class="!h-8 !w-8"
            @click="showConfirmation = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-3 pb-1 text-sm">
        <div class="flex justify-between gap-6">
          <span class="text-slate-600">Datum:</span>
          <strong class="text-slate-700">15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-6">
          <span class="text-slate-600">Zeit</span>
          <strong class="text-slate-700">{{ selectedTime }}</strong>
        </div>
        <div class="flex justify-between gap-6">
          <span class="text-slate-600">Dienstleistung</span>
          <strong class="text-slate-700">{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="showConfirmation = false"
          />
          <Button
            label="Bestätigen"
            severity="success"
            @click="showConfirmation = false"
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
import Listbox from 'primevue/listbox'
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
const showConfirmation = ref(true)

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

const resetForm = () => {
  name.value = ''
  email.value = ''
  notes.value = ''
  sendReminder.value = false
}
</script>