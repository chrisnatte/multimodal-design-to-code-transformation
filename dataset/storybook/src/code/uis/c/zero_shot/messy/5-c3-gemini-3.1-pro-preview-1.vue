<template>
  <div class="min-h-screen bg-[#a3a3a3] p-8 flex justify-center items-start font-sans relative">
    
    <!-- Main Form Container -->
    <div class="max-w-4xl w-full space-y-6 opacity-50 pointer-events-none">
      
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <Button icon="pi pi-times" rounded text class="!bg-[#c4c4c4] !text-gray-700 !w-12 !h-12" />
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Termin buchen</h1>
          <p class="text-gray-700 text-lg">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Top Row: Date & Time -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Date Card -->
        <div class="bg-[#b5b5b5] rounded-xl p-6 shadow-sm">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full !border-none !bg-transparent" />
        </div>

        <!-- Time & Service Card -->
        <div class="bg-[#b5b5b5] rounded-xl p-6 flex flex-col gap-8 shadow-sm">
          <div>
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time1" name="time" value="09:00 - 10:30" />
                <label for="time1" class="text-gray-800">09:00 - 10:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time2" name="time" value="11:00 - 12:30" class="!border-[#00b87c] [&>div]:!bg-[#00b87c]" />
                <label for="time2" class="text-gray-800">11:00 - 12:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time3" name="time" value="14:00 - 15:30" />
                <label for="time3" class="text-gray-800">14:00 - 15:30</label>
              </div>
              <div class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" inputId="time4" name="time" value="16:00 - 17:30" />
                <label for="time4" class="text-gray-800">16:00 - 17:30</label>
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm text-gray-700 mb-2">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="name" class="w-full !bg-[#c4c4c4] !border-gray-400" />
          </div>
        </div>
      </div>

      <!-- Bottom Row: User Data -->
      <div class="bg-[#b5b5b5] rounded-xl p-6 space-y-6 shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900">Deine Daten</h2>
        
        <div>
          <label class="block text-sm text-gray-700 mb-2">Name</label>
          <InputText v-model="name" class="w-full !bg-[#c4c4c4] !border-gray-400 !text-gray-800" />
        </div>
        
        <div>
          <label class="block text-sm text-gray-700 mb-2">Anmerkungen</label>
          <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full !bg-[#c4c4c4] !border-gray-400 placeholder:text-gray-600" />
        </div>
        
        <div class="flex items-center gap-4 pt-2">
          <ToggleSwitch v-model="sendReminder" class="!bg-[#00b87c] !border-[#00b87c]" />
          <div>
            <div class="font-semibold text-gray-900">Erinnerung senden</div>
            <div class="text-sm text-gray-700">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </div>

      <!-- Main Actions -->
      <div class="flex justify-end gap-4 pt-4">
        <Button label="Abbrechen" text class="!text-gray-700 !bg-[#b5b5b5] hover:!bg-gray-400" />
        <Button label="Buchen" class="!bg-[#00b87c] !border-[#00b87c] hover:!bg-[#009966]" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true" class="!rounded-xl">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Datum:</span>
          <span class="font-semibold text-gray-900 text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Zeit</span>
          <span class="font-semibold text-gray-900 text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 text-sm">Dienstleistung</span>
          <span class="font-semibold text-gray-900 text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button label="Abbrechen" text class="!text-gray-700 !bg-gray-100 hover:!bg-gray-200 !px-4 !py-2 !rounded-md" @click="showDialog = false" />
          <Button label="Bestätigen" class="!bg-[#00b87c] !border-[#00b87c] hover:!bg-[#009966] !px-4 !py-2 !rounded-md" @click="showDialog = false" />
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

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTime = ref('11:00 - 12:30');

const services = ref([
  { name: 'Beratungsgespräch', code: 'BG' },
  { name: 'Untersuchung', code: 'US' }
]);
const selectedService = ref({ name: 'Untersuchung', code: 'US' });

const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

const showDialog = ref(true);
</script>