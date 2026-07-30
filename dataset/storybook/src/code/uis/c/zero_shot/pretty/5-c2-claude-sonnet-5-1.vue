<template>
  <div class="min-h-screen bg-gray-300 p-8">
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded severity="secondary" outlined class="!w-12 !h-12" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Termin buchen</h1>
        <p class="text-gray-500 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card>
        <template #content>
          <h2 class="text-lg font-semibold mb-4">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </template>
      </Card>

      <Card>
        <template #content>
          <h2 class="text-lg font-semibold mb-4">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3 mb-6">
            <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :inputId="slot.value" name="timeslot" :value="slot.value" />
              <label :for="slot.value">{{ slot.label }}</label>
            </div>
          </div>

          <label class="block mb-2 text-gray-700">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            optionLabel="label"
            optionValue="value"
            placeholder="Dienstleistung wählen"
            class="w-full"
          />
        </template>
      </Card>
    </div>

    <Card class="mb-6">
      <template #content>
        <h2 class="text-lg font-semibold mb-4">Deine Daten</h2>
        <div class="mb-4">
          <label for="name" class="block mb-2 text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>
        <div class="mb-4">
          <label for="anmerkungen" class="block mb-2 text-gray-700">Anmerkungen</label>
          <Textarea id="anmerkungen" v-model="notes" rows="4" class="w-full" placeholder="Optionale Nachricht..." />
        </div>
        <div class="flex items-start gap-3">
          <ToggleSwitch v-model="sendReminder" />
          <div>
            <div class="font-semibold text-gray-800">Erinnerung senden</div>
            <div class="text-sm text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="visible = true" />
    </div>

    <Dialog v-model:visible="visible" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex justify-between mb-3">
        <span class="text-gray-600">Datum:</span>
        <span class="font-semibold">15. Juni 2029</span>
      </div>
      <div class="flex justify-between mb-3">
        <span class="text-gray-600">Zeit</span>
        <span class="font-semibold">11:00 - 12:30</span>
      </div>
      <div class="flex justify-between mb-6">
        <span class="text-gray-600">Dienstleistung</span>
        <span class="font-semibold">Untersuchung</span>
      </div>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" outlined @click="visible = false" />
        <Button label="Bestätigen" severity="success" @click="visible = false" />
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
const selectedSlot = ref('11-12');
const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09-10' },
  { label: '11:00 - 12:30', value: '11-12' },
  { label: '14:00 - 15:30', value: '14-15' },
  { label: '16:00 - 17:30', value: '16-17' }
]);

const services = ref([
  { label: 'Beratungsgespräch', value: 'beratung' },
  { label: 'Untersuchung', value: 'untersuchung' }
]);
const selectedService = ref('untersuchung');

const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);

const visible = ref(false);
</script>