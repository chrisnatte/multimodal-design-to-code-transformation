<template>
  <main class="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-6">
    <header class="flex items-center gap-3">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded aria-label="Schließen" />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <span class="text-sm">Buche einen Termin für dich bei uns.</span>
      </div>
    </header>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card :pt="{ root: 'bg-slate-50', body: '!p-4', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline />
          </div>
        </template>
      </Card>

      <Card :pt="{ root: 'bg-slate-50', body: '!p-4', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>

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
                class="w-full"
              />
              <Listbox v-model="selectedService" :options="services" class="w-full" />
            </div>
          </div>
        </template>
      </Card>
    </section>

    <Card :pt="{ root: 'bg-slate-50', body: '!p-4', content: '!p-0' }">
      <template #content>
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-medium">Deine Daten</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm">Name</label>
              <InputText v-model="name" input-id="name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText v-model="email" input-id="email" type="email" />
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
            <InputSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
              <span class="text-xs">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <footer class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="confirmationVisible = true" />
    </footer>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      header="Buchung bestätigen"
      :pt="{
        root: 'w-full max-w-sm',
        header: '!px-5 !pt-5 !pb-3',
        content: '!px-5 !pb-3',
        footer: '!px-5 !pt-0 !pb-5',
      }"
    >
      <div class="flex flex-col gap-3 text-sm">
        <div class="flex justify-between gap-6">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-6">
          <span>Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex justify-between gap-6">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Bestätigen" severity="primary" @click="confirmationVisible = false" />
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
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

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