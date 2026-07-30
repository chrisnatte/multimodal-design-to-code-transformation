<template>
  <main class="min-h-screen bg-white px-6 py-7 text-surface-900">
    <div class="mx-auto w-full max-w-[833px]">
      <header class="mb-[52px] flex items-center gap-4">
        <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-surface-100 text-2xl text-primary">
          <i class="pi pi-calendar-plus"></i>
        </div>
        <div class="flex flex-col">
          <h1 class="m-0 text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="m-0 mt-1 text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="min-h-[386px] rounded-xl bg-surface-100 p-[17.5px]">
          <h2 class="m-0 text-[18px] font-medium">Datum wählen</h2>
          <div class="mt-4">
            <DatePicker v-model="selectedDate" inline class="w-full" />
          </div>
        </div>

        <div class="min-h-[386px] rounded-xl bg-surface-100 p-[17.5px]">
          <h2 class="m-0 text-[18px] font-medium">Zeitslot wählen</h2>

          <div class="mt-4 flex flex-col gap-2">
            <label
              v-for="slot in timeSlots"
              :key="slot"
              class="flex cursor-pointer items-center gap-2 text-sm"
            >
              <RadioButton v-model="selectedTime" name="time-slot" :value="slot" />
              <span>{{ slot }}</span>
            </label>
          </div>

          <div class="mt-4">
            <label for="service" class="mb-2 block text-sm">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              class="w-full"
            />
          </div>
        </div>

        <div class="rounded-xl bg-surface-100 p-[17.5px] lg:col-span-2">
          <h2 class="m-0 text-[18px] font-medium">Deine Daten</h2>

          <div class="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText id="email" v-model="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2 lg:col-span-2">
              <label for="notes" class="text-sm">Anmerkungen</label>
              <Textarea
                id="notes"
                v-model="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                class="w-full resize-none"
              />
            </div>

            <div class="flex items-start gap-3 lg:col-span-2">
              <ToggleSwitch v-model="reminder" input-id="reminder" class="mt-0.5" />
              <label for="reminder" class="cursor-pointer">
                <span class="block text-sm font-semibold">Erinnerung senden</span>
                <span class="block text-[10px] font-light">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <footer class="mt-[75px] flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="resetBooking" />
        <Button label="Buchen" @click="showConfirmation = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="showConfirmation"
      modal
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
      :breakpoints="{ '575px': 'calc(100vw - 2rem)' }"
    >
      <div class="flex flex-col gap-5 pt-1 text-sm">
        <div class="flex justify-between gap-4">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between gap-4">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedTime }}</span>
        </div>
        <div class="flex justify-between gap-4">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" @click="showConfirmation = false" />
          <Button label="Bestätigen" @click="showConfirmation = false" />
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
const reminder = ref(true)
const showConfirmation = ref(true)

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

const resetBooking = () => {
  selectedDate.value = new Date(2026, 6, 15)
  selectedTime.value = '11:00 - 12:30'
  selectedService.value = 'Untersuchung'
  name.value = 'Max Mustermann'
  email.value = 'max@example.com'
  notes.value = ''
  reminder.value = true
  showConfirmation.value = false
}
</script>