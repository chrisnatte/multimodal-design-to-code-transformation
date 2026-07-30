<template>
  <div class="flex flex-col gap-6 bg-white p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" rounded severity="secondary" text class="!h-[50px] !w-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
        <span class="text-base text-gray-600">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <Card
        :pt="{
          body: 'flex flex-col gap-4 !p-4',
          content: '!p-0',
        }"
      >
        <template #title>
          <span class="text-lg font-medium">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline show-week />
        </template>
      </Card>

      <Card
        :pt="{
          body: 'flex flex-col gap-4 !p-4',
          content: 'flex flex-col gap-4 !p-0',
        }"
      >
        <template #title>
          <span class="text-lg font-medium">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="service">Dienstleistung</label>
            <Select
              v-model="selectedService"
              input-id="service"
              :options="services"
              placeholder="Dienstleistung wählen"
            />
          </div>
        </template>
      </Card>
    </div>

    <Card
      :pt="{
        body: 'flex flex-col gap-4 !p-4',
        content: 'flex flex-col gap-4 !p-0',
      }"
    >
      <template #title>
        <span class="text-lg font-medium">Deine Daten</span>
      </template>
      <template #content>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText v-model="name" input-id="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail</label>
            <InputText v-model="email" input-id="email" type="email" placeholder="E-Mail eingeben" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes">Anmerkungen</label>
          <Textarea v-model="notes" input-id="notes" placeholder="Optionale Nachricht..." rows="4" />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="notifyEnabled" input-id="notify" />
          <div class="flex flex-col">
            <label for="notify" class="text-sm font-semibold">Erinnerung senden</label>
            <span class="text-xs text-gray-500"
              >Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span
            >
          </div>
        </div>
      </template>
    </Card>

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
      root: 'w-full max-w-sm',
      content: 'flex flex-col !gap-2',
    }"
  >
    <div class="flex items-center justify-between">
      <span>Datum:</span>
      <span class="font-semibold">15. Juni 2029</span>
    </div>
    <div class="flex items-center justify-between">
      <span>Zeit</span>
      <span class="font-semibold">11:00 - 12:30</span>
    </div>
    <div class="flex items-center justify-between">
      <span>Dienstleistung</span>
      <span class="font-semibold">Untersuchung</span>
    </div>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="isConfirmDialogVisible = false" />
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

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const notifyEnabled = ref(true)

  const isConfirmDialogVisible = ref(true)
</script>