<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-times" rounded severity="secondary" text />
      <div>
        <h1 class="text-2xl font-bold text-slate-800">Termin buchen</h1>
        <p class="text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="mb-6 grid grid-cols-2 gap-6">
      <Card>
        <template #content>
          <h2 class="mb-4 text-lg font-medium">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline />
        </template>
      </Card>

      <Card>
        <template #content>
          <h2 class="mb-4 text-lg font-medium">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" name="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-6 flex flex-col gap-2">
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
        </template>
      </Card>
    </div>

    <Card class="mb-6">
      <template #content>
        <h2 class="mb-4 text-lg font-medium">Deine Daten</h2>
        <div class="flex flex-col gap-2">
          <label for="name">Name</label>
          <InputText v-model="name" input-id="name" class="w-full" />
        </div>

        <div class="mt-4 flex flex-col gap-2">
          <label for="anmerkungen">Anmerkungen</label>
          <Textarea v-model="anmerkungen" input-id="anmerkungen" placeholder="Optionale Nachricht..." rows="4" />
        </div>

        <div class="mt-4 flex items-start gap-3">
          <ToggleSwitch v-model="erinnerungSenden" input-id="erinnerung" />
          <label for="erinnerung">
            <div class="font-medium">Erinnerung senden</div>
            <div class="text-sm text-slate-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </div>
          </label>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>
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
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
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
  const services = [
    { label: 'Beratungsgespräch', value: 'beratung' },
    { label: 'Untersuchung', value: 'untersuchung' },
  ]
  const selectedService = ref('untersuchung')
  const name = ref('Max Mustermann')
  const anmerkungen = ref('')
  const erinnerungSenden = ref(true)
  const showConfirmDialog = ref(true)
</script>