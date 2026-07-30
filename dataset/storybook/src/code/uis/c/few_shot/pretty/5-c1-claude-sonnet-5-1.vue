<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-3">
      <Button icon="pi pi-times-circle" severity="secondary" rounded text size="large" />
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold">Termin buchen</h1>
        <p class="text-gray-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex flex-1 flex-col gap-3">
        <h2 class="text-lg font-medium">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline />
      </div>

      <div class="flex flex-1 flex-col gap-4">
        <h2 class="text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="service">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            input-id="service"
            placeholder="Dienstleistung wählen"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-medium">Deine Daten</h2>
      <div class="flex flex-col gap-2">
        <label for="name-input">Name</label>
        <InputText v-model="name" input-id="name-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="notes">Anmerkungen</label>
        <Textarea v-model="notes" input-id="notes" placeholder="Optionale Nachricht..." rows="4" />
      </div>
      <div class="flex items-start gap-3">
        <ToggleSwitch v-model="sendReminder" />
        <div class="flex flex-col">
          <span class="font-medium">Erinnerung senden</span>
          <span class="text-sm text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      modal
      :pt="{
        root: 'w-full max-w-md',
        content: 'flex flex-col !gap-3',
      }"
    >
      <div class="flex justify-between">
        <span>Datum:</span>
        <span class="font-medium">15. Juni 2029</span>
      </div>
      <div class="flex justify-between">
        <span>Zeit</span>
        <span class="font-medium">11:00 - 12:30</span>
      </div>
      <div class="flex justify-between">
        <span>Dienstleistung</span>
        <span class="font-medium">Untersuchung</span>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
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

  const selectedDate = ref(new Date(2026, 6, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedSlot = ref('11:00 - 12:30')
  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const notes = ref('')
  const sendReminder = ref(true)

  const showConfirmDialog = ref(true)
</script>