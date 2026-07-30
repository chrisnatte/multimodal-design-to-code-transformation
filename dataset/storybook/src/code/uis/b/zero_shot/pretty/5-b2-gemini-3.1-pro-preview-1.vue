<template>
  <div class="min-h-screen bg-white py-12 px-4 flex justify-center font-sans">
    <div class="w-full max-w-[833px] flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded text severity="secondary" class="bg-slate-100 w-12 h-12" aria-label="Schließen" />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold m-0 text-slate-900">Termin buchen</h1>
          <p class="text-slate-600 m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- Card 1: Datum wählen -->
        <Card class="bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #title>
            <span class="text-lg font-medium text-slate-900">Datum wählen</span>
          </template>
          <template #content>
            <DatePicker v-model="date" inline class="w-full" />
          </template>
        </Card>

        <!-- Card 2: Zeitslot wählen -->
        <Card class="bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #title>
            <span class="text-lg font-medium text-slate-900">Zeitslot wählen</span>
          </template>
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" :inputId="slot" :value="slot" />
                  <label :for="slot" class="text-sm text-slate-700 cursor-pointer">{{ slot }}</label>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-sm text-slate-700">Dienstleistung</label>
                <Select v-model="service" :options="services" placeholder="Dienstleistung wählen" class="w-full" />
              </div>
            </div>
          </template>
        </Card>

        <!-- Card 3: Deine Daten -->
        <Card class="md:col-span-2 bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #title>
            <span class="text-lg font-medium text-slate-900">Deine Daten</span>
          </template>
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-slate-700">Name</label>
                  <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-slate-700">E-Mail</label>
                  <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-sm text-slate-700">Anmerkungen</label>
                <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full resize-none" />
              </div>
              <div class="flex items-center gap-3 mt-2">
                <ToggleSwitch v-model="reminder" inputId="reminder" />
                <div class="flex flex-col">
                  <label for="reminder" class="font-semibold text-sm text-slate-900 cursor-pointer">Erinnerung senden</label>
                  <span class="text-xs text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-3 mt-4">
        <Button label="Abbrechen" severity="secondary" class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200" />
        <Button label="Buchen" @click="showDialog = true" />
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm text-slate-900">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Zeit</span>
          <span class="font-semibold text-sm text-slate-900">{{ timeSlot || '-' }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Dienstleistung</span>
          <span class="font-semibold text-sm text-slate-900">{{ service || '-' }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200" @click="showDialog = false" />
        <Button label="Bestätigen" @click="showDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from 'primevue/dialog';

const date = ref(new Date(2029, 5, 15)); // 15. Juni 2029
const timeSlot = ref('11:00 - 12:30');
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
];

const service = ref('Untersuchung');
const services = ['Beratungsgespräch', 'Untersuchung', 'Behandlung'];

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const reminder = ref(true);

const showDialog = ref(false);

const formattedDate = computed(() => {
  if (!date.value) return '-';
  return date.value.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
});
</script>