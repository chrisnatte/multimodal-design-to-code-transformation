<template>
  <div class="p-6 bg-white min-h-screen relative">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center">
        <i class="pi pi-calendar text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base text-gray-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main grid -->
    <div class="flex flex-col gap-4 max-w-[833px]">
      <div class="flex gap-4">
        <!-- Date picker card -->
        <div class="flex-1 bg-slate-100 rounded-xl p-4">
          <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
          <Calendar v-model="selectedDate" inline class="w-full" />
        </div>

        <!-- Timeslot card -->
        <div class="flex-1 bg-slate-100 rounded-xl p-4">
          <h2 class="text-lg font-medium mb-4">Zeitslot wählen</h2>

          <div class="flex flex-col gap-2 mb-4">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :inputId="slot" name="timeslot" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>
          </div>

          <div class="bg-white rounded-md p-3">
            <label class="text-sm block mb-2">Dienstleistung</label>
            <Dropdown
              v-model="selectedService"
              :options="services"
              placeholder="Untersuchung"
              class="w-full mb-3"
            />

            <div class="flex flex-col gap-1">
              <div
                v-for="service in services"
                :key="service"
                class="px-3 py-2 rounded text-sm"
                :class="selectedService === service ? 'bg-slate-100' : ''"
                @click="selectedService = service"
              >
                {{ service }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal data card -->
      <div class="bg-slate-100 rounded-xl p-4">
        <h2 class="text-lg font-medium mb-4">Deine Daten</h2>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="text-sm block mb-2">Name</label>
            <InputText v-model="name" placeholder="Max Mustermann" class="w-full" />
          </div>
          <div>
            <label class="text-sm block mb-2">E-Mail</label>
            <InputText v-model="email" placeholder="max@example.com" class="w-full" />
          </div>
        </div>

        <div class="mb-4">
          <label class="text-sm block mb-2">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full" />
        </div>

        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminderEnabled" />
          <div>
            <p class="text-sm font-semibold">Erinnerung senden</p>
            <p class="text-xs text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </div>

      <!-- Footer buttons -->
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Buchen" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      modal
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-2 text-sm">
        <div class="flex justify-between">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2026</span>
        </div>
        <div class="flex justify-between">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedTimeSlot }}</span>
        </div>
        <div class="flex justify-between">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" @click="onConfirmBooking" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const selectedTimeSlot = ref('11:00 - 12:30')

const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminderEnabled = ref(true)

const showConfirmDialog = ref(false)

function onCancel() {
  // Placeholder cancel handler
}

function onConfirmBooking() {
  showConfirmDialog.value = false
}
</script>