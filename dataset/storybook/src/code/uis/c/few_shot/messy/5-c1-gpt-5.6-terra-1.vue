<template>
  <main class="mx-auto flex w-full max-w-[594px] flex-col gap-8 py-6">
    <header class="flex items-start gap-3 px-6">
      <Button icon="pi pi-times" severity="secondary" text rounded size="small" aria-label="Schließen" />
      <div>
        <h1 class="text-2xl font-semibold">Termin buchen</h1>
        <p class="mt-0.5 text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="flex gap-3">
      <Card class="w-1/2">
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-medium">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline show-week />
          </div>
        </template>
      </Card>

      <Card class="w-1/2">
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                class="w-full"
              />
              <Listbox
                v-model="selectedService"
                :options="services"
                class="w-full shadow-sm"
                :pt="{ list: 'py-0' }"
              />
            </div>
          </div>
        </template>
      </Card>
    </section>

    <Card>
      <template #content>
        <div class="flex flex-col gap-3">
          <h2 class="font-medium">Deine Daten</h2>

          <div class="flex flex-col gap-1">
            <label for="name" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name" class="w-full" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="notes" class="text-sm">Anmerkungen</label>
            <Textarea
              v-model="notes"
              input-id="notes"
              placeholder="Optionale Nachricht..."
              rows="3"
              class="w-full resize-none"
            />
          </div>

          <div class="flex items-start gap-2">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="-mt-0.5">
              <label for="reminder" class="text-sm font-medium">Erinnerung senden</label>
              <p class="text-xs text-surface-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </p>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" text />
      <Button label="Buchen" severity="success" @click="confirmationVisible = true" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      header="Buchung bestätigen"
      modal
      closable
      class="w-[250px]"
      :pt="{
        header: 'px-4 pt-4 pb-2',
        content: 'px-4 pb-3',
        footer: 'px-4 pb-3 pt-0',
        title: 'text-sm font-semibold',
      }"
    >
      <div class="flex flex-col gap-2 text-xs">
        <div class="flex justify-between gap-5">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-5">
          <span>Zeit</span>
          <strong>11:00 - 12:30</strong>
        </div>
        <div class="flex justify-between gap-5">
          <span>Dienstleistung</span>
          <strong>Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" text size="small" @click="confirmationVisible = false" />
        <Button label="Bestätigen" severity="success" size="small" />
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
import Listbox from 'primevue/listbox'
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

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>