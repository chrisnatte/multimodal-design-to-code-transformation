<template>
  <main class="relative min-h-screen bg-white px-6 py-[88px]">
    <div class="mx-auto flex w-full max-w-[833px] flex-col gap-[52px]">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          rounded
          aria-label="Schließen"
          class="!h-[50px] !w-[50px]"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Termin buchen</h1>
          <p class="text-base">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card
          class="h-[386px] bg-surface-100"
          :pt="{ body: '!p-0', content: '!p-0' }"
        >
          <template #content>
            <section class="flex h-full flex-col gap-4 p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Datum wählen</h2>
              <DatePicker
                v-model="selectedDate"
                inline
                show-week
                class="w-fit"
              />
            </section>
          </template>
        </Card>

        <Card
          class="h-[386px] bg-surface-100"
          :pt="{ body: '!p-0', content: '!p-0' }"
        >
          <template #content>
            <section class="flex flex-col gap-4 p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Zeitslot wählen</h2>

              <div class="flex flex-col gap-2">
                <div
                  v-for="slot in timeSlots"
                  :key="slot"
                  class="flex items-center gap-2"
                >
                  <RadioButton
                    v-model="selectedTimeSlot"
                    :input-id="`time-${slot}`"
                    name="time-slot"
                    :value="slot"
                  />
                  <label :for="`time-${slot}`" class="text-sm">{{ slot }}</label>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label for="service" class="text-sm">Dienstleistung</label>
                <Select
                  v-model="selectedService"
                  input-id="service"
                  :options="services"
                  option-label="label"
                  class="w-full"
                />
              </div>
            </section>
          </template>
        </Card>

        <Card
          class="bg-surface-100 lg:col-span-2"
          :pt="{ body: '!p-0', content: '!p-0' }"
        >
          <template #content>
            <section class="flex flex-col gap-[7px] p-[17.5px]">
              <h2 class="text-[17.5px] font-medium">Deine Daten</h2>

              <div class="grid grid-cols-1 gap-3 pt-[7px] md:grid-cols-2">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm">Name</label>
                  <InputText v-model="name" input-id="name" fluid />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm">E-Mail</label>
                  <InputText v-model="email" input-id="email" type="email" fluid />
                </div>

                <div class="flex flex-col gap-3 md:col-span-2">
                  <label for="notes" class="text-sm">Anmerkungen</label>
                  <Textarea
                    v-model="notes"
                    input-id="notes"
                    placeholder="Optionale Nachricht..."
                    rows="4"
                    fluid
                  />
                </div>

                <div class="flex items-center gap-3 px-1">
                  <ToggleSwitch v-model="sendReminder" input-id="send-reminder" />
                  <div class="flex flex-col">
                    <label for="send-reminder" class="text-sm font-semibold">
                      Erinnerung senden
                    </label>
                    <span class="text-[10px] font-light">
                      Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </template>
        </Card>
      </div>

      <footer class="flex items-center justify-end gap-3">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="confirmationVisible = false"
        />
        <Button label="Buchen" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="false"
      :draggable="false"
      class="w-full max-w-[350px]"
      :pt="{
        header: '!px-[17.5px] !py-[17.5px]',
        content: '!px-[17.5px] !pb-[17.5px]',
        footer: '!px-[17.5px] !pb-[17.5px]',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <span class="text-[17.5px] font-semibold">Buchung bestätigen</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            variant="text"
            aria-label="Dialog schließen"
            @click="confirmationVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Zeit</span>
          <strong>{{ selectedTimeSlot }}</strong>
        </div>
        <div class="flex items-center justify-between gap-2 text-sm">
          <span>Dienstleistung</span>
          <strong>{{ selectedService.label }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-[7px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="confirmationVisible = false"
          />
          <Button label="Bestätigen" @click="confirmationVisible = false" />
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

const confirmationVisible = ref(true)
const selectedDate = ref(new Date(2026, 6, 15))
const selectedTimeSlot = ref('11:00 - 12:30')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const services = ref([
  { label: 'Beratungsgespräch' },
  { label: 'Untersuchung' },
])

const selectedService = ref(services.value[1])

const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30',
])
</script>