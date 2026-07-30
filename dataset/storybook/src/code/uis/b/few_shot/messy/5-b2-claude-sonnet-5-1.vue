<template>
  <div class="mx-auto flex w-full max-w-5xl flex-col gap-4 p-6">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-calendar text-xl" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base text-gray-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Datum wählen -->
      <Card class="bg-slate-100" :pt="{ body: 'gap-4', content: '!p-0' }">
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </template>
      </Card>

      <!-- Zeitslot wählen -->
      <Card class="bg-slate-100" :pt="{ body: 'gap-4', content: '!p-0 flex flex-col gap-4' }">
        <template #title>Zeitslot wählen</template>
        <template #content>
          <SelectButton
            v-model="selectedTimeSlot"
            :options="timeSlots"
            option-label="label"
            option-value="value"
            :pt="{ pcButton: { root: 'flex-col !items-start !rounded-full !border-slate-300' } }"
            class="flex flex-col gap-2"
          />
          <div class="flex flex-col gap-2 rounded-md border border-slate-200 bg-white p-4">
            <label class="text-sm">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Untersuchung"
              class="w-full"
            />
          </div>
        </template>
      </Card>
    </div>

    <!-- Deine Daten -->
    <Card class="bg-slate-100" :pt="{ body: 'gap-4', content: '!p-0 flex flex-col gap-4' }">
      <template #title>Deine Daten</template>
      <template #content>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-1">
            <label for="name-input" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name-input" placeholder="Max Mustermann" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="email-input" class="text-sm">E-Mail</label>
            <InputText v-model="email" type="email" input-id="email-input" placeholder="max@example.com" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="notes-input" class="text-sm">Anmerkungen</label>
          <Textarea v-model="notes" input-id="notes-input" placeholder="Optionale Nachricht..." rows="4" />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminder" input-id="reminder-toggle" />
          <label for="reminder-toggle" class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs font-light text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </label>
        </div>
      </template>
    </Card>

    <!-- Footer actions -->
    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="isConfirmDialogVisible = true" />
    </div>

    <!-- Confirmation dialog -->
    <Dialog
      v-model:visible="isConfirmDialogVisible"
      header="Buchung bestätigen"
      modal
      :pt="{ root: 'w-full max-w-md' }"
    >
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-sm">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2026</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Zeit</span>
          <span class="font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Dienstleistung</span>
          <span class="font-semibold">Untersuchung</span>
        </div>
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
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import DatePicker from 'primevue/datepicker'
  import SelectButton from 'primevue/selectbutton'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Dialog from 'primevue/dialog'

  const selectedDate = ref(new Date(2026, 5, 15))
  const selectedTimeSlot = ref('11:00-12:30')
  const timeSlots = [
    { label: '09:00 - 10:30', value: '09:00-10:30' },
    { label: '11:00 - 12:30', value: '11:00-12:30' },
    { label: '14:00 - 15:30', value: '14:00-15:30' },
    { label: '16:00 - 17:30', value: '16:00-17:30' },
  ]

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const reminder = ref(true)

  const isConfirmDialogVisible = ref(false)
</script>