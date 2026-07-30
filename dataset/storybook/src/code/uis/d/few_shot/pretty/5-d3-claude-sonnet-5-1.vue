<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" rounded text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <Card :pt="{ body: '!p-4', content: 'flex flex-col gap-4' }">
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline show-week class="w-full" />
        </template>
      </Card>

      <Card :pt="{ body: '!p-4', content: 'flex flex-col gap-4' }">
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="service-select" class="text-sm">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              input-id="service-select"
              placeholder="Dienstleistung wählen"
              class="w-full"
            />
          </div>
        </template>
      </Card>
    </div>

    <Card :pt="{ body: '!p-4', content: 'flex flex-col gap-4' }">
      <template #title>Deine Daten</template>
      <template #content>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="name-input" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name-input" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email-input" class="text-sm">E-Mail</label>
            <InputText v-model="email" input-id="email-input" type="email" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes-textarea" class="text-sm">Anmerkungen</label>
          <Textarea v-model="notes" input-id="notes-textarea" placeholder="Optionale Nachricht..." rows="4" />
        </div>
        <div class="flex items-center gap-3 px-1">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
    </div>

    <Dialog
      v-model:visible="isConfirmDialogVisible"
      header="Buchung bestätigen"
      modal
      :style="{ width: '350px' }"
      :pt="{ content: 'flex flex-col gap-2' }"
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
        <Button label="Bestätigen" severity="primary" @click="isConfirmDialogVisible = false" />
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

  const selectedDate = ref(new Date(2029, 5, 15))
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