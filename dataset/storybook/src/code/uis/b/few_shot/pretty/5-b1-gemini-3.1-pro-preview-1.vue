<template>
  <div class="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-8 bg-white p-8">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!h-12 !w-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-900">Termin buchen</h1>
        <p class="text-base text-gray-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- Card 1: Datum wählen -->
      <Card class="border border-slate-100 bg-slate-50 shadow-none">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium text-gray-900">Datum wählen</h2>
            <DatePicker v-model="selectedDate" inline class="w-full" />
          </div>
        </template>
      </Card>

      <!-- Card 2: Zeitslot wählen -->
      <Card class="border border-slate-100 bg-slate-50 shadow-none">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium text-gray-900">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTimeSlot" :input-id="slot" :value="slot" />
                <label :for="slot" class="text-sm text-gray-700">{{ slot }}</label>
              </div>
            </div>
            <div class="mt-4 flex flex-col gap-1">
              <label class="text-sm text-gray-700">Dienstleistung</label>
              <Select
                v-model="selectedService"
                :options="services"
                placeholder="Dienstleistung wählen"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 3: Deine Daten -->
      <Card class="border border-slate-100 bg-slate-50 shadow-none md:col-span-2">
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium text-gray-900">Deine Daten</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label for="name" class="text-sm text-gray-700">Name</label>
                <InputText id="name" v-model="name" placeholder="Name eingeben" />
              </div>
              <div class="flex flex-col gap-1">
                <label for="email" class="text-sm text-gray-700">E-Mail</label>
                <InputText id="email" v-model="email" placeholder="E-Mail eingeben" />
              </div>
            </div>
            <div class="mt-2 flex flex-col gap-1">
              <label for="notes" class="text-sm text-gray-700">Anmerkungen</label>
              <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." />
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-900">Erinnerung senden</span>
                <span class="text-xs text-gray-500"
                  >Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per
                  E-Mail.</span
                >
              </div>
              <ToggleSwitch v-model="sendReminder" />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Footer Actions -->
    <div class="mt-4 flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showDialog = true" />
    </div>

    <!-- Dialog -->
    <Dialog
      v-model:visible="showDialog"
      modal
      header="Buchung bestätigen"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-3 py-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Datum:</span>
          <span class="text-sm font-semibold text-gray-900">{{ formattedDate }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Zeit</span>
          <span class="text-sm font-semibold text-gray-900">{{ selectedTimeSlot }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Dienstleistung</span>
          <span class="text-sm font-semibold text-gray-900">{{ selectedService }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import DatePicker from 'primevue/datepicker'
  import RadioButton from 'primevue/radiobutton'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Dialog from 'primevue/dialog'

  const selectedDate = ref(new Date('2029-06-15'))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedTimeSlot = ref('11:00 - 12:30')

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref('Untersuchung')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)

  const showDialog = ref(true)

  const formattedDate = computed(() => {
    if (!selectedDate.value) return ''
    return selectedDate.value.toLocaleDateString('de-DE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  })
</script>