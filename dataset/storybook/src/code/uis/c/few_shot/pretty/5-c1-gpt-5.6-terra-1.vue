<template>
  <main class="mx-auto flex w-full max-w-xl flex-col px-6 py-5 text-sm">
    <header class="mx-auto mb-8 flex w-full max-w-sm items-start gap-3">
      <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Schließen" class="!h-8 !w-8" />
      <div>
        <h1 class="m-0 text-2xl font-semibold">Termin buchen</h1>
        <p class="m-0 text-xs text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <div class="grid grid-cols-2 gap-3">
      <section class="rounded-lg bg-surface-100 p-3">
        <h2 class="mb-3 text-sm font-medium">Datum wählen</h2>
        <DatePicker
          v-model="appointmentDate"
          inline
          show-week
          :pt="{
            root: 'w-full',
            panel: '!border-0 !bg-transparent !p-0',
          }"
        />
      </section>

      <section class="rounded-lg bg-surface-100 p-3">
        <h2 class="mb-3 text-sm font-medium">Zeitslot wählen</h2>
        <div class="mb-3 flex flex-col gap-2">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-1">
            <RadioButton v-model="selectedTime" :input-id="slot" name="timeslot" :value="slot" />
            <label :for="slot" class="text-xs">{{ slot }}</label>
          </div>
        </div>

        <label for="service" class="mb-1 block text-xs">Dienstleistung</label>
        <Select
          v-model="selectedService"
          input-id="service"
          :options="services"
          class="w-full"
          :pt="{ label: 'text-xs !py-1.5', dropdown: '!w-8' }"
        />
      </section>
    </div>

    <section class="mt-3 rounded-lg bg-surface-100 p-3">
      <h2 class="mb-2 text-sm font-medium">Deine Daten</h2>

      <label for="name" class="mb-1 block text-xs">Name</label>
      <InputText v-model="name" input-id="name" class="mb-3 w-full" />

      <label for="notes" class="mb-1 block text-xs">Anmerkungen</label>
      <Textarea
        v-model="notes"
        input-id="notes"
        placeholder="Optionale Nachricht..."
        rows="3"
        class="w-full resize-none"
      />

      <div class="mt-3 flex items-start gap-2">
        <ToggleSwitch v-model="sendReminder" input-id="reminder" />
        <div>
          <label for="reminder" class="block text-xs font-medium">Erinnerung senden</label>
          <p class="m-0 text-[9px] text-surface-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </p>
        </div>
      </div>
    </section>

    <div class="mt-12 flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" text size="small" />
      <Button label="Buchen" size="small" @click="confirmationVisible = true" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      header="Buchung bestätigen"
      modal
      :closable="true"
      :draggable="false"
      class="w-[250px]"
      :pt="{
        header: '!px-3 !pt-3 !pb-2',
        title: 'text-sm font-semibold',
        content: '!px-3 !pb-2',
        footer: '!px-3 !pt-1 !pb-3',
      }"
    >
      <div class="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-[10px]">
        <span>Datum:</span>
        <strong>15. Juni 2029</strong>
        <span>Zeit</span>
        <strong>11:00 - 12:30</strong>
        <span>Dienstleistung</span>
        <strong>Untersuchung</strong>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" text size="small" @click="confirmationVisible = false" />
        <Button label="Bestätigen" size="small" @click="confirmationVisible = false" />
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
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

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']
</script>