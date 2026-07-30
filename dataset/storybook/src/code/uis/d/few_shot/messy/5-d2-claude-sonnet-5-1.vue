<template>
  <div class="w-full max-w-5xl mx-auto p-8">
    <div class="flex items-center gap-4 mb-8">
      <Avatar icon="pi pi-times" size="xlarge" shape="circle" class="bg-slate-100" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Termin buchen</h1>
        <p class="text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-slate-100 rounded-xl p-6">
        <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline class="w-full" />
      </div>

      <div class="bg-slate-100 rounded-xl p-6">
        <h2 class="text-lg font-medium mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-4">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="dienstleistung" class="text-sm">Dienstleistung</label>
          <Select
            v-model="selectedService"
            input-id="dienstleistung"
            :options="services"
            placeholder="Wähle eine Dienstleistung"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-slate-100 rounded-xl p-6 mb-6">
      <h2 class="text-lg font-medium mb-4">Deine Daten</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col gap-2">
          <label for="name-input" class="text-sm">Name</label>
          <InputText v-model="name" input-id="name-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email-input" class="text-sm">E-Mail</label>
          <InputText v-model="email" type="email" input-id="email-input" />
        </div>
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label for="anmerkungen-textarea" class="text-sm">Anmerkungen</label>
        <Textarea v-model="notes" input-id="anmerkungen-textarea" placeholder="Optionale Nachricht..." rows="3" />
      </div>
      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="sendReminder" input-id="reminder-switch" />
        <label for="reminder-switch">
          <span class="font-semibold text-sm block">Erinnerung senden</span>
          <span class="text-xs text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
        </label>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" @click="isConfirmDialogVisible = false" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
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
        <span class="font-semibold">{{ selectedSlot }}</span>
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
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import DatePicker from 'primevue/datepicker'
  import RadioButton from 'primevue/radiobutton'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'
  import Dialog from 'primevue/dialog'

  const selectedDate = ref(new Date(2026, 6, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedSlot = ref('11:00 - 12:30')

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)

  const isConfirmDialogVisible = ref(true)
</script>