<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8 w-full max-w-4xl">
      <div class="w-12 h-12 rounded-full bg-surface-100 flex items-center justify-center cursor-pointer hover:bg-surface-200 transition-colors">
        <i class="pi pi-times text-surface-600 text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold text-surface-900 m-0">Termin buchen</h1>
        <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-4xl flex flex-col gap-6">
      <!-- Top Row: Date & Time/Service -->
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Date Picker Card -->
        <div class="flex-1 bg-surface-100 p-6 rounded-xl">
          <h2 class="text-lg font-medium text-surface-900 mb-4 m-0">Datum wählen</h2>
          <div class="bg-white p-2 rounded-lg border border-surface-200">
            <DatePicker v-model="date" inline class="w-full border-none" />
          </div>
        </div>

        <!-- Time & Service Card -->
        <div class="flex-1 bg-surface-100 p-6 rounded-xl flex flex-col gap-6">
          <div>
            <h2 class="text-lg font-medium text-surface-900 mb-4 m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-surface-700 text-sm">{{ slot }}</label>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-sm font-medium text-surface-700 mb-2 m-0">Dienstleistung</h2>
            <Select v-model="service" :options="services" class="w-full" placeholder="Untersuchung" />
          </div>
        </div>
      </div>

      <!-- Form Card -->
      <div class="bg-surface-100 p-6 rounded-xl flex flex-col gap-6">
        <h2 class="text-lg font-medium text-surface-900 m-0">Deine Daten</h2>
        
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 flex flex-col gap-2">
            <label for="name" class="text-sm text-surface-700">Name</label>
            <InputText id="name" v-model="name" placeholder="Max Mustermann" />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-700">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="max@example.com" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm text-surface-700">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full resize-none" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" inputId="reminder" />
          <div>
            <label for="reminder" class="text-sm font-semibold text-surface-900 block">Erinnerung senden</label>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" class="!bg-surface-200 !text-surface-800 !border-none hover:!bg-surface-300 font-medium px-6 py-2 rounded-md" />
        <Button label="Buchen" class="!bg-[#10B981] hover:!bg-[#059669] !border-none text-white font-medium px-6 py-2 rounded-md" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-semibold text-surface-900 text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit</span>
          <span class="font-semibold text-surface-900 text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung</span>
          <span class="font-semibold text-surface-900 text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" class="!bg-surface-100 !text-surface-800 !border-none hover:!bg-surface-200 font-medium" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" class="!bg-[#10B981] hover:!bg-[#059669] !border-none text-white font-medium" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from 'primevue/dialog';

const date = ref(new Date(2026, 6, 15)); // July 15, 2026
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]);
const timeSlot = ref('11:00 - 12:30');

const services = ref(['Untersuchung', 'Beratungsgespräch']);
const service = ref('Untersuchung');

const name = ref('');
const email = ref('');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmDialog = ref(true);
</script>