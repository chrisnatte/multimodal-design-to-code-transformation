<template>
  <div class="min-h-screen bg-white p-8 font-sans text-surface-900">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
      <Button icon="pi pi-times" rounded text severity="secondary" class="bg-slate-100 w-12 h-12 text-surface-600 hover:bg-slate-200" />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold m-0 text-surface-900">Termin buchen</h1>
        <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
      <!-- Card 1: Datum -->
      <div class="bg-slate-100 rounded-xl p-4 flex flex-col gap-4">
        <h2 class="text-lg font-medium m-0 text-surface-900">Datum wählen</h2>
        <div class="bg-white rounded-lg overflow-hidden">
          <DatePicker v-model="selectedDate" inline class="w-full border-none" />
        </div>
      </div>

      <!-- Card 2: Zeitslot & Dienstleistung -->
      <div class="bg-slate-100 rounded-xl p-4 flex flex-col gap-4">
        <h2 class="text-lg font-medium m-0 text-surface-900">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedTimeSlot" :inputId="slot" :value="slot" />
            <label :for="slot" class="text-sm text-surface-700 cursor-pointer">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-2">
          <label class="text-sm text-surface-700">Dienstleistung</label>
          <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Dienstleistung wählen" class="w-full" />
        </div>
      </div>

      <!-- Card 3: Deine Daten -->
      <div class="bg-slate-100 rounded-xl p-4 flex flex-col gap-4 md:col-span-2">
        <h2 class="text-lg font-medium m-0 text-surface-900">Deine Daten</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">Name</label>
            <InputText v-model="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">E-Mail</label>
            <InputText v-model="email" placeholder="E-Mail eingeben" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-700">Anmerkungen</label>
          <Textarea v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="resize-none" />
        </div>
        <div class="flex items-center gap-3 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold text-surface-900">Erinnerung senden</span>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-end gap-3 max-w-4xl mx-auto">
      <Button label="Abbrechen" severity="secondary" class="bg-slate-100 border-none text-surface-900 hover:bg-slate-200" />
      <Button label="Buchen" @click="showDialog = true" />
    </div>

    <!-- Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '350px' }" :closable="true" class="p-fluid">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-600">Datum:</span>
          <span class="text-sm font-semibold text-surface-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-600">Zeit</span>
          <span class="text-sm font-semibold text-surface-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-600">Dienstleistung</span>
          <span class="text-sm font-semibold text-surface-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 w-full mt-4">
          <Button label="Abbrechen" severity="secondary" text @click="showDialog = false" class="bg-slate-100 text-surface-900 hover:bg-slate-200 px-4 py-2" />
          <Button label="Bestätigen" @click="showDialog = false" class="px-4 py-2" />
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

const showDialog = ref(true);

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026 based on mockup

const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
];
const selectedTimeSlot = ref('11:00 - 12:30');

const services = [
  { label: 'Beratungsgespräch', value: 'beratung' },
  { label: 'Untersuchung', value: 'untersuchung' }
];
const selectedService = ref(services[1]);

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
</script>