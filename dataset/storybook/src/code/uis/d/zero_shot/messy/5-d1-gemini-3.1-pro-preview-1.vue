<template>
  <div class="min-h-screen bg-white p-8 flex justify-center font-sans text-surface-900">
    <div class="max-w-5xl w-full flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded text severity="secondary" class="bg-slate-100 hover:bg-slate-200 w-12 h-12" />
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
          <p class="text-surface-500 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Left Column -->
        <div class="flex flex-col gap-6">
          <!-- Datum wählen -->
          <div class="bg-slate-100 rounded-xl p-6 flex flex-col gap-4">
            <h2 class="text-lg font-medium m-0">Datum wählen</h2>
            <DatePicker v-model="selectedDate" inline class="w-full border-surface-200 rounded-md" />
          </div>

          <!-- Deine Daten -->
          <div class="bg-slate-100 rounded-xl p-6 flex flex-col gap-4">
            <h2 class="text-lg font-medium m-0">Deine Daten</h2>
            
            <div class="flex flex-col gap-1">
              <label for="name" class="text-sm text-surface-700">Name</label>
              <InputText id="name" v-model="name" placeholder="Max Mustermann" class="w-full" />
            </div>

            <div class="flex flex-col gap-1 mt-2">
              <label for="notes" class="text-sm text-surface-700">Anmerkungen</label>
              <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="w-full resize-none" />
            </div>

            <div class="flex items-center gap-4 mt-4">
              <ToggleSwitch v-model="sendReminder" />
              <div class="flex flex-col">
                <span class="font-semibold text-sm">Erinnerung senden</span>
                <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-6">
          <!-- Zeitslot wählen -->
          <div class="bg-slate-100 rounded-xl p-6 flex flex-col gap-6 h-full">
            <div class="flex flex-col gap-4">
              <h2 class="text-lg font-medium m-0">Zeitslot wählen</h2>
              <div class="flex flex-col gap-3">
                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-3">
                  <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                  <label :for="slot" class="text-sm cursor-pointer">{{ slot }}</label>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <label class="text-sm text-surface-700">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" optionLabel="name" placeholder="Untersuchung" class="w-full" />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="flex justify-end gap-4 mt-2">
        <Button label="Abbrechen" severity="secondary" text class="bg-slate-200 hover:bg-slate-300 px-6" />
        <Button label="Buchen" severity="success" class="px-6 bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '26rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit:</span>
          <span class="font-semibold text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung:</span>
          <span class="font-semibold text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 hover:bg-slate-200" @click="showConfirmDialog = false" />
          <Button label="Bestätigen" severity="success" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" @click="showConfirmDialog = false" />
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
const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
];
const selectedTime = ref('11:00 - 12:30');

const services = [
  { name: 'Untersuchung', code: 'untersuchung' },
  { name: 'Beratungsgespräch', code: 'beratung' }
];
const selectedService = ref(services[0]);

const showConfirmDialog = ref(true);
</script>