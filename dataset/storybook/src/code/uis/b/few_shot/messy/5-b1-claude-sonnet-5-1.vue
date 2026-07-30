<template>
  <div class="min-h-screen bg-white p-10">
    <div class="mx-auto flex max-w-5xl flex-col gap-4">
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

      <!-- Date and Timeslot selection -->
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-xl bg-slate-100 p-4">
          <h2 class="mb-4 text-lg font-medium">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </div>

        <div class="rounded-xl bg-slate-100 p-4">
          <h2 class="mb-4 text-lg font-medium">Zeitslot wählen</h2>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :input-id="slot" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-2">
            <label for="dienstleistung" class="text-sm">Dienstleistung</label>
            <Select
              v-model="service"
              input-id="dienstleistung"
              :options="serviceOptions"
              option-label="label"
              option-value="value"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Personal data -->
      <div class="rounded-xl bg-slate-100 p-4">
        <h2 class="mb-4 text-lg font-medium">Deine Daten</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="name-input" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name-input" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email-input" class="text-sm">E-Mail</label>
            <InputText v-model="email" type="email" input-id="email-input" class="w-full" />
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea
            v-model="notes"
            input-id="notes"
            placeholder="Optionale Nachricht..."
            rows="4"
            class="w-full"
          />
        </div>

        <div class="mt-4 flex items-center gap-2">
          <Checkbox v-model="reminder" input-id="reminder" binary />
          <div>
            <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
            <p class="text-xs text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </div>

      <!-- Footer actions -->
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      modal
      :pt="{
        root: 'w-full max-w-md',
        content: 'flex flex-col !gap-3',
      }"
    >
      <div class="flex justify-between text-sm">
        <span>Datum:</span>
        <span class="font-semibold">15. Juni 2026</span>
      </div>
      <div class="flex justify-between text-sm">
        <span>Zeit:</span>
        <span class="font-semibold">{{ selectedTimeSlot }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span>Dienstleistung:</span>
        <span class="font-semibold">{{ serviceLabel }}</span>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import DatePicker from 'primevue/datepicker'
  import RadioButton from 'primevue/radiobutton'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'
  import Dialog from 'primevue/dialog'

  const selectedDate = ref(new Date(2026, 6, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedTimeSlot = ref('11:00 - 12:30')

  const serviceOptions = [
    { label: 'Beratungsgespräch', value: 'beratung' },
    { label: 'Untersuchung', value: 'untersuchung' },
  ]
  const service = ref('untersuchung')
  const serviceLabel = computed(
    () => serviceOptions.find((option) => option.value === service.value)?.label ?? ''
  )

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const reminder = ref(true)

  const showConfirmDialog = ref(false)
</script>