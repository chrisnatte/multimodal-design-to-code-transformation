<template>
  <main class="mx-auto flex min-h-screen w-full max-w-[920px] flex-col py-[88px]">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        variant="text"
        rounded
        aria-label="Terminbuchung schließen"
        class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-700"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-tight text-slate-800">Termin buchen</h1>
        <p class="text-base text-slate-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </header>

    <section class="mt-[52px] grid grid-cols-2 gap-4">
      <Card
        class="h-[386px] !rounded-xl !bg-slate-100"
        :pt="{ body: 'h-full !p-[17.5px]', content: 'h-full !p-0' }"
      >
        <template #content>
          <div class="flex h-full flex-col gap-4">
            <h2 class="text-[17.5px] font-medium text-slate-800">Datum wählen</h2>
            <DatePicker
              v-model="appointmentDate"
              inline
              show-week
              :manual-input="false"
              class="w-[292px]"
            />
          </div>
        </template>
      </Card>

      <Card
        class="h-[386px] !rounded-xl !bg-slate-100"
        :pt="{ body: 'h-full !p-[17.5px]', content: 'h-full !p-0' }"
      >
        <template #content>
          <div class="flex flex-col gap-4">
            <h2 class="text-[17.5px] font-medium text-slate-800">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton
                  v-model="selectedTime"
                  :input-id="`slot-${slot}`"
                  name="time-slot"
                  :value="slot"
                />
                <label :for="`slot-${slot}`" class="text-sm text-slate-700">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm text-slate-700">Dienstleistung</label>
              <Select
                v-model="selectedService"
                input-id="service"
                :options="services"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card
        class="col-span-2 !rounded-xl !bg-slate-100"
        :pt="{ body: '!p-[17.5px]', content: '!p-0' }"
      >
        <template #content>
          <div class="flex flex-col gap-3">
            <h2 class="text-[17.5px] font-medium text-slate-800">Deine Daten</h2>

            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm text-slate-700">Name</label>
                <InputText v-model="name" input-id="name" fluid />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm text-slate-700">E-Mail</label>
                <InputText v-model="email" input-id="email" type="email" fluid />
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <label for="notes" class="text-sm text-slate-700">Anmerkungen</label>
              <Textarea
                v-model="notes"
                input-id="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                fluid
                class="resize-none"
              />
            </div>

            <div class="flex items-center gap-3 px-1">
              <ToggleSwitch v-model="sendReminder" input-id="reminder" />
              <label for="reminder" class="flex flex-col">
                <span class="text-sm font-semibold text-slate-800">Erinnerung senden</span>
                <span class="text-[10px] font-light text-slate-600">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </label>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <footer class="mt-4 flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="bookingConfirmationVisible = false" />
      <Button label="Buchen" @click="bookingConfirmationVisible = true" />
    </footer>

    <Dialog
      v-model:visible="bookingConfirmationVisible"
      modal
      :draggable="false"
      :style="{ width: '350px' }"
      :close-button-props="{ 'aria-label': 'Schließen' }"
      :pt="{
        root: '!rounded-xl',
        header: '!px-[17.5px] !py-[17.5px]',
        title: '!text-[17.5px] !font-semibold',
        content: '!px-[17.5px] !pb-[17.5px]',
        footer: '!px-[17.5px] !pb-[17.5px] !pt-0',
        mask: '!bg-black/40',
      }"
    >
      <template #header>
        <span class="text-[17.5px] font-semibold text-slate-700">Buchung bestätigen</span>
      </template>

      <div class="flex flex-col gap-2">
        <div class="flex justify-between gap-2 text-sm">
          <span class="text-slate-600">Datum:</span>
          <strong class="font-semibold text-slate-700">15. Juni 2029</strong>
        </div>
        <div class="flex justify-between gap-2 text-sm">
          <span class="text-slate-600">Zeit</span>
          <strong class="font-semibold text-slate-700">{{ selectedTime }}</strong>
        </div>
        <div class="flex justify-between gap-2 text-sm">
          <span class="text-slate-600">Dienstleistung</span>
          <strong class="font-semibold text-slate-700">{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            size="small"
            @click="bookingConfirmationVisible = false"
          />
          <Button
            label="Bestätigen"
            size="small"
            @click="bookingConfirmationVisible = false"
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
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const bookingConfirmationVisible = ref(true)

const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30',
])

const services = ref(['Beratungsgespräch', 'Untersuchung'])
</script>