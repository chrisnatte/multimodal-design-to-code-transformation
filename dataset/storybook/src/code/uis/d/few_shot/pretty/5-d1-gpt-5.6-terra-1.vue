<template>
  <main class="mx-auto flex w-full max-w-[833px] flex-col gap-12 px-6 py-6">
    <header class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded aria-label="Schließen" class="!h-12 !w-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card :pt="{ root: 'bg-surface-50', body: '!p-[18px]', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline show-week />
          </div>
        </template>
      </Card>

      <Card :pt="{ root: 'bg-surface-50', body: '!p-[18px]', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                class="w-full"
              />
              <Listbox v-model="selectedService" :options="services" class="w-full" />
            </div>
          </div>
        </template>
      </Card>

      <Card class="md:col-span-2" :pt="{ root: 'bg-surface-50', body: '!p-[18px]', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="text-lg font-medium">Deine Daten</h2>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="flex flex-col gap-2">
                <label for="name">Name</label>
                <InputText v-model="name" input-id="name" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email">E-Mail</label>
                <InputText v-model="email" input-id="email" type="email" class="w-full" />
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <label for="notes">Anmerkungen</label>
              <Textarea
                v-model="notes"
                input-id="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-3 px-1">
              <ToggleSwitch v-model="sendReminder" input-id="reminder" />
              <div class="flex flex-col">
                <label for="reminder" class="font-semibold">Erinnerung senden</label>
                <span class="text-xs">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <footer class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="confirmationVisible = true" />
    </footer>
  </main>

  <Dialog
    v-model:visible="confirmationVisible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-[350px]',
      header: '!px-[18px] !pt-[18px] !pb-3',
      content: '!px-[18px] !pb-[18px]',
      footer: '!px-[18px] !pb-[18px] !pt-0'
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <span class="text-lg font-semibold">Buchung bestätigen</span>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          aria-label="Dialog schließen"
          @click="confirmationVisible = false"
        />
      </div>
    </template>

    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <span>Datum:</span>
        <strong>15. Juni 2029</strong>
      </div>
      <div class="flex items-center justify-between gap-2">
        <span>Zeit</span>
        <strong>{{ selectedTime }}</strong>
      </div>
      <div class="flex items-center justify-between gap-2">
        <span>Dienstleistung</span>
        <strong>{{ selectedService }}</strong>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Bestätigen" severity="primary" @click="confirmationVisible = false" />
      </div>
    </template>
  </Dialog>
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
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>