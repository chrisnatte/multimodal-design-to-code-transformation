<template>
  <div class="min-h-screen bg-surface-50 p-8 flex justify-center font-sans text-surface-900">
    <div class="max-w-4xl w-full flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-surface-200 flex items-center justify-center">
          <i class="pi pi-times-circle text-2xl text-surface-600"></i>
        </div>
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
          <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Top Grid: Date & Time -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Date Selection -->
        <Card class="bg-surface-100 shadow-none border border-surface-200 !rounded-xl">
          <template #title>
            <span class="text-lg font-medium">Datum wählen</span>
          </template>
          <template #content>
            <DatePicker v-model="date" inline showWeek class="w-full" />
          </template>
        </Card>

        <!-- Time Slot Selection -->
        <Card class="bg-surface-100 shadow-none border border-surface-200 !rounded-xl">
          <template #title>
            <span class="text-lg font-medium">Zeitslot wählen</span>
          </template>
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" inputId="t1" value="09:00 - 10:30" />
                  <label for="t1" class="text-sm">09:00 - 10:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" inputId="t2" value="11:00 - 12:30" />
                  <label for="t2" class="text-sm">11:00 - 12:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" inputId="t3" value="14:00 - 15:30" />
                  <label for="t3" class="text-sm">14:00 - 15:30</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="timeSlot" inputId="t4" value="16:00 - 17:30" />
                  <label for="t4" class="text-sm">16:00 - 17:30</label>
                </div>
              </div>
              
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-600">Dienstleistung</label>
                <Select v-model="service" :options="services" placeholder="Dienstleistung wählen" class="w-full" />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Bottom Card: User Data -->
      <Card class="bg-surface-100 shadow-none border border-surface-200 !rounded-xl">
        <template #title>
          <span class="text-lg font-medium">Deine Daten</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-600">Name</label>
                <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-600">E-Mail</label>
                <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
              </div>
            </div>
            
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600">Anmerkungen</label>
              <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
            </div>
            
            <div class="flex items-center gap-4 mt-2">
              <ToggleSwitch v-model="sendReminder" />
              <div class="flex flex-col">
                <span class="font-semibold text-sm">Erinnerung senden</span>
                <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" severity="secondary" class="!bg-surface-200 !border-none !text-surface-700" />
        <Button label="Buchen" @click="showConfirmDialog = true" class="!bg-emerald-500 !border-emerald-500" />
      </div>

    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '26rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit</span>
          <span class="font-semibold text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung</span>
          <span class="font-semibold text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 w-full">
          <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" class="!bg-surface-100 !border-none !text-surface-700" />
          <Button label="Bestätigen" @click="showConfirmDialog = false" class="!bg-emerald-500 !border-emerald-500" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const date = ref(new Date(2026, 6, 15));
const timeSlot = ref('11:00 - 12:30');
const service = ref('Untersuchung');
const services = ref(['Beratungsgespräch', 'Untersuchung']);
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const showConfirmDialog = ref(true);
</script>