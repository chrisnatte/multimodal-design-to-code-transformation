<template>
  <div class="min-h-screen bg-[#a8a8a8] flex items-center justify-center p-4 font-sans text-surface-900">
    <div class="max-w-4xl w-full flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex items-center gap-4 mb-2">
        <Button icon="pi pi-times" rounded text class="bg-surface-200 hover:bg-surface-300 text-surface-700 w-12 h-12" />
        <div>
          <h1 class="text-3xl font-semibold m-0">Termin buchen</h1>
          <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Datum wählen Card -->
        <div class="bg-[#b8b8b8] rounded-2xl p-6">
          <h2 class="text-lg font-medium mb-4 m-0">Datum wählen</h2>
          <Calendar v-model="selectedDate" inline class="w-full bg-transparent border-none" />
        </div>

        <!-- Zeitslot wählen Card -->
        <div class="bg-[#b8b8b8] rounded-2xl p-6 flex flex-col gap-6">
          <div>
            <h2 class="text-lg font-medium mb-4 m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTimeSlot" :inputId="slot" :name="slot" :value="slot" />
                <label :for="slot" class="text-sm cursor-pointer">{{ slot }}</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="name" placeholder="Select a service" class="w-full bg-surface-0/50" />
          </div>
        </div>
      </div>

      <!-- Deine Daten Card -->
      <div class="bg-[#b8b8b8] rounded-2xl p-6 flex flex-col gap-6">
        <h2 class="text-lg font-medium m-0">Deine Daten</h2>
        
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-700">Name</label>
          <InputText v-model="name" class="w-full bg-surface-0/50" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-700">Anmerkungen</label>
          <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full bg-surface-0/50 resize-none" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div>
            <div class="font-medium text-sm">Erinnerung senden</div>
            <div class="text-xs text-surface-600">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" text class="text-surface-700 hover:bg-surface-300" />
        <Button label="Buchen" class="bg-[#00a676] border-none hover:bg-[#008f65]" @click="showDialog = true" />
      </div>

    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-medium text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit</span>
          <span class="font-medium text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung</span>
          <span class="font-medium text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 w-full">
          <Button label="Abbrechen" text class="text-surface-700 bg-surface-100 hover:bg-surface-200" @click="showDialog = false" />
          <Button label="Bestätigen" class="bg-[#00a676] border-none hover:bg-[#008f65]" @click="showDialog = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from 'primevue/dialog';

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTimeSlot = ref('11:00 - 12:30');
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]);

const services = ref([
  { name: 'Beratungsgespräch', code: 'BG' },
  { name: 'Untersuchung', code: 'UN' }
]);
const selectedService = ref(services.value[1]);

const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

const showDialog = ref(true);
</script>