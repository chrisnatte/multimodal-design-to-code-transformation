<template>
  <div class="relative flex min-h-screen w-full flex-col items-center bg-white p-8">
    <div class="flex w-full max-w-[833px] flex-col gap-8">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded severity="secondary" class="!h-12 !w-12" />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold text-black">Termin buchen</h1>
          <p class="text-base text-gray-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- Card 1: Datum wählen -->
        <Card class="border border-slate-100 bg-slate-50 shadow-none">
          <template #title>
            <span class="text-lg font-medium">Datum wählen</span>
          </template>
          <template #content>
            <DatePicker v-model="date" inline class="w-full" />
          </template>
        </Card>

        <!-- Card 2: Zeitslot wählen -->
        <Card class="border border-slate-100 bg-slate-50 shadow-none">
          <template #title>
            <span class="text-lg font-medium">Zeitslot wählen</span>
          </template>
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" input-id="slot1" value="09:00 - 10:30" />
                  <label for="slot1" class="text-sm">09:00 - 10:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" input-id="slot2" value="11:00 - 12:30" />
                  <label for="slot2" class="text-sm">11:00 - 12:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" input-id="slot3" value="14:00 - 15:30" />
                  <label for="slot3" class="text-sm">14:00 - 15:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" input-id="slot4" value="16:00 - 17:30" />
                  <label for="slot4" class="text-sm">16:00 - 17:30</label>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Dienstleistung</label>
                <Select
                  v-model="service"
                  :options="services"
                  option-label="label"
                  placeholder="Dienstleistung wählen"
                  class="w-full"
                />
              </div>
            </div>
          </template>
        </Card>

        <!-- Card 3: Deine Daten -->
        <Card class="border border-slate-100 bg-slate-50 shadow-none md:col-span-2">
          <template #title>
            <span class="text-lg font-medium">Deine Daten</span>
          </template>
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Name</label>
                  <InputText v-model="name" placeholder="Name eingeben" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">E-Mail</label>
                  <InputText v-model="email" placeholder="E-Mail eingeben" />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Anmerkungen</label>
                <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" />
              </div>
              <div class="mt-2 flex items-center gap-3">
                <ToggleSwitch v-model="sendReminder" />
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Erinnerung senden</span>
                  <span class="text-xs text-gray-500">
                    Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                  </span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Footer Buttons -->
      <div class="mt-4 flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Buchen" severity="primary" @click="showDialog = true" />
      </div>
    </div>

    <!-- Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '350px' }">
      <div class="flex flex-col gap-3 py-4">
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
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showDialog = false" />
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

  const date = ref(new Date(2024, 0, 15))
  const timeSlot = ref('11:00 - 12:30')
  const service = ref({ label: 'Untersuchung', value: 'Untersuchung' })
  const services = ref([
    { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
    { label: 'Untersuchung', value: 'Untersuchung' },
  ])
  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)
  const showDialog = ref(true)
</script>