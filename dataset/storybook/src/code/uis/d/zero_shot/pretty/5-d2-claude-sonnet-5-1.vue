<template>
  <div class="min-h-screen bg-white p-8">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-times-circle" rounded severity="secondary" text class="!w-[50px] !h-[50px]" aria-label="Close" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800 m-0">Termin buchen</h1>
        <span class="text-base text-gray-600">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <!-- Grid: Date & Timeslot cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- Datum wählen card -->
      <Card class="!bg-gray-100 !shadow-none">
        <template #title>
          <span class="text-lg font-medium">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <!-- Zeitslot wählen card -->
      <Card class="!bg-gray-100 !shadow-none">
        <template #title>
          <span class="text-lg font-medium">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
                <RadioButton v-model="selectedSlot" :inputId="slot.value" name="timeslot" :value="slot.value" />
                <label :for="slot.value">{{ slot.label }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                id="service"
                v-model="selectedService"
                :options="services"
                optionLabel="name"
                optionValue="name"
                placeholder="Dienstleistung wählen"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Deine Daten card -->
    <Card class="!bg-gray-100 !shadow-none mb-4">
      <template #title>
        <span class="text-lg font-medium">Deine Daten</span>
      </template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-1">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-1 mb-4">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="5" placeholder="Optionale Nachricht..." class="w-full" />
        </div>

        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminder" />
          <div class="flex flex-col">
            <span class="font-semibold text-sm">Erinnerung senden</span>
            <span class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </template>
    </Card>

    <!-- Bottom action buttons -->
    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" @click="openConfirmDialog" />
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="confirmVisible" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <span class="text-sm">Datum:</span>
          <span class="text-sm font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Zeit</span>
          <span class="text-sm font-semibold">{{ selectedSlotLabel }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="confirmVisible = false" />
        <Button label="Bestätigen" @click="onConfirmBooking" />
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

const selectedDate = ref(new Date(2029, 5, 15));

const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09:00 - 10:30' },
  { label: '11:00 - 12:30', value: '11:00 - 12:30' },
  { label: '14:00 - 15:30', value: '14:00 - 15:30' },
  { label: '16:00 - 17:30', value: '16:00 - 17:30' }
]);
const selectedSlot = ref('11:00 - 12:30');

const services = ref([
  { name: 'Beratungsgespräch' },
  { name: 'Untersuchung' }
]);
const selectedService = ref('Untersuchung');

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const reminder = ref(true);

const confirmVisible = ref(false);

const selectedSlotLabel = computed(() => selectedSlot.value);

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  const date = new Date(selectedDate.value);
  const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
});

const openConfirmDialog = () => {
  confirmVisible.value = true;
};

const onConfirmBooking = () => {
  confirmVisible.value = false;
};

const onCancel = () => {
  // Handle cancel action
};
</script>