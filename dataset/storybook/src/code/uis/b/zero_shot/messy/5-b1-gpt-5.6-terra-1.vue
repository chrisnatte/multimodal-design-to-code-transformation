<template>
  <main class="min-h-screen bg-white px-6 py-7 text-slate-900">
    <section class="mx-auto w-full max-w-[833px]">
      <header class="mb-12 flex items-center gap-4">
        <Avatar
          icon="pi pi-calendar"
          shape="circle"
          class="h-[50px] w-[50px] bg-[#f1f5f9] text-slate-700"
        />
        <div>
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="mt-1 text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section class="min-h-[386px] rounded-xl bg-[#f1f5f9] p-[17.5px]">
          <h2 class="text-[18px] font-medium">Datum wählen</h2>
          <div class="mt-4 w-full max-w-[292px]">
            <DatePicker
              v-model="selectedDate"
              inline
              showWeek
              class="w-full"
            />
          </div>
        </section>

        <section class="min-h-[386px] rounded-xl bg-[#f1f5f9] p-[17.5px]">
          <h2 class="text-[18px] font-medium">Zeitslot wählen</h2>

          <div class="mt-4 flex flex-col gap-[9px]">
            <div
              v-for="slot in timeSlots"
              :key="slot"
              class="flex items-center gap-2"
            >
              <RadioButton
                v-model="selectedSlot"
                :input-id="`slot-${slot}`"
                name="time-slot"
                :value="slot"
              />
              <label :for="`slot-${slot}`" class="cursor-pointer text-sm">
                {{ slot }}
              </label>
            </div>
          </div>

          <div class="mt-4">
            <label for="service" class="mb-2 block text-sm">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              class="h-[33px] w-full"
            />
          </div>
        </section>

        <section class="rounded-xl bg-[#f1f5f9] p-[17.5px] lg:col-span-2">
          <h2 class="text-[18px] font-medium">Deine Daten</h2>

          <div class="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div>
              <label for="name" class="mb-2 block text-sm">Name</label>
              <InputText
                id="name"
                v-model="name"
                class="h-[33px] w-full"
              />
            </div>

            <div>
              <label for="email" class="mb-2 block text-sm">E-Mail</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="h-[33px] w-full"
              />
            </div>

            <div class="lg:col-span-2">
              <label for="notes" class="mb-2 block text-sm">Anmerkungen</label>
              <Textarea
                id="notes"
                v-model="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                class="w-full resize-none"
              />
            </div>

            <div class="flex items-start gap-3 pt-1 lg:col-span-2">
              <ToggleSwitch v-model="sendReminder" />
              <div>
                <label class="block cursor-pointer text-sm font-semibold" @click="sendReminder = !sendReminder">
                  Erinnerung senden
                </label>
                <p class="mt-0.5 text-[10px] font-light">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="mt-[74px] flex justify-end gap-3">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="h-[33px]"
          @click="resetBooking"
        />
        <Button
          label="Buchen"
          class="h-[33px] border-[#10b981] bg-[#10b981] text-white"
          @click="confirmationVisible = true"
        />
      </footer>
    </section>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :draggable="false"
      :closable="false"
      class="w-[350px]"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-[18px] font-semibold">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-4 py-1 text-sm">
        <div class="flex items-center justify-between">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Zeit</span>
          <strong>{{ selectedSlot }}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="h-[33px]"
            @click="confirmationVisible = false"
          />
          <Button
            label="Bestätigen"
            class="h-[33px] border-[#10b981] bg-[#10b981] text-white"
            @click="confirmationVisible = false"
          />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedSlot = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
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

const resetBooking = () => {
  selectedDate.value = new Date(2026, 6, 15)
  selectedSlot.value = '11:00 - 12:30'
  selectedService.value = 'Untersuchung'
  name.value = 'Max Mustermann'
  email.value = 'max@example.com'
  notes.value = ''
  sendReminder.value = true
}
</script>