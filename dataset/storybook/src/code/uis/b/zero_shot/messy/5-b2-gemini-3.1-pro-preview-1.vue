<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8 font-sans text-slate-800">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="w-12 h-12 bg-slate-50" />
      <div>
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <p class="text-base text-slate-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-8">
      <!-- Top Row -->
      <div class="flex gap-8">
        <!-- Left Col: Date -->
        <div class="flex-1 bg-slate-50 p-6 rounded-xl flex flex-col gap-4">
          <h2 class="text-lg font-medium m-0">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </div>

        <!-- Right Col: Time & Service -->
        <div class="flex-1 bg-slate-50 p-6 rounded-xl flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-3">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-sm cursor-pointer">{{ slot }}</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="text-sm font-normal m-0">Dienstleistung</h2>
            <Select v-model="selectedService" :options="services" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Bottom Row: User Data -->
      <div class="bg-slate-50 p-6 rounded-xl flex flex-col gap-6">
        <h2 class="text-lg font-medium m-0">Deine Daten</h2>
        
        <div class="grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2">
            <label class="text-sm">Name</label>
            <InputText v-model="name" placeholder="Max Mustermann" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm">E-Mail</label>
            <InputText v-model="email" placeholder="max@example.com" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full" />
        </div>

        <div class="flex items-start gap-3 mt-2">
          <Checkbox v-model="sendReminder" :binary="true" inputId="reminder" />
          <div class="flex flex-col">
            <label for="reminder" class="text-sm font-semibold cursor-pointer">Erinnerung senden</label>
            <span class="text-xs text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-4 mt-4">
      <Button label="Abbrechen" severity="secondary" class="bg-slate-100 border-none text-slate-800 hover:bg-slate-200" />
      <Button label="Buchen" class="bg-emerald-500 border-none hover:bg-emerald-600" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Datum:</span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Zeit</span>
          <span class="text-sm font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Dienstleistung</span>
          <span class="text-sm font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" class="bg-slate-100 border-none text-slate-800 hover:bg-slate-200" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" class="bg-emerald-500 border-none hover:bg-emerald-600" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Dialog from 'primevue/dialog';

const selectedDate = ref(new Date(2026, 6, 15));
const selectedTime = ref('11:00 - 12:30');
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']);
const selectedService = ref('Untersuchung');
const services = ref(['Untersuchung', 'Beratungsgespräch']);
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const showConfirmDialog = ref(true);
</script>