<template>
  <main class="min-h-screen bg-white px-6 py-7 font-sans text-slate-900">
    <div class="mx-auto w-full max-w-[833px]">
      <header class="mb-12 flex items-center gap-4">
        <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-700">
          <i class="pi pi-calendar"></i>
        </div>
        <div class="flex flex-col">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="mt-1 text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section class="min-h-[386px] rounded-xl bg-slate-100 p-[17.5px]">
          <h2 class="text-[17.5px] font-medium">Datum wählen</h2>
          <div class="mt-4 w-fit rounded-md border border-slate-200 bg-white p-2">
            <DatePicker v-model="appointmentDate" inline />
          </div>
        </section>

        <section class="min-h-[386px] rounded-xl bg-slate-100 p-[17.5px]">
          <h2 class="text-[17.5px] font-medium">Zeitslot wählen</h2>

          <div class="mt-3 flex flex-col gap-2">
            <label
              v-for="slot in timeSlots"
              :key="slot"
              class="flex cursor-pointer items-center gap-2 text-sm"
            >
              <RadioButton v-model="selectedTime" :input-id="slot" name="timeSlot" :value="slot" />
              <span>{{ slot }}</span>
            </label>
          </div>

          <div class="mt-4">
            <label for="service" class="mb-1 block text-sm">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              class="h-[33px] w-full"
            />
          </div>

          <div class="mt-2 rounded-md border border-slate-200 bg-white p-1">
            <div
              v-for="service in services"
              :key="service"
              class="rounded px-3 py-2 text-sm"
              :class="{ 'bg-slate-100': service === selectedService }"
            >
              {{ service }}
            </div>
          </div>
        </section>
      </div>

      <section class="mt-4 rounded-xl bg-slate-100 p-[17.5px]">
        <h2 class="text-[17.5px] font-medium">Deine Daten</h2>

        <div class="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div class="flex flex-col gap-1">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" class="h-[33px] w-full" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" type="email" class="h-[33px] w-full" />
          </div>

          <div class="col-span-1 mt-0 flex flex-col gap-2 lg:col-span-2">
            <label for="notes" class="text-sm">Anmerkungen</label>
            <Textarea
              id="notes"
              v-model="notes"
              placeholder="Optionale Nachricht..."
              rows="4"
              class="h-[101px] w-full resize-none"
            />
          </div>

          <div class="col-span-1 flex items-start gap-3 pt-1 lg:col-span-2">
            <ToggleSwitch v-model="reminder" input-id="reminder" />
            <label for="reminder" class="flex cursor-pointer flex-col">
              <span class="text-sm font-semibold">Erinnerung senden</span>
              <span class="text-[10px] font-light">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </label>
          </div>
        </div>
      </section>

      <footer class="mt-[75px] flex h-[33px] justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="cancelBooking" />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="true"
      header="Buchung bestätigen"
      class="w-[350px]"
    >
      <div class="flex flex-col gap-5 pt-1 text-sm">
        <div class="flex items-center justify-between">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
          <Button label="Bestätigen" @click="confirmBooking" />
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

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
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

const cancelBooking = () => {
  confirmationVisible.value = false
}

const confirmBooking = () => {
  confirmationVisible.value = false
}
</script>