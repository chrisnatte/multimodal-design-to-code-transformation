<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-8 font-sans">
    <div class="max-w-4xl w-full flex flex-col gap-8">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-500 hover:text-white transition-colors">
          <i class="pi pi-times text-xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold m-0 text-gray-900">Termin buchen</h1>
          <p class="text-gray-700 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Datum wählen -->
        <div class="bg-gray-300 p-6 rounded-xl flex flex-col gap-4 shadow-sm">
          <h2 class="text-lg font-semibold m-0 text-gray-900">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full !border-none !bg-transparent" />
        </div>

        <!-- Zeitslot wählen -->
        <div class="bg-gray-300 p-6 rounded-xl flex flex-col gap-6 shadow-sm">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-semibold m-0 text-gray-900">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-gray-800">{{ slot }}</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" placeholder="Dienstleistung wählen" class="w-full !bg-gray-200 !border-gray-400" />
          </div>
        </div>

        <!-- Deine Daten -->
        <div class="bg-gray-300 p-6 rounded-xl flex flex-col gap-6 md:col-span-2 shadow-sm">
          <h2 class="text-lg font-semibold m-0 text-gray-900">Deine Daten</h2>
          
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm text-gray-700">Name</label>
            <InputText id="name" v-model="name" class="w-full !bg-gray-200 !border-gray-400" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="notes" class="text-sm text-gray-700">Anmerkungen</label>
            <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="w-full !bg-gray-200 !border-gray-400" />
          </div>

          <div class="flex items-center gap-4 mt-2">
            <ToggleSwitch v-model="sendReminder" inputId="reminder" />
            <div>
              <label for="reminder" class="font-semibold block text-gray-900">Erinnerung senden</label>
              <span class="text-sm text-gray-600">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-2">
        <Button label="Abbrechen" severity="secondary" text class="!text-gray-700 font-semibold hover:!bg-gray-500/20" />
        <Button label="Buchen" severity="success" class="!bg-[#00a676] !border-[#00a676] hover:!bg-[#008f66]" />
      </div>
    </div>

    <!-- Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '450px' }" :closable="true" :pt="{ root: 'rounded-2xl shadow-xl', header: 'pb-2', content: 'pt-4 pb-6' }">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Datum:</span>
          <span class="font-semibold text-gray-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Zeit:</span>
          <span class="font-semibold text-gray-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Dienstleistung:</span>
          <span class="font-semibold text-gray-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button label="Abbrechen" severity="secondary" class="!bg-gray-100 !text-gray-700 !border-none hover:!bg-gray-200" @click="showConfirmDialog = false" />
          <Button label="Bestätigen" severity="success" class="!bg-[#00a676] !border-[#00a676] hover:!bg-[#008f66]" @click="showConfirmDialog = false" />
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

const selectedDate = ref(new Date(2026, 6, 15));
const selectedTime = ref('11:00 - 12:30');
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
];

const selectedService = ref('Untersuchung');
const services = ref(['Beratungsgespräch', 'Untersuchung']);

const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmDialog = ref(true);
</script>