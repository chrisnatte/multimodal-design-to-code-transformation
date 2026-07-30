<template>
  <main class="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 text-slate-700">
    <header class="mb-12 flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded aria-label="Schließen" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <template #content>
          <div class="flex flex-col gap-4 p-1">
            <h2 class="text-lg font-medium">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline show-week />
          </div>
        </template>
      </Card>

      <Card>
        <template #content>
          <div class="flex flex-col gap-4 p-1">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time-slot" :value="slot" />
                <label :for="slot" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                placeholder="Dienstleistung wählen"
                fluid
              />
            </div>
          </div>
        </template>
      </Card>

      <Card class="md:col-span-2">
        <template #content>
          <div class="flex flex-col gap-3 p-1">
            <h2 class="text-lg font-medium">Deine Daten</h2>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText v-model="name" input-id="name" type="text" fluid />
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
                <span class="text-xs font-light">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </label>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <div class="mt-auto flex justify-end gap-3 pt-8">
      <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
      <Button label="Buchen" @click="confirmationVisible = true" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :dismissable-mask="false"
      :draggable="false"
      :style="{ width: '22rem' }"
      header="Buchung bestätigen"
    >
      <div class="flex flex-col gap-3 text-sm">
        <div class="flex justify-between gap-4">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
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

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>