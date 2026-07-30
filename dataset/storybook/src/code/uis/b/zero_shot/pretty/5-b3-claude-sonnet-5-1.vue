<template>
  <div class="p-8 bg-white">
    <!-- Top header row -->
    <div class="flex items-center gap-4 mb-6">
      <Button rounded severity="secondary" icon="pi pi-times-circle" class="w-[50px] h-[50px]" />
      <div class="flex flex-col gap-1">
        <span class="text-3xl font-bold">Termin buchen</span>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <!-- Grid of cards -->
    <div class="grid grid-cols-2 gap-4">
      <!-- Datum wählen card -->
      <Card class="!bg-surface-100">
        <template #title>
          <span class="text-lg font-medium">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <!-- Zeitslot wählen card -->
      <Card class="!bg-surface-100">
        <template #title>
          <span class="text-lg font-medium">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedSlot" :value="slot" :inputId="slot" />
                <label :for="slot">{{ slot }}</label>
              </div>
            </div>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Dienstleistung"
              class="w-full"
            />
          </div>
        </template>
      </Card>

      <!-- Deine Daten card (spans full width) -->
      <Card class="!bg-surface-100 col-span-2">
        <template #title>
          <span class="text-lg font-medium">Deine Daten</span>
        </template>
        <template #content>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex flex-col gap-2">
              <label for="name">Name</label>
              <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email">E-Mail</label>
              <InputText id="email" v-model="email" placeholder="E-Mail eingeben" class="w-full" />
            </div>
          </div>
          <div class="flex flex-col gap-2 mb-4">
            <label for="notes">Anmerkungen</label>
            <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
          </div>
          <div class="flex items-center gap-3 px-1">
            <ToggleSwitch v-model="reminderEnabled" />
            <div class="flex flex-col">
              <span class="font-semibold text-sm">Erinnerung senden</span>
              <span class="text-xs font-light">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Bottom action row -->
    <div class="flex justify-end gap-3 mt-6">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" @click="onBook" />
    </div>

    <!-- Confirmation dialog -->
    <Dialog v-model:visible="confirmDialogVisible" header="Buchung bestätigen" :style="{ width: '350px' }" modal>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <span>Datum: </span>
          <span class="font-semibold">{{ confirmedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Zeit</span>
          <span class="font-semibold">{{ confirmedSlot }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ confirmedService }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="confirmDialogVisible = false" />
        <Button label="Bestätigen" @click="onConfirmBooking" />
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

const selectedDate = ref(new Date());
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']);
const selectedSlot = ref('11:00 - 12:30');
const services = ref(['Beratungsgespräch', 'Untersuchung']);
const selectedService = ref('Untersuchung');

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const reminderEnabled = ref(true);

const confirmDialogVisible = ref(false);
const confirmedDate = ref('15. Juni 2029');
const confirmedSlot = ref('11:00 - 12:30');
const confirmedService = ref('Untersuchung');

function onCancel() {
  // reset or navigate away
}

function onBook() {
  confirmDialogVisible.value = true;
}

function onConfirmBooking() {
  confirmDialogVisible.value = false;
}
</script>