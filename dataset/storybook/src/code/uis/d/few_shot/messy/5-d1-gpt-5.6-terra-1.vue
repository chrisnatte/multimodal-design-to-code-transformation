<template>
  <main class="mx-auto flex w-full max-w-[833px] flex-col gap-6 py-6">
    <header class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded aria-label="Schließen" />
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-sm">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <div class="grid grid-cols-2 gap-4">
      <Card :pt="{ body: 'p-4', content: 'p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="font-medium">Datum wählen</h2>
            <Calendar v-model="appointmentDate" inline class="w-fit" />
          </div>
        </template>
      </Card>

      <Card :pt="{ body: 'p-4', content: 'p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="font-medium">Zeitslot wählen</h2>
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
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <Card :pt="{ body: 'p-4', content: 'p-0' }">
      <template #content>
        <div class="flex flex-col gap-3">
          <h2 class="font-medium">Deine Daten</h2>
          <div class="grid grid-cols-2 gap-3">
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
          <div class="flex items-start gap-2">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
              <span class="text-xs">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="confirmationVisible = true" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      :pt="{
        root: 'w-full max-w-[350px]',
        header: 'px-4 pt-4 pb-3',
        content: 'px-4 pb-3',
        footer: 'px-4 pb-4 pt-1',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="font-semibold">Buchung bestätigen</span>
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

      <div class="flex flex-col gap-3 text-sm">
        <div class="flex justify-between">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between">
          <span>Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex justify-between">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" size="small" @click="confirmationVisible = false" />
          <Button label="Bestätigen" severity="primary" size="small" @click="confirmationVisible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
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