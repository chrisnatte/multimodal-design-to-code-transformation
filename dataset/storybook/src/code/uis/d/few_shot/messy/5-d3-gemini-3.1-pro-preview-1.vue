<template>
  <div class="flex min-h-screen items-center justify-center bg-black/40 p-8">
    <div class="flex w-full max-w-[833px] flex-col gap-8">
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" severity="secondary" rounded outlined class="!h-12 !w-12" />
        <div>
          <h1 class="text-3xl font-bold text-surface-900">Termin buchen</h1>
          <p class="text-surface-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="flex flex-col gap-4 rounded-xl bg-surface-100 p-4">
          <h2 class="text-lg font-medium text-surface-900">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full" />
        </div>

        <div class="flex flex-col gap-4 rounded-xl bg-surface-100 p-4">
          <h2 class="text-lg font-medium text-surface-900">Zeitslot wählen</h2>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :inputId="slot" :value="slot" />
              <label :for="slot" class="text-sm text-surface-700">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-2">
            <label class="text-sm text-surface-700">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Untersuchung"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 rounded-xl bg-surface-100 p-4">
        <h2 class="text-lg font-medium text-surface-900">Deine Daten</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm text-surface-700">Name</label>
            <InputText id="name" v-model="name" placeholder="Max Mustermann" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-700">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="max@example.com" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm text-surface-700">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="sendReminder" inputId="reminder" />
          <div>
            <label for="reminder" class="font-semibold text-surface-900">Erinnerung senden</label>
            <p class="text-xs text-surface-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Buchen" severity="primary" @click="showConfirmation = true" />
      </div>
    </div>

    <Dialog
      v-model:visible="showConfirmation"
      modal
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between">
          <span class="text-sm text-surface-600">Datum:</span>
          <span class="text-sm font-semibold text-surface-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-surface-600">Zeit</span>
          <span class="text-sm font-semibold text-surface-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-surface-600">Dienstleistung</span>
          <span class="text-sm font-semibold text-surface-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmation = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmation = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import DatePicker from 'primevue/datepicker'
  import RadioButton from 'primevue/radiobutton'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Dialog from 'primevue/dialog'

  const date = ref(new Date(2026, 6, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedTimeSlot = ref('11:00 - 12:30')
  const services = ['Untersuchung', 'Beratungsgespräch']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('')
  const notes = ref('')
  const sendReminder = ref(true)

  const showConfirmation = ref(true)
</script>