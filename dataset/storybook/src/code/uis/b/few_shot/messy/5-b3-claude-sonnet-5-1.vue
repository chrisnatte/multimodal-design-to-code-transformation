<template>
  <div class="mx-auto flex w-[860px] flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-calendar text-xl" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base text-gray-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="flex gap-4">
      <Card class="flex-1" :pt="{ body: '!p-6', content: '!p-0' }">
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </template>
      </Card>

      <Card class="flex-1" :pt="{ body: '!p-6', content: '!p-0 flex flex-col gap-4' }">
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <div
              v-for="slot in timeSlots"
              :key="slot"
              class="flex cursor-pointer items-center gap-2"
              @click="selectedSlot = slot"
            >
              <RadioButton v-model="selectedSlot" :input-id="slot" name="slot" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="service-select" class="text-sm">Dienstleistung</label>
            <Select
              id="service-select"
              v-model="selectedService"
              :options="services"
              placeholder="Dienstleistung wählen"
              class="w-full"
            />
          </div>

          <SelectButton
            v-model="selectedService"
            :options="services"
            :allow-empty="false"
            class="w-full"
            :pt="{ pcButton: { root: 'flex-1' } }"
          />
        </template>
      </Card>
    </div>

    <Card :pt="{ body: '!p-6', content: '!p-0 flex flex-col gap-4' }">
      <template #title>Deine Daten</template>
      <template #content>
        <div class="flex gap-4">
          <div class="flex flex-1 flex-col gap-2">
            <label for="name-input" class="text-sm">Name</label>
            <InputText id="name-input" v-model="name" class="w-full" />
          </div>
          <div class="flex flex-1 flex-col gap-2">
            <label for="email-input" class="text-sm">E-Mail</label>
            <InputText id="email-input" v-model="email" type="email" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="notes-textarea" class="text-sm">Anmerkungen</label>
          <Textarea
            id="notes-textarea"
            v-model="notes"
            placeholder="Optionale Nachricht..."
            rows="4"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="sendReminder" input-id="reminder-checkbox" binary />
          <label for="reminder-checkbox">
            <p class="font-semibold">Erinnerung senden</p>
            <p class="text-xs text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </label>
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
    :pt="{ root: 'w-full max-w-md', content: 'flex flex-col !gap-2' }"
  >
    <div class="flex justify-between">
      <span class="text-sm">Datum:</span>
      <span class="text-sm font-semibold">{{ selectedDate }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-sm">Zeit:</span>
      <span class="text-sm font-semibold">{{ selectedSlot }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-sm">Dienstleistung:</span>
      <span class="text-sm font-semibold">{{ selectedService }}</span>
    </div>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="isConfirmDialogVisible = false" />
      <Button label="Bestätigen" severity="primary" @click="isConfirmDialogVisible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import DatePicker from 'primevue/datepicker'
  import RadioButton from 'primevue/radiobutton'
  import Select from 'primevue/select'
  import SelectButton from 'primevue/selectbutton'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'
  import Dialog from 'primevue/dialog'

  const selectedDate = ref(new Date(2026, 6, 15))
  const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
  const selectedSlot = ref(timeSlots[1])

  const services = ['Beratungsgespräch', 'Untersuchung']
  const selectedService = ref(services[1])

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const notes = ref('')
  const sendReminder = ref(true)

  const isConfirmDialogVisible = ref(false)
</script>