<template>
  <div class="mx-auto max-w-5xl p-8">
    <div class="mb-8 flex items-center gap-4">
      <Button icon="pi pi-times-circle" rounded severity="secondary" size="large" />

      <div>
        <h1 class="text-surface-900 text-3xl font-bold">Termin buchen</h1>
        <p class="text-surface-500 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="mb-6 grid grid-cols-2 gap-4">
      <Card class="!bg-gray-100">
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline show-week />
        </template>
      </Card>

      <Card class="!bg-gray-100">
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="mb-4 flex flex-col gap-3">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :input-id="slot" :value="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="service" class="text-surface-700 text-sm">Dienstleistung</label>
            <Select id="service" v-model="service" :options="serviceOptions" />
          </div>
        </template>
      </Card>

      <Card class="col-span-2 !bg-gray-100">
        <template #title>Deine Daten</template>
        <template #content>
          <div class="grid w-full grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-surface-700 text-sm">Name</label>
              <InputText id="name" v-model="customer.name" placeholder="Name eingeben" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-surface-700 text-sm">E-Mail</label>
              <InputText id="email" v-model="customer.email" placeholder="E-Mail eingeben" />
            </div>

            <div class="col-span-2 flex flex-col gap-2">
              <label for="notes" class="text-surface-700 text-sm">Anmerkungen</label>
              <Textarea
                id="notes"
                v-model="customer.notes"
                placeholder="Optionale Nachricht..."
                rows="4"
              />
            </div>

            <div class="col-span-2 flex items-start gap-3">
              <ToggleSwitch v-model="sendReminder" />
              <div>
                <p class="text-surface-900 font-medium">Erinnerung senden</p>
                <p class="text-surface-500 text-sm">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </p>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" @click="confirmVisible = true" />
    </div>
  </div>

  <Dialog
    v-model:visible="confirmVisible"
    modal
    header="Buchung bestätigen"
    :pt="{ root: 'w-full max-w-md' }"
  >
    <div class="flex flex-col gap-3">
      <div class="flex justify-between">
        <span class="text-surface-600 text-sm">Datum:</span>
        <span class="text-surface-900 text-sm font-semibold">15. Juni 2029</span>
      </div>
      <div class="flex justify-between">
        <span class="text-surface-600 text-sm">Zeit</span>
        <span class="text-surface-900 text-sm font-semibold">{{ selectedSlot }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-surface-600 text-sm">Dienstleistung</span>
        <span class="text-surface-900 text-sm font-semibold">{{ service }}</span>
      </div>
    </div>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="confirmVisible = false" />
      <Button label="Bestätigen" @click="confirmVisible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
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

  const serviceOptions = ['Beratungsgespräch', 'Untersuchung']
  const service = ref('Untersuchung')

  const customer = reactive({
    name: 'Max Mustermann',
    email: 'max@example.com',
    notes: '',
  })

  const sendReminder = ref(true)

  const confirmVisible = ref(true)
</script>
