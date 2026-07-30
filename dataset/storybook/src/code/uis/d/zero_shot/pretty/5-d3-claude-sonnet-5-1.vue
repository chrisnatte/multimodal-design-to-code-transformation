<template>
  <div class="min-h-screen bg-white p-10">
    <div class="flex items-center gap-4 mb-8">
      <Button severity="secondary" rounded class="!w-[50px] !h-[50px]">
        <i class="pi pi-times-circle text-2xl"></i>
      </Button>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Termin buchen</h1>
        <span class="text-base text-surface-600">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <Card class="!bg-surface-100">
        <template #title>
          <span class="text-lg font-medium">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <Card class="!bg-surface-100">
        <template #title>
          <span class="text-lg font-medium">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
                <label :for="slot">{{ slot }}</label>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" placeholder="Dienstleistung" class="w-full" />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <Card class="!bg-surface-100 mb-4">
      <template #title>
        <span class="text-lg font-medium">Deine Daten</span>
      </template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="cancelBooking" />
      <Button label="Buchen" @click="showConfirmDialog = true" />
    </div>

    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-3 mb-4">
        <div class="flex justify-between">
          <span>Datum:</span>
          <span class="font-semibold">{{ confirmedDate }}</span>
        </div>
        <div class="flex justify-between">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedService }}</span>
        </div>
      </div>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" @click="confirmBooking" />
      </div>
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
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']);
const selectedSlot = ref('11:00 - 12:30');
const services = ref(['Beratungsgespräch', 'Untersuchung']);
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const reminder = ref(true);
const showConfirmDialog = ref(false);
const confirmedDate = ref('15. Juni 2029');

function cancelBooking() {
  showConfirmDialog.value = false;
}

function confirmBooking() {
  showConfirmDialog.value = false;
}
</script>