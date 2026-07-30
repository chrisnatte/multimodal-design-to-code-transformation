<template>
  <div class="min-h-screen bg-[#a3a3a3] p-8 flex justify-center font-sans text-gray-800 relative">
    
    <!-- Main Form Container (Simulating the background behind the overlay) -->
    <div class="max-w-4xl w-full flex flex-col gap-6 opacity-50 pointer-events-none">
      
      <!-- Header -->
      <div class="flex items-center gap-4 mb-2">
        <Button icon="pi pi-times" rounded text class="!text-gray-600 !bg-gray-300 hover:!bg-gray-400 !w-12 !h-12" />
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Termin buchen</h1>
          <p class="text-gray-600 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Top Row: Date and Time -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Date Picker Card -->
        <div class="bg-[#b5b5b5] p-6 rounded-2xl shadow-sm">
          <h2 class="text-lg font-semibold mb-4 text-gray-800">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full border-none bg-transparent" />
        </div>

        <!-- Time Slot Card -->
        <div class="bg-[#b5b5b5] p-6 rounded-2xl shadow-sm flex flex-col gap-6">
          <div>
            <h2 class="text-lg font-semibold mb-4 text-gray-800">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-gray-700 cursor-pointer">{{ slot }}</label>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-2">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="name" placeholder="Select" class="w-full bg-transparent border-gray-400" />
          </div>
        </div>
      </div>

      <!-- User Data Card -->
      <div class="bg-[#b5b5b5] p-6 rounded-2xl shadow-sm flex flex-col gap-5">
        <h2 class="text-lg font-semibold text-gray-800">Deine Daten</h2>
        
        <div>
          <label class="block text-sm text-gray-600 mb-2">Name</label>
          <InputText v-model="name" placeholder="Max Mustermann" class="w-full bg-transparent border-gray-400" />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-2">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full bg-transparent border-gray-400 resize-none" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" class="!bg-[#00a676]" />
          <div>
            <div class="font-medium text-gray-800">Erinnerung senden</div>
            <div class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" text class="!text-gray-700 hover:!bg-gray-300" />
        <Button label="Buchen" class="!bg-[#00a676] !border-[#00a676] hover:!bg-[#008f66]" />
      </div>

    </div>

    <!-- Confirmation Dialog Overlay -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true" class="bg-white rounded-xl shadow-2xl">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Datum:</span>
          <span class="font-medium text-gray-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Zeit:</span>
          <span class="font-medium text-gray-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Dienstleistung:</span>
          <span class="font-medium text-gray-900">Untersuchung</span>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-end gap-3 pt-4">
          <Button label="Abbrechen" text class="!text-gray-600 hover:!bg-gray-100 !bg-gray-100" @click="showDialog = false" />
          <Button label="Bestätigen" class="!bg-[#00a676] !border-[#00a676] hover:!bg-[#008f66]" @click="showDialog = false" />
        </div>
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

// Form State
const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTime = ref('11:00 - 12:30');
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]);

const services = ref([
  { name: 'Beratungsgespräch', code: 'BG' },
  { name: 'Untersuchung', code: 'US' }
]);
const selectedService = ref({ name: 'Untersuchung', code: 'US' });

const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

// Dialog State
const showDialog = ref(true);
</script>