<template>
  <div class="p-6 bg-white">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="w-[50px] h-[50px] rounded-full bg-[#f1f5f9] flex items-center justify-center">
        <i class="pi pi-calendar text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <p class="text-base text-gray-500 m-0">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 max-w-[833px]">
      <!-- Date & Timeslot Row -->
      <div class="flex gap-4">
        <!-- Date Picker Card -->
        <div class="flex-1 bg-[#f1f5f9] rounded-xl p-4">
          <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
          <Calendar v-model="selectedDate" inline class="w-full" />
        </div>

        <!-- Timeslot Card -->
        <div class="flex-1 bg-[#f1f5f9] rounded-xl p-4">
          <h2 class="text-lg font-medium mb-4">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3 mb-4">
            <div
              v-for="slot in timeSlots"
              :key="slot"
              class="flex items-center gap-2 cursor-pointer"
              @click="selectedTimeSlot = slot"
            >
              <RadioButton v-model="selectedTimeSlot" :inputId="slot" name="timeslot" :value="slot" />
              <label :for="slot" class="text-sm">{{ slot }}</label>
            </div>
          </div>

          <div class="bg-white rounded p-3">
            <label class="block text-sm mb-2">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Untersuchung"
              class="w-full mb-3"
            />
            <div class="flex flex-col gap-1">
              <div
                v-for="service in services"
                :key="service"
                class="px-3 py-2 rounded text-sm cursor-pointer"
                :class="selectedService === service ? 'bg-[#f1f5f9]' : ''"
                @click="selectedService = service"
              >
                {{ service }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Card -->
      <div class="bg-[#f1f5f9] rounded-xl p-4">
        <h2 class="text-lg font-medium mb-4">Deine Daten</h2>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm mb-2">Name</label>
            <InputText v-model="name" class="w-full" placeholder="Max Mustermann" />
          </div>
          <div>
            <label class="block text-sm mb-2">E-Mail</label>
            <InputText v-model="email" class="w-full" placeholder="max@example.com" />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2">Anmerkungen</label>
          <Textarea v-model="notes" class="w-full" rows="4" placeholder="Optionale Nachricht..." />
        </div>

        <div class="flex items-start gap-2">
          <Checkbox v-model="reminder" :binary="true" inputId="reminder" />
          <div>
            <label for="reminder" class="block text-sm font-semibold">Erinnerung senden</label>
            <p class="text-xs text-gray-500 m-0">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" outlined @click="onCancel" />
        <Button label="Buchen" @click="openConfirmDialog" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="confirmDialogVisible"
      modal
      :closable="true"
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-between text-sm">
          <span>Datum:</span>
          <span class="font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Zeit:</span>
          <span class="font-semibold">{{ selectedTimeSlot }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Dienstleistung:</span>
          <span class="font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" outlined @click="confirmDialogVisible = false" />
        <Button label="Bestätigen" @click="onConfirmBooking" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
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
const reminder = ref(true)

const confirmDialogVisible = ref(false)

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

function openConfirmDialog() {
  confirmDialogVisible.value = true
}

function onConfirmBooking() {
  confirmDialogVisible.value = false
  // Booking confirmed logic here
}

function onCancel() {
  // Cancel logic here
}
</script>