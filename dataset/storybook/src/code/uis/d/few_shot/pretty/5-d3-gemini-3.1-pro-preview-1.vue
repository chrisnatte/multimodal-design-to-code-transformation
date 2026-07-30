<template>
  <div class="relative min-h-screen bg-white p-8 font-sans text-slate-800">
    <div class="mx-auto flex max-w-[833px] flex-col gap-8">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" severity="secondary" rounded outlined class="!h-12 !w-12 !bg-slate-100 !border-none !text-slate-600" />
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold text-slate-900">Termin buchen</h1>
          <p class="text-base text-slate-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Card 1: Datum wählen -->
        <div class="flex flex-col gap-4 rounded-xl bg-slate-100 p-5">
          <h2 class="text-lg font-medium text-slate-900">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full border-none bg-transparent" />
        </div>

        <!-- Card 2: Zeitslot & Dienstleistung -->
        <div class="flex flex-col gap-4 rounded-xl bg-slate-100 p-5">
          <h2 class="text-lg font-medium text-slate-900">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :inputId="slot" :value="slot" />
              <label :for="slot" class="text-sm cursor-pointer">{{ slot }}</label>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-2">
            <label for="service" class="text-sm text-slate-700">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" inputId="service" placeholder="Dienstleistung wählen" class="w-full" />
          </div>
        </div>

        <!-- Card 3: Deine Daten -->
        <div class="col-span-2 flex flex-col gap-4 rounded-xl bg-slate-100 p-5">
          <h2 class="text-lg font-medium text-slate-900">Deine Daten</h2>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText id="name" v-model="name" placeholder="Name eingeben" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText id="email" v-model="email" placeholder="E-Mail eingeben" />
            </div>
          </div>

          <div class="flex flex-col gap-2 mt-2">
            <label for="notes" class="text-sm text-slate-700">Anmerkungen</label>
            <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="resize-none" />
          </div>

          <div class="flex items-center gap-4 mt-4">
            <ToggleSwitch v-model="sendReminder" inputId="reminder" />
            <div class="flex flex-col">
              <label for="reminder" class="text-sm font-semibold text-slate-900 cursor-pointer">Erinnerung senden</label>
              <span class="text-xs text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Actions -->
      <div class="flex justify-end gap-3 mt-4">
        <Button label="Abbrechen" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Buchen" severity="primary" @click="isDialogVisible = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="isDialogVisible" modal header="Buchung bestätigen" :style="{ width: '350px' }" :closable="true">
      <div class="flex flex-col gap-3 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Datum:</span>
          <span class="text-sm font-semibold text-slate-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Zeit:</span>
          <span class="text-sm font-semibold text-slate-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Dienstleistung:</span>
          <span class="text-sm font-semibold text-slate-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="isDialogVisible = false" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Bestätigen" severity="primary" @click="isDialogVisible = false" />
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
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'];
const selectedTimeSlot = ref('11:00 - 12:30');

const services = ['Beratungsgespräch', 'Untersuchung'];
const selectedService = ref('Untersuchung');

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);

const isDialogVisible = ref(true);
</script>