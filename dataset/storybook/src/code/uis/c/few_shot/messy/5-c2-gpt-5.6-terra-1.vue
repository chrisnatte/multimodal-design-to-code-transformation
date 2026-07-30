<template>
  <main class="mx-auto flex w-full max-w-3xl flex-col gap-8 p-6">
    <header class="mx-auto flex w-full max-w-xl items-start gap-3">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded size="small" aria-label="Schließen" />
      <div>
        <h1 class="text-2xl font-semibold">Termin buchen</h1>
        <p class="text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <template #title>
          <span class="text-sm">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </template>
      </Card>

      <Card>
        <template #title>
          <span class="text-sm">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>

            <div class="mt-3 flex flex-col gap-2">
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
    </section>

    <Card>
      <template #title>
        <span class="text-sm">Deine Daten</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label for="name" class="text-xs">Name</label>
            <InputText v-model="name" input-id="name" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="notes" class="text-xs">Anmerkungen</label>
            <Textarea v-model="notes" input-id="notes" placeholder="Optionale Nachricht..." rows="4" />
          </div>
          <div class="flex items-start gap-2">
            <ToggleSwitch v-model="reminder" input-id="reminder" />
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
      <Button label="Abbrechen" severity="secondary" text />
      <Button label="Buchen" severity="primary" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      :draggable="false"
      :pt="{ root: 'w-full max-w-xs', header: 'pb-2', content: 'pt-2', footer: 'pt-3' }"
    >
      <template #header>
        <span class="font-semibold">Buchung bestätigen</span>
      </template>

      <div class="grid grid-cols-2 gap-y-3 text-sm">
        <span>Datum:</span>
        <strong class="text-right">15. Juni 2029</strong>
        <span>Zeit</span>
        <strong class="text-right">11:00 - 12:30</strong>
        <span>Dienstleistung</span>
        <strong class="text-right">Untersuchung</strong>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" text size="small" @click="confirmationVisible = false" />
        <Button label="Bestätigen" severity="primary" size="small" />
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

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const reminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>