<template>
  <main class="min-h-screen bg-white px-6 py-7">
    <div class="mx-auto flex w-full max-w-[833px] flex-col gap-13">
      <header class="flex items-center gap-4">
        <Avatar icon="pi pi-calendar" size="xlarge" shape="circle" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section class="flex min-h-[386px] flex-col gap-4 rounded-xl bg-slate-100 p-[17.5px]">
          <h2 class="text-lg font-medium">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </section>

        <section class="flex min-h-[386px] flex-col gap-4 rounded-xl bg-slate-100 p-[17.5px]">
          <h2 class="text-lg font-medium">Zeitslot wählen</h2>

          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :input-id="slot" name="time-slot" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-2 flex flex-col gap-2">
            <label for="service" class="text-sm">Dienstleistung</label>
            <Select
              v-model="selectedService"
              input-id="service"
              :options="services"
              class="w-full"
            />
          </div>
        </section>
      </div>

      <section class="flex flex-col gap-4 rounded-xl bg-slate-100 p-[17.5px]">
        <h2 class="text-lg font-medium">Deine Daten</h2>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText v-model="name" input-id="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText v-model="email" input-id="email" type="email" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea
            v-model="notes"
            input-id="notes"
            placeholder="Optionale Nachricht..."
            rows="4"
            class="w-full"
          />
        </div>

        <div class="flex items-start gap-3">
          <Checkbox v-model="sendReminder" input-id="reminder" binary />
          <div class="flex flex-col">
            <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
            <span class="text-[10px]">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </div>
        </div>
      </section>

      <footer class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="resetBooking" />
        <Button label="Buchen" severity="success" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      class="w-full max-w-[350px]"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-lg font-semibold">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Dialog schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-4 pt-1 text-sm">
        <div class="flex justify-between gap-4">
          <span>Datum:</span>
          <strong>{{ formattedDate }}</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Zeit</span>
          <strong>{{ selectedSlot }}</strong>
        </div>
        <div class="flex justify-between gap-4">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="confirmationVisible = false"
        />
        <Button label="Bestätigen" severity="success" @click="confirmationVisible = false" />
      </template>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

const selectedDate = ref<Date | null>(new Date(2026, 6, 15))
const selectedSlot = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''

  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(selectedDate.value)
})

function resetBooking() {
  selectedDate.value = new Date(2026, 6, 15)
  selectedSlot.value = '11:00 - 12:30'
  selectedService.value = 'Untersuchung'
  name.value = 'Max Mustermann'
  email.value = 'max@example.com'
  notes.value = ''
  sendReminder.value = true
}
</script>