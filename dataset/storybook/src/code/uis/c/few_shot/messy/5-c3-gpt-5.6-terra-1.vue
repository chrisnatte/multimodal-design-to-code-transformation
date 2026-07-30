<template>
  <main class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
    <header class="flex items-start gap-3">
      <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Schließen" />
      <div>
        <h1 class="text-2xl font-bold">Termin buchen</h1>
        <p class="text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card :pt="{ body: 'p-4', content: 'p-0' }">
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-semibold">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline />
          </div>
        </template>
      </Card>

      <Card :pt="{ body: 'p-4', content: 'p-0' }">
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-semibold">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot" class="text-sm">{{ slot }}</label>
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
              />
            </div>
          </div>
        </template>
      </Card>
    </section>

    <Card :pt="{ body: 'p-4', content: 'p-0' }">
      <template #content>
        <div class="flex flex-col gap-3">
          <h2 class="font-semibold">Deine Daten</h2>
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="notes" class="text-sm">Anmerkungen</label>
            <Textarea v-model="notes" input-id="notes" placeholder="Optionale Nachricht..." rows="4" />
          </div>
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
              <span class="text-xs text-surface-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      header="Buchung bestätigen"
      modal
      :closable="true"
      :style="{ width: '350px' }"
      :pt="{
        header: 'px-4 pt-4 pb-2',
        content: 'px-4 pb-3',
        footer: 'px-4 pb-4 pt-0',
      }"
    >
      <div class="flex flex-col gap-3 text-sm">
        <div class="flex justify-between">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between">
          <span>Zeit</span>
          <strong>11:00 - 12:30</strong>
        </div>
        <div class="flex justify-between">
          <span>Dienstleistung</span>
          <strong>Untersuchung</strong>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" size="small" @click="confirmationVisible = false" />
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

const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const services = ref([
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' },
])
</script>