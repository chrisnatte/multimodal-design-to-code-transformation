<template>
  <div class="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" rounded text size="large" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card :pt="{ body: '!p-4', content: '!p-0' }">
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <Card :pt="{ body: '!p-4', content: '!p-0' }">
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedSlot" :inputId="slot" name="timeSlot" :value="slot" />
                <label :for="slot">{{ slot }}</label>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label for="service">Dienstleistung</label>
              <Select
                v-model="selectedService"
                :options="services"
                optionLabel="label"
                optionValue="value"
                inputId="service"
                placeholder="Dienstleistung wählen"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <Card>
      <template #title>Deine Daten</template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText v-model="name" input-id="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail</label>
            <InputText v-model="email" input-id="email" placeholder="E-Mail eingeben" />
          </div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label for="notes">Anmerkungen</label>
          <Textarea v-model="notes" input-id="notes" rows="4" placeholder="Optionale Nachricht..." />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminder" input-id="reminder" />
          <div class="flex flex-col">
            <label for="reminder" class="font-semibold text-sm">Erinnerung senden</label>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <Dialog v-model:visible="showConfirmDialog" header="Buchung bestätigen" modal :style="{ width: '25rem' }">
      <div class="flex flex-col gap-2 mb-4">
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
          <span class="font-semibold">{{ selectedServiceLabel }}</span>
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

  const selectedDate = ref(new Date(2029, 5, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedSlot = ref('11:00 - 12:30')

  const services = ref([
    { label: 'Beratungsgespräch', value: 'consultation' },
    { label: 'Untersuchung', value: 'examination' }
  ])
  const selectedService = ref('examination')
  const selectedServiceLabel = computed(() => services.value.find(s => s.value === selectedService.value)?.label ?? '')

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const reminder = ref(true)

  const showConfirmDialog = ref(false)
</script>