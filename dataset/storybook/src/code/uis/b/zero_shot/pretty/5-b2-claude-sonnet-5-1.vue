<template>
  <div class="p-6 max-w-6xl mx-auto">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-times-circle" rounded severity="secondary" text @click="onClose" aria-label="Close" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <span class="text-base text-color-secondary">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <!-- Grid: Date & Timeslot -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- Date Card -->
      <Card>
        <template #title>Datum wählen</template>
        <template #content>
          <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
        </template>
      </Card>

      <!-- Timeslot Card -->
      <Card>
        <template #title>Zeitslot wählen</template>
        <template #content>
          <div class="flex flex-col gap-3 mb-4">
            <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :inputId="slot.value" name="timeslot" :value="slot.value" />
              <label :for="slot.value">{{ slot.label }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="service" class="font-medium">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              optionLabel="name"
              optionValue="value"
              inputId="service"
              placeholder="Dienstleistung wählen"
              class="w-full"
            />
          </div>
        </template>
      </Card>
    </div>

    <!-- Personal Data Card -->
    <Card class="mb-4">
      <template #title>Deine Daten</template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText id="name" v-model="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="E-Mail eingeben" />
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-4">
          <label for="notes">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." autoResize />
        </div>

        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="font-semibold text-sm">Erinnerung senden</span>
            <span class="text-xs text-color-secondary">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </div>
        </div>
      </template>
    </Card>

    <!-- Action Row -->
    <div class="flex justify-end gap-3 mb-8">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" @click="onBook" />
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="dialogVisible" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-2 mb-4">
        <div class="flex justify-between items-center">
          <span>Datum:</span>
          <span class="font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedTimeSlotLabel }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedServiceLabel }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
        <Button label="Bestätigen" @click="onConfirm" />
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

const selectedDate = ref(new Date());
const selectedTimeSlot = ref('11:00 - 12:30');
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const dialogVisible = ref(false);

const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09:00 - 10:30' },
  { label: '11:00 - 12:30', value: '11:00 - 12:30' },
  { label: '14:00 - 15:30', value: '14:00 - 15:30' },
  { label: '16:00 - 17:30', value: '16:00 - 17:30' }
]);

const services = ref([
  { name: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { name: 'Untersuchung', value: 'Untersuchung' }
]);

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return new Date(selectedDate.value).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});

const selectedTimeSlotLabel = computed(() => selectedTimeSlot.value || '');
const selectedServiceLabel = computed(() => selectedService.value || '');

const onClose = () => {
  // handle close action
};

const onCancel = () => {
  // handle cancel action
};

const onBook = () => {
  dialogVisible.value = true;
};

const onConfirm = () => {
  dialogVisible.value = false;
  // handle booking confirmation
};
</script>