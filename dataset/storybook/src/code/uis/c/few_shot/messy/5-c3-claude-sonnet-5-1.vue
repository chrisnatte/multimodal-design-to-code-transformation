<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times-circle" text rounded severity="secondary" />
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold">Termin buchen</h1>
        <span class="text-gray-500">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex-1 rounded-lg border p-6">
        <h2 class="mb-4 text-lg font-medium">Datum wählen</h2>
        <DatePicker v-model="date" inline class="w-full" />
      </div>

      <div class="flex-1 rounded-lg border p-6">
        <h2 class="mb-4 text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-2">
          <label for="service" class="text-sm">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            input-id="service"
            placeholder="Dienstleistung wählen"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="rounded-lg border p-6">
      <h2 class="mb-4 text-lg font-medium">Deine Daten</h2>
      <div class="flex flex-col gap-2">
        <label for="name-input" class="text-sm">Name</label>
        <InputText v-model="name" input-id="name-input" class="w-full" />
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <label for="notes-input" class="text-sm">Anmerkungen</label>
        <Textarea
          v-model="notes"
          input-id="notes-input"
          placeholder="Optionale Nachricht..."
          rows="4"
          class="w-full"
        />
      </div>
      <div class="mt-4 flex items-start gap-3">
        <ToggleSwitch v-model="reminder" />
        <div class="flex flex-col">
          <span class="font-medium">Erinnerung senden</span>
          <span class="text-sm text-gray-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </span>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
    </div>

    <Dialog
      v-model:visible="isConfirmDialogVisible"
      header="Buchung bestätigen"
      modal
      :pt="{
        root: 'w-full max-w-md',
        content: 'flex flex-col !gap-3',
      }"
    >
      <div class="flex justify-between">
        <span class="text-gray-600">Datum:</span>
        <span class="font-medium">15. Juni 2029</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Zeit</span>
        <span class="font-medium">11:00 - 12:30</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Dienstleistung</span>
        <span class="font-medium">Untersuchung</span>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="isConfirmDialogVisible = false" />
        <Button label="Bestätigen" severity="primary" />
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
  const selectedSlot = ref('11:00 - 12:30')
  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')
  const name = ref('Max Mustermann')
  const notes = ref('')
  const reminder = ref(true)
  const isConfirmDialogVisible = ref(true)
</script>