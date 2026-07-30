<template>
  <div class="mx-auto flex w-full max-w-[833px] flex-col gap-8 py-6">
    <header class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" text rounded aria-label="Schließen" />
      <div class="flex flex-col">
        <h1 class="m-0 text-3xl font-bold">Termin buchen</h1>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </header>

    <main class="grid grid-cols-2 gap-4">
      <section class="rounded-xl bg-surface-100 p-[17.5px]">
        <h2 class="m-0 mb-4 text-lg font-medium">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline class="w-full" />
      </section>

      <section class="rounded-xl bg-surface-100 p-[17.5px]">
        <h2 class="m-0 mb-4 text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-2">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-2">
          <label for="service">Dienstleistung</label>
          <Select
            v-model="selectedService"
            input-id="service"
            :options="services"
            class="w-full"
          />
          <Listbox v-model="selectedService" :options="services" class="w-full" />
        </div>
      </section>

      <section class="col-span-2 rounded-xl bg-surface-100 p-[17.5px]">
        <h2 class="m-0 mb-4 text-lg font-medium">Deine Daten</h2>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText v-model="name" input-id="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail</label>
            <InputText v-model="email" input-id="email" type="email" />
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label for="notes">Anmerkungen</label>
            <Textarea
              v-model="notes"
              input-id="notes"
              placeholder="Optionale Nachricht..."
              rows="4"
              class="w-full"
            />
          </div>
          <div class="col-span-2 flex items-center gap-3">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="font-semibold">Erinnerung senden</label>
              <span class="text-xs">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="confirmationVisible = true" />
    </footer>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      :pt="{ root: 'w-[350px]', header: 'px-[17.5px] pt-[17.5px] pb-4', content: 'px-[17.5px] py-0', footer: 'px-[17.5px] pt-4 pb-[17.5px]' }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-lg font-semibold">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
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
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Bestätigen" severity="primary" @click="confirmationVisible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const services = ref(['Beratungsgespräch', 'Untersuchung'])
</script>