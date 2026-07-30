<template>
  <main class="mx-auto flex w-full max-w-[640px] flex-col gap-8 px-4 py-6">
    <header class="flex items-start gap-3">
      <Button icon="pi pi-times" severity="secondary" variant="outlined" rounded size="small" aria-label="Schließen" />
      <div>
        <h1 class="text-2xl font-bold leading-none">Termin buchen</h1>
        <p class="mt-1 text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="grid grid-cols-2 gap-3">
      <Card>
        <template #title>
          <span class="text-base">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="appointmentDate" inline />
        </template>
      </Card>

      <Card>
        <template #title>
          <span class="text-base">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTime" name="time" :value="slot" :input-id="`time-${slot}`" />
              <label :for="`time-${slot}`" class="text-sm">{{ slot }}</label>
            </div>

            <div class="mt-2 flex flex-col gap-1">
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
    </section>

    <Card>
      <template #title>
        <span class="text-base">Deine Daten</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label for="name" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name" fluid />
          </div>

          <div class="flex flex-col gap-1">
            <label for="notes" class="text-sm">Anmerkungen</label>
            <Textarea
              v-model="notes"
              input-id="notes"
              placeholder="Optionale Nachricht..."
              :rows="3"
              fluid
            />
          </div>

          <div class="flex items-start gap-2">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-medium">Erinnerung senden</label>
              <span class="text-xs text-surface-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" variant="text" />
      <Button label="Buchen" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      header="Buchung bestätigen"
      :style="{ width: '250px' }"
      :draggable="false"
    >
      <div class="flex flex-col gap-3 text-sm">
        <div class="flex justify-between gap-4">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Zeit</span>
          <strong>11:00 - 12:30</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Dienstleistung</span>
          <strong>Untersuchung</strong>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" variant="text" size="small" @click="confirmationVisible = false" />
        <Button label="Bestätigen" size="small" @click="confirmationVisible = false" />
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
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '13:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>