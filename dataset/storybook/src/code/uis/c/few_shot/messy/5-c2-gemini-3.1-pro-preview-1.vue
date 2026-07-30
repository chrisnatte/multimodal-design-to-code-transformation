<template>
  <div class="min-h-screen bg-[#e5e7eb] p-8 flex flex-col items-center font-sans">
    <div class="w-full max-w-4xl flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-2">
        <i class="pi pi-times-circle text-4xl text-gray-500 cursor-pointer mt-1"></i>
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
          <p class="text-gray-600 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Date Selection Card -->
        <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4">
          <h2 class="text-lg font-semibold text-gray-800">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full border-none" />
        </div>

        <!-- Time & Service Selection Card -->
        <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-gray-800">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3 mt-2">
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time1" value="09:00 - 10:30" />
                <label for="time1" class="text-gray-700">09:00 - 10:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time2" value="11:00 - 12:30" />
                <label for="time2" class="text-gray-700">11:00 - 12:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time3" value="14:00 - 15:30" />
                <label for="time3" class="text-gray-700">14:00 - 15:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time4" value="16:00 - 17:30" />
                <label for="time4" class="text-gray-700">16:00 - 17:30</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-600">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" placeholder="Untersuchung" class="w-full" />
          </div>
        </div>

        <!-- User Data Card -->
        <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5 md:col-span-2">
          <h2 class="text-lg font-semibold text-gray-800">Deine Daten</h2>
          
          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-600">Name</label>
            <InputText v-model="name" class="w-full bg-gray-50" />
          </div>
          
          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-600">Anmerkungen</label>
            <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="w-full bg-gray-50 resize-none" />
          </div>
          
          <div class="flex items-center gap-4 mt-2">
            <ToggleSwitch v-model="sendReminder" />
            <div class="flex flex-col">
              <span class="font-medium text-gray-800 text-sm">Erinnerung senden</span>
              <span class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" severity="secondary" text class="text-gray-600 hover:bg-gray-200" />
        <Button label="Buchen" severity="success" class="bg-[#10b981] border-none hover:bg-[#059669]" @click="showDialog = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true" class="p-fluid">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Datum:</span>
          <span class="font-medium text-gray-900 text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Zeit</span>
          <span class="font-medium text-gray-900 text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Dienstleistung</span>
          <span class="font-medium text-gray-900 text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button label="Abbrechen" severity="secondary" text class="bg-gray-100 text-gray-700 hover:bg-gray-200" @click="showDialog = false" />
          <Button label="Bestätigen" severity="success" class="bg-[#10b981] border-none hover:bg-[#059669]" @click="showDialog = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTime = ref('11:00 - 12:30');
const selectedService = ref('Untersuchung');
const services = ref(['Beratungsgespräch', 'Untersuchung']);
const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);
const showDialog = ref(true);
</script>