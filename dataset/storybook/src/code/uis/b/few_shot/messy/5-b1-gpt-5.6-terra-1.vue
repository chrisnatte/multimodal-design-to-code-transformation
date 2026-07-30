<template>
  <div class="min-h-screen bg-white px-6 py-7">
    <main class="mx-auto flex w-full max-w-[833px] flex-col gap-12">
      <header class="flex items-center gap-4">
        <Avatar icon="pi pi-calendar" shape="circle" size="xlarge" class="bg-slate-100 text-slate-700" />
        <div class="flex flex-col">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section class="rounded-xl bg-slate-100 p-[17.5px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-[17.5px] font-medium">Datum wählen</h2>
            <DatePicker
              v-model="selectedDate"
              inline
              show-week
              :first-day-of-week="0"
              class="w-full"
            />
          </div>
        </section>

        <section class="rounded-xl bg-slate-100 p-[17.5px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-[17.5px] font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
                <RadioButton
                  v-model="selectedTimeSlot"
                  :input-id="slot.value"
                  name="time-slot"
                  :value="slot.value"
                />
                <label :for="slot.value" class="text-sm">{{ slot.label }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                option-label="label"
                option-value="value"
                class="w-full"
              />
            </div>
          </div>
        </section>

        <section class="rounded-xl bg-slate-100 p-[17.5px] md:col-span-2">
          <div class="flex flex-col gap-4">
            <h2 class="text-[17.5px] font-medium">Deine Daten</h2>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText v-model="name" input-id="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText v-model="email" input-id="email" type="email" class="w-full" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="notes" class="text-sm">Anmerkungen</label>
              <Textarea
                v-model="notes"
                input-id="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                class="w-full"
              />
            </div>

            <div class="flex items-start gap-3">
              <Checkbox v-model="sendReminder" input-id="reminder" binary />
              <div class="flex flex-col">
                <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
                <span class="text-[10px]">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="cancelBooking" />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </footer>
    </main>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
      :pt="{
        header: 'px-[17.5px] pt-[17.5px]',
        content: 'px-[17.5px]',
        footer: 'px-[17.5px] pb-[17.5px]',
      }"
    >
      <div class="flex flex-col gap-5 py-1">
        <div class="flex items-center justify-between text-sm">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Zeit</span>
          <strong>11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Dienstleistung</span>
          <strong>Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Bestätigen" @click="confirmBooking" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTimeSlot = ref('11:00-12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = [
  { label: '09:00 - 10:30', value: '09:00-10:30' },
  { label: '11:00 - 12:30', value: '11:00-12:30' },
  { label: '14:00 - 15:30', value: '14:00-15:30' },
  { label: '16:00 - 17:30', value: '16:00-17:30' },
]

const services = [
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' },
]

function cancelBooking() {
  confirmationVisible.value = false
}

function confirmBooking() {
  confirmationVisible.value = false
}
</script>