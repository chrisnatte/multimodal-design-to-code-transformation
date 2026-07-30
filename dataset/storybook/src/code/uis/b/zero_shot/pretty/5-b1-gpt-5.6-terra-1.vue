<template>
  <div class="min-h-screen bg-white px-6 py-[88px] text-surface-900">
    <div class="mx-auto w-full max-w-[833px]">
      <header class="mb-[52px] flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          rounded
          text
          aria-label="Schließen"
          class="!h-[50px] !w-[50px] !bg-surface-100 !text-3xl"
        />
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-[32px] font-bold leading-[39px]">Termin buchen</h1>
          <span class="text-base leading-[19px]">Buche einen Termin für dich bei uns.</span>
        </div>
      </header>

      <main class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card class="h-[386px] !rounded-xl !bg-surface-100 !shadow-none">
          <template #content>
            <div class="flex h-full flex-col gap-4 p-[17.5px]">
              <h2 class="m-0 text-[17.5px] font-medium leading-[21px]">Datum wählen</h2>
              <DatePicker
                v-model="appointmentDate"
                inline
                show-week
                class="w-full"
              />
            </div>
          </template>
        </Card>

        <Card class="h-[386px] !rounded-xl !bg-surface-100 !shadow-none">
          <template #content>
            <div class="flex h-full flex-col gap-4 p-[17.5px]">
              <h2 class="m-0 text-[17.5px] font-medium leading-[21px]">Zeitslot wählen</h2>

              <div class="flex flex-col gap-2">
                <div
                  v-for="slot in timeSlots"
                  :key="slot"
                  class="flex items-center gap-2"
                >
                  <RadioButton
                    v-model="selectedTime"
                    name="timeSlot"
                    :value="slot"
                    :input-id="`slot-${slot}`"
                  />
                  <label :for="`slot-${slot}`" class="text-sm">{{ slot }}</label>
                </div>
              </div>

              <div class="flex flex-col gap-0.5">
                <label for="service" class="text-sm">Dienstleistung</label>
                <Select
                  id="service"
                  v-model="selectedService"
                  :options="services"
                  class="w-full"
                />
                <Listbox
                  v-model="selectedService"
                  :options="services"
                  class="w-full !rounded-md !border-surface-200"
                />
              </div>
            </div>
          </template>
        </Card>

        <Card class="lg:col-span-2 !rounded-xl !bg-surface-100 !shadow-none">
          <template #content>
            <div class="flex flex-col gap-[7px] p-[17.5px]">
              <h2 class="m-0 text-[17.5px] font-medium leading-[21px]">Deine Daten</h2>

              <div class="grid grid-cols-1 gap-3 pt-[7px] md:grid-cols-2">
                <div class="flex flex-col gap-1.5">
                  <label for="name" class="text-sm">Name</label>
                  <InputText id="name" v-model="name" class="w-full" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="email" class="text-sm">E-Mail</label>
                  <InputText id="email" v-model="email" type="email" class="w-full" />
                </div>

                <div class="flex flex-col gap-3 md:col-span-2">
                  <label for="notes" class="text-sm">Anmerkungen</label>
                  <Textarea
                    id="notes"
                    v-model="notes"
                    placeholder="Optionale Nachricht..."
                    rows="4"
                    class="w-full resize-none"
                  />
                </div>

                <div class="flex items-center gap-3 px-1 md:col-span-2">
                  <ToggleSwitch v-model="sendReminder" input-id="reminder" />
                  <label for="reminder" class="flex flex-col">
                    <span class="text-sm font-semibold">Erinnerung senden</span>
                    <span class="text-[10px] font-light leading-3">
                      Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </main>

      <div class="mt-[75px] flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="resetBooking" />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </div>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      closable
      :draggable="false"
      class="w-[350px]"
      header="Buchung bestätigen"
    >
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedTime }}</span>
        </div>
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="confirmationVisible = false"
        />
        <Button label="Bestätigen" @click="confirmationVisible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
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

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
])

const services = ref([
  'Beratungsgespräch',
  'Untersuchung'
])

const resetBooking = () => {
  appointmentDate.value = new Date(2026, 6, 15)
  selectedTime.value = '11:00 - 12:30'
  selectedService.value = 'Untersuchung'
  name.value = 'Max Mustermann'
  email.value = 'max@example.com'
  notes.value = ''
  sendReminder.value = true
}
</script>