<template>
  <main class="mx-auto min-h-screen w-full max-w-[640px] px-6 py-5 text-slate-700">
    <header class="mb-9 flex items-start gap-3">
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        aria-label="Schließen"
        class="mt-0.5"
      />
      <div>
        <h1 class="m-0 text-2xl font-bold leading-7">Termin buchen</h1>
        <p class="m-0 mt-1 text-sm text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Card>
        <template #content>
          <div class="flex flex-col gap-2">
            <h2 class="m-0 text-sm font-semibold">Datum wählen</h2>
            <DatePicker
              v-model="selectedDate"
              inline
              class="w-full"
              :manual-input="false"
            />
          </div>
        </template>
      </Card>

      <Card>
        <template #content>
          <div class="flex flex-col gap-2">
            <h2 class="m-0 text-sm font-semibold">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="mt-1 flex flex-col gap-1">
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

    <section class="mt-3">
      <Card>
        <template #content>
          <div class="flex flex-col gap-2">
            <h2 class="m-0 text-sm font-semibold">Deine Daten</h2>

            <div class="flex flex-col gap-1">
              <label for="name" class="text-xs">Name</label>
              <InputText v-model="name" input-id="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-1">
              <label for="notes" class="text-xs">Anmerkungen</label>
              <Textarea
                v-model="notes"
                input-id="notes"
                placeholder="Optionale Nachricht..."
                rows="3"
                class="w-full resize-none"
              />
            </div>

            <div class="mt-1 flex items-start gap-2">
              <ToggleSwitch v-model="reminder" input-id="reminder" class="mt-0.5" />
              <label for="reminder" class="cursor-pointer">
                <span class="block text-sm font-medium">Erinnerung senden</span>
                <span class="block text-[10px] leading-3 text-slate-500">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </label>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <footer class="mt-12 flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" text />
      <Button label="Buchen" @click="dialogVisible = true" />
    </footer>

    <Dialog
      v-model:visible="dialogVisible"
      modal
      :draggable="false"
      class="w-[min(92vw,250px)]"
      header="Buchung bestätigen"
    >
      <div class="flex flex-col gap-2 text-xs">
        <div class="flex items-center justify-between gap-5">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-5">
          <span>Zeit</span>
          <strong>11:00 - 12:30</strong>
        </div>
        <div class="flex items-center justify-between gap-5">
          <span>Dienstleistung</span>
          <strong>Untersuchung</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            text
            size="small"
            @click="dialogVisible = false"
          />
          <Button label="Bestätigen" size="small" @click="dialogVisible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
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
const dialogVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>