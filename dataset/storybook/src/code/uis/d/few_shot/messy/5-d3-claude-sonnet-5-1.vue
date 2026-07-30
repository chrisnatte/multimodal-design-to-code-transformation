<template>
  <div class="flex flex-col gap-6 p-8 max-w-5xl mx-auto">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!bg-slate-100 !w-[50px] !h-[50px]" />
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base text-gray-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <div class="bg-slate-100 rounded-xl p-6">
        <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline class="w-full" />
      </div>

      <div class="bg-slate-100 rounded-xl p-6 flex flex-col gap-4">
        <h2 class="text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 bg-white rounded-md p-4">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedTimeSlot" :input-id="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="service">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            input-id="service"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-slate-100 rounded-xl p-6">
      <h2 class="text-lg font-medium mb-4">Deine Daten</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col gap-2">
          <label for="name-input">Name</label>
          <InputText v-model="name" input-id="name-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email-input">E-Mail</label>
          <InputText v-model="email" input-id="email-input" />
        </div>
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label for="notes-input">Anmerkungen</label>
        <Textarea v-model="notes" input-id="notes-input" placeholder="Optionale Nachricht..." rows="4" />
      </div>
      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="sendReminder" input-id="reminder-toggle" />
        <div>
          <label for="reminder-toggle" class="font-semibold text-sm block">Erinnerung senden</label>
          <span class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
    </div>
  </div>

  <Dialog
    v-model:visible="isConfirmDialogVisible"
    header="Buchung bestätigen"
    modal
    :pt="{
      root: 'w-full max-w-md',
      content: 'flex flex-col gap-3',
    }"
  >
    <div class="flex justify-between">
      <span>Datum:</span>
      <span class="font-semibold">15. Juni 2029</span>
    </div>
    <div class="flex justify-between">
      <span>Zeit</span>
      <span class="font-semibold">{{ selectedTimeSlot }}</span>
    </div>
    <div class="flex justify-between">
      <span>Dienstleistung</span>
      <span class="font-semibold">{{ selectedService }}</span>
    </div>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="isConfirmDialogVisible = false" />
      <Button label="Bestätigen" severity="primary" @click="isConfirmDialogVisible = false" />
    </template>
  </Dialog>
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
  const selectedTimeSlot = ref('11:00 - 12:30')

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)

  const isConfirmDialogVisible = ref(true)
</script>