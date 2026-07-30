<template>
  <main class="mx-auto w-full max-w-[600px] px-6 py-6">
    <header class="mb-8 flex items-start gap-3">
      <Button
        icon="pi pi-times"
        severity="secondary"
        variant="text"
        rounded
        aria-label="Schließen"
        class="!h-8 !w-8"
      />
      <div>
        <h1 class="text-2xl font-bold leading-tight">Termin buchen</h1>
        <p class="mt-1 text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="mb-3 grid grid-cols-2 gap-3">
      <Card>
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-semibold">Datum wählen</h2>
            <DatePicker v-model="appointmentDate" inline />
          </div>
        </template>
      </Card>

      <Card>
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="font-semibold">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton
                  v-model="selectedTime"
                  name="time-slot"
                  :input-id="`slot-${slot}`"
                  :value="slot"
                />
                <label :for="`slot-${slot}`" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                placeholder="Dienstleistung auswählen"
                fluid
              />
            </div>
          </div>
        </template>
      </Card>
    </section>

    <Card>
      <template #content>
        <div class="flex flex-col gap-3">
          <h2 class="font-semibold">Deine Daten</h2>

          <div class="flex flex-col gap-1">
            <label for="name" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name" fluid />
          </div>

          <div class="flex flex-col gap-1">
            <label for="notes" class="text-sm">Anmerkungen</label>
            <Textarea
              v-model="notes"
              input-id="notes"
              placeholder="Optionale Nachricht..."
              rows="3"
              fluid
              class="resize-none"
            />
          </div>

          <div class="flex items-center gap-2">
            <ToggleSwitch v-model="sendReminder" input-id="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-medium">Erinnerung senden</label>
              <span class="text-xs text-surface-500">
                Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="mt-10 flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" variant="text" />
      <Button label="Buchen" severity="success" @click="confirmationVisible = true" />
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      header="Buchung bestätigen"
      :draggable="false"
      :style="{ width: '250px' }"
      :pt="{
        header: 'px-4 pt-4 pb-2',
        title: 'text-sm font-semibold',
        content: 'px-4 py-2',
        footer: 'px-4 pt-1 pb-3',
        mask: 'bg-black/40',
      }"
    >
      <div class="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2 text-xs">
        <span class="text-surface-600">Datum:</span>
        <strong>15. Juni 2029</strong>
        <span class="text-surface-600">Zeit</span>
        <strong>{{ selectedTime }}</strong>
        <span class="text-surface-600">Dienstleistung</span>
        <strong>{{ selectedService }}</strong>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            variant="text"
            size="small"
            @click="confirmationVisible = false"
          />
          <Button
            label="Bestätigen"
            severity="success"
            size="small"
            @click="confirmationVisible = false"
          />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30',
])

const services = ref(['Beratungsgespräch', 'Untersuchung'])
</script>