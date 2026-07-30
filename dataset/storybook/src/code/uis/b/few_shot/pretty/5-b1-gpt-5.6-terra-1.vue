<template>
  <main class="min-h-screen bg-white px-6 py-7">
    <div class="mx-auto flex w-full max-w-[833px] flex-col">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          text
          rounded
          aria-label="Schließen"
          class="!h-[50px] !w-[50px] !bg-slate-100"
          @click="cancelBooking"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card class="!rounded-xl !bg-slate-100 !shadow-none">
          <template #content>
            <div class="flex h-[350px] flex-col gap-4">
              <h2 class="text-lg font-medium">Datum wählen</h2>
              <DatePicker v-model="selectedDate" inline show-week class="w-full" />
            </div>
          </template>
        </Card>

        <Card class="!rounded-xl !bg-slate-100 !shadow-none">
          <template #content>
            <div class="flex min-h-[350px] flex-col gap-4">
              <h2 class="text-lg font-medium">Zeitslot wählen</h2>

              <div class="flex flex-col gap-2">
                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                  <RadioButton v-model="selectedTime" :input-id="`slot-${slot}`" name="time-slot" :value="slot" />
                  <label :for="`slot-${slot}`" class="text-sm">{{ slot }}</label>
                </div>
              </div>

              <div class="flex flex-col gap-0.5">
                <label for="service" class="text-sm">Dienstleistung</label>
                <Select
                  v-model="selectedService"
                  input-id="service"
                  :options="services"
                  class="w-full"
                />
                <Listbox
                  v-model="selectedService"
                  :options="services"
                  class="w-full"
                  list-style="max-height: 71px"
                />
              </div>
            </div>
          </template>
        </Card>

        <Card class="!col-span-1 !rounded-xl !bg-slate-100 !shadow-none md:col-span-2">
          <template #content>
            <div class="flex flex-col gap-3">
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

              <div class="flex flex-col gap-3">
                <label for="notes" class="text-sm">Anmerkungen</label>
                <Textarea
                  v-model="notes"
                  input-id="notes"
                  placeholder="Optionale Nachricht..."
                  rows="4"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-3 px-1">
                <ToggleSwitch v-model="sendReminder" input-id="reminder" />
                <div class="flex flex-col">
                  <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
                  <span class="text-[10px]">
                    Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                  </span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </section>

      <div class="mt-3 flex items-center justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="cancelBooking" />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </div>
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
            aria-label="Dialog schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2">
          <span class="text-sm">Datum:</span>
          <strong class="text-sm">15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-sm">Zeit</span>
          <strong class="text-sm">{{ selectedTime }}</strong>
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-sm">Dienstleistung</span>
          <strong class="text-sm">{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Bestätigen" @click="confirmationVisible = false" />
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
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const services = ref(['Beratungsgespräch', 'Untersuchung'])

function cancelBooking() {
  confirmationVisible.value = false
}
</script>