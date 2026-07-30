<template>
  <main class="min-h-screen bg-white px-6 py-7 text-slate-900">
    <div class="mx-auto flex w-full max-w-[833px] flex-col gap-10">
      <header class="flex items-center gap-4">
        <div class="flex size-12 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-700">
          <i class="pi pi-calendar" aria-hidden="true"></i>
        </div>
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] leading-10 font-bold">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section class="rounded-xl bg-slate-100 p-[17.5px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Datum wählen</h2>
            <DatePicker
              v-model="appointmentDate"
              inline
              :manual-input="false"
              class="w-full"
            />
          </div>
        </section>

        <section class="rounded-xl bg-slate-100 p-[17.5px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div
                v-for="slot in timeSlots"
                :key="slot"
                class="flex items-center gap-2"
              >
                <RadioButton
                  v-model="selectedTimeSlot"
                  :input-id="`slot-${slot}`"
                  name="time-slot"
                  :value="slot"
                />
                <label :for="`slot-${slot}`" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                class="w-full"
              />
            </div>
          </div>
        </section>

        <section class="rounded-xl bg-slate-100 p-[17.5px] md:col-span-2">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Deine Daten</h2>

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
              <div class="flex flex-col gap-0.5">
                <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
                <span class="text-[10px] font-light">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="resetBooking" />
        <Button label="Buchen" severity="success" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
      :pt="{
        header: 'px-[17.5px] pt-[17.5px]',
        content: 'px-[17.5px]',
        footer: 'px-[17.5px] pb-[17.5px]'
      }"
    >
      <div class="flex flex-col gap-4 py-1 text-sm">
        <div class="flex justify-between gap-4">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Zeit</span>
          <strong>{{ selectedTimeSlot }}</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="confirmationVisible = false"
        />
        <Button label="Bestätigen" severity="success" @click="confirmationVisible = false" />
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTimeSlot = ref('11:00 - 12:30')
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

const services = ref(['Beratungsgespräch', 'Untersuchung'])

function resetBooking() {
  appointmentDate.value = new Date(2026, 6, 15)
  selectedTimeSlot.value = '11:00 - 12:30'
  selectedService.value = 'Untersuchung'
  name.value = 'Max Mustermann'
  email.value = 'max@example.com'
  notes.value = ''
  sendReminder.value = true
}
</script>