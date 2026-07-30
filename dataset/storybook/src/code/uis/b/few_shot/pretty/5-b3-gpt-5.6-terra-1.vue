<template>
  <main class="min-h-screen bg-white px-6 py-16">
    <div class="mx-auto flex w-full max-w-[833px] flex-col gap-12">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          text
          rounded
          aria-label="Buchung schließen"
          class="!h-[50px] !w-[50px] !bg-slate-100"
          @click="bookingOpen = false"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card class="!bg-slate-100">
          <template #content>
            <div class="flex flex-col gap-4 p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Datum wählen</h2>
              <DatePicker
                v-model="selectedDate"
                inline
                show-week
                :show-button-bar="false"
                class="w-fit"
              />
            </div>
          </template>
        </Card>

        <Card class="!bg-slate-100">
          <template #content>
            <div class="flex flex-col gap-4 p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Zeitslot wählen</h2>

              <div class="flex flex-col gap-2">
                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                  <RadioButton
                    v-model="selectedTime"
                    name="time-slot"
                    :input-id="`slot-${slot}`"
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
                  option-label="label"
                  option-value="value"
                  fluid
                />
              </div>
            </div>
          </template>
        </Card>

        <Card class="md:col-span-2 !bg-slate-100">
          <template #content>
            <div class="flex flex-col gap-3 p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Deine Daten</h2>

              <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm">Name</label>
                  <InputText v-model="name" input-id="name" fluid />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm">E-Mail</label>
                  <InputText v-model="email" input-id="email" type="email" fluid />
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <label for="notes" class="text-sm">Anmerkungen</label>
                <Textarea
                  v-model="notes"
                  input-id="notes"
                  placeholder="Optionale Nachricht..."
                  rows="4"
                  fluid
                />
              </div>

              <div class="flex items-center gap-3 px-1">
                <ToggleSwitch v-model="sendReminder" input-id="reminder" />
                <label for="reminder" class="flex flex-col">
                  <span class="text-sm font-semibold">Erinnerung senden</span>
                  <span class="text-[10px] font-light">
                    Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                  </span>
                </label>
              </div>
            </div>
          </template>
        </Card>
      </section>

      <div class="flex items-center justify-end gap-3">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="bookingOpen = false"
        />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </div>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '350px' }"
      content-class="!p-0"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-[17.5px] font-semibold">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Dialog schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-2 px-[17.5px] pb-[17.5px]">
        <div class="flex items-center gap-2 text-sm">
          <span class="flex-1">Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="flex-1">Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="flex-1">Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="confirmationVisible = false"
          />
          <Button label="Bestätigen" @click="confirmationVisible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const bookingOpen = ref(true)
const confirmationVisible = ref(true)
const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30',
]

const services = [
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' },
]
</script>