<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-times-circle" rounded severity="secondary" text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <Card :pt="{ body: '!p-4', content: '!p-0' }">
        <template #title>
          <span class="text-lg font-medium">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <Card :pt="{ body: '!p-4', content: '!p-0' }">
        <template #title>
          <span class="text-lg font-medium">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedSlot" :inputId="slot" name="timeslot" :value="slot" />
                <label :for="slot">{{ slot }}</label>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label for="service">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" inputId="service" class="w-full" />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <Card class="mb-4" :pt="{ body: '!p-4', content: '!p-0' }">
      <template #title>
        <span class="text-lg font-medium">Deine Daten</span>
      </template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-2">
            <label for="name-input">Name</label>
            <InputText id="name-input" v-model="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email-input">E-Mail</label>
            <InputText id="email-input" v-model="email" type="email" />
          </div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label for="notes-textarea">Anmerkungen</label>
          <Textarea id="notes-textarea" v-model="notes" placeholder="Optionale Nachricht..." rows="4" />
        </div>
        <div class="flex items-start gap-3">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="font-semibold text-sm">Erinnerung senden</span>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <Dialog v-model:visible="showConfirmDialog" header="Buchung bestätigen" modal :style="{ width: '350px' }">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Zeit</span>
          <span class="font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Dienstleistung</span>
          <span class="font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from 'primevue/dialog';

const selectedDate = ref(new Date(2026, 6, 15));
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'];
const selectedSlot = ref('11:00 - 12:30');
const services = ['Beratungsgespräch', 'Untersuchung'];
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const showConfirmDialog = ref(true);
</script>