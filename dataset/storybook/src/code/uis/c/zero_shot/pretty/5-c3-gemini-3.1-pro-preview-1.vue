<template>
  <div class="min-h-screen bg-[#a3a3a3] flex items-center justify-center p-8 font-sans text-surface-900 relative">
    
    <!-- Main Form Container -->
    <div class="max-w-4xl w-full flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex items-center gap-4 mb-2">
        <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-[#b3b3b3] !text-surface-700 hover:!bg-[#c0c0c0] !w-12 !h-12" />
        <div>
          <h1 class="text-3xl font-bold m-0 text-surface-900">Termin buchen</h1>
          <p class="text-surface-600 m-0 mt-1 text-sm">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Date Panel -->
        <div class="bg-[#b3b3b3] rounded-xl p-6 shadow-sm">
          <h2 class="text-lg font-semibold mb-4 m-0 text-surface-800">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full !border-none !bg-transparent" />
        </div>

        <!-- Time & Service Panel -->
        <div class="bg-[#b3b3b3] rounded-xl p-6 shadow-sm flex flex-col gap-8">
          <div>
            <h2 class="text-lg font-semibold mb-4 m-0 text-surface-800">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-surface-700 cursor-pointer">{{ slot }}</label>
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm text-surface-600 mb-2">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Untersuchung" fluid class="!bg-surface-50" />
          </div>
        </div>
      </div>

      <!-- Data Panel -->
      <div class="bg-[#b3b3b3] rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <h2 class="text-lg font-semibold m-0 text-surface-800">Deine Daten</h2>
        
        <div>
          <label class="block text-sm text-surface-600 mb-2">Name</label>
          <InputText v-model="name" placeholder="Max Mustermann" fluid class="!bg-surface-50" />
        </div>
        
        <div>
          <label class="block text-sm text-surface-600 mb-2">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" fluid class="!bg-surface-50" />
        </div>
        
        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div>
            <div class="font-semibold text-surface-800 text-sm">Erinnerung senden</div>
            <div class="text-xs text-surface-600 mt-1">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-2">
        <Button label="Abbrechen" severity="secondary" text class="!bg-[#9ca3af] hover:!bg-[#8b929e] !text-surface-800 font-medium px-6 py-2 rounded-md" />
        <Button label="Buchen" @click="showConfirmDialog = true" class="!bg-[#059669] hover:!bg-[#047857] !border-none font-medium px-6 py-2 rounded-md" />
      </div>
    </div>

    <!-- Confirm Dialog Overlay -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true" class="!rounded-xl">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-medium text-surface-900 text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit</span>
          <span class="font-medium text-surface-900 text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung</span>
          <span class="font-medium text-surface-900 text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button label="Abbrechen" text severity="secondary" @click="showConfirmDialog = false" class="!bg-surface-100 hover:!bg-surface-200 !text-surface-700 font-medium px-4 py-2 rounded-md" />
          <Button label="Bestätigen" @click="showConfirmDialog = false" class="!bg-[#059669] hover:!bg-[#047857] !border-none font-medium px-4 py-2 rounded-md" />
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

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026 based on mockup
const selectedTime = ref('11:00 - 12:30');
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]);

const selectedService = ref({ label: 'Untersuchung', value: 'untersuchung' });
const services = ref([
  { label: 'Beratungsgespräch', value: 'beratung' },
  { label: 'Untersuchung', value: 'untersuchung' }
]);

const name = ref('');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmDialog = ref(true); // Set to true to match the screenshot state
</script>