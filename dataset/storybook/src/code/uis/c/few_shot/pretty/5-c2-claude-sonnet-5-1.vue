<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded outlined />
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Termin buchen</h1>
        <p class="text-gray-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label class="font-medium">Datum wählen</label>
        <DatePicker v-model="selectedDate" inline show-week class="w-full" />
      </div>

      <div class="flex-1 flex flex-col gap-4">
        <label class="font-medium">Zeitslot wählen</label>
        <div class="flex flex-col gap-3">
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
            option-label="label"
            option-value="value"
            input-id="service"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">Deine Daten</h2>
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <InputText id="name" v-model="name" class="w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="remarks">Anmerkungen</label>
        <Textarea id="remarks" v-model="remarks" placeholder="Optionale Nachricht..." rows="4" class="w-full" />
      </div>
      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="sendReminder" input-id="reminder" />
        <div>
          <label for="reminder" class="font-medium block">Erinnerung senden</label>
          <span class="text-sm text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <Dialog v-model:visible="showConfirmDialog" header="Buchung bestätigen" modal :style="{ width: '25rem' }">
      <div class="flex flex-col gap-3">
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
          <span class="font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
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

  const services = [
    { label: 'Beratungsgespräch', value: 'beratungsgespraech' },
    { label: 'Untersuchung', value: 'untersuchung' },
  ]
  const selectedService = ref('untersuchung')

  const name = ref('Max Mustermann')
  const remarks = ref('')
  const sendReminder = ref(true)

  const showConfirmDialog = ref(true)
</script>