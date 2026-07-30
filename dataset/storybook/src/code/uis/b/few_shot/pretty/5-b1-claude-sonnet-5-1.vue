<template>
  <div class="flex min-h-screen flex-col items-center gap-4 bg-black p-8">
    <div class="flex w-full max-w-4xl items-center gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid w-full max-w-4xl grid-cols-2 gap-4">
      <Card
        :pt="{
          body: 'flex flex-col gap-4',
          content: '!p-0',
        }"
      >
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline show-week />
        </template>
      </Card>

      <Card
        :pt="{
          body: 'flex flex-col gap-4',
          content: 'flex flex-col gap-4 !p-0',
        }"
      >
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :input-id="slot" :value="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="service-select">Dienstleistung</label>
            <Select
              v-model="selectedService"
              input-id="service-select"
              :options="services"
              placeholder="Dienstleistung wählen"
            />
          </div>
        </template>
      </Card>

      <Card
        class="col-span-2"
        :pt="{
          body: 'flex flex-col gap-4',
          content: 'flex flex-col gap-4 !p-0',
        }"
      >
        <template #title>Deine Daten</template>
        <template #content>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="name-input">Name</label>
              <InputText v-model="name" input-id="name-input" placeholder="Name eingeben" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email-input">E-Mail</label>
              <InputText v-model="email" input-id="email-input" placeholder="E-Mail eingeben" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="notes-textarea">Anmerkungen</label>
            <Textarea v-model="notes" input-id="notes-textarea" placeholder="Optionale Nachricht..." rows="4" />
          </div>
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="sendReminder" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Erinnerung senden</span>
              <span class="text-xs font-light">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <div class="flex w-full max-w-4xl justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
    </div>

    <Dialog
      v-model:visible="isConfirmDialogVisible"
      header="Buchung bestätigen"
      modal
      :pt="{
        root: 'w-full max-w-sm',
        content: 'flex flex-col gap-2',
      }"
    >
      <div class="flex items-center justify-between">
        <span class="text-sm">Datum:</span>
        <span class="text-sm font-semibold">15. Juni 2029</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Zeit</span>
        <span class="text-sm font-semibold">11:00 - 12:30</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Dienstleistung</span>
        <span class="text-sm font-semibold">Untersuchung</span>
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
  const selectedTimeSlot = ref('11:00 - 12:30')
  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')
  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)
  const isConfirmDialogVisible = ref(true)
</script>