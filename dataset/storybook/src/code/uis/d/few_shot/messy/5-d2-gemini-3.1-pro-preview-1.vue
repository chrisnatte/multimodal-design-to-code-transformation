<template>
  <div class="flex min-h-screen items-center justify-center bg-black/40 p-8">
    <div class="flex w-full max-w-4xl flex-col gap-8">
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" severity="secondary" rounded outlined aria-label="Cancel" />
        <div>
          <h1 class="text-3xl font-bold text-white">Termin buchen</h1>
          <p class="text-white/80">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="flex flex-col gap-4 rounded-xl bg-white p-6">
          <h2 class="text-lg font-medium">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full" />
        </div>

        <div class="flex flex-col gap-4 rounded-xl bg-white p-6">
          <h2 class="text-lg font-medium">Zeitslot wählen</h2>
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedTimeSlot" :inputId="slot.value" name="timeSlot" :value="slot.value" />
              <label :for="slot.value" class="text-sm">{{ slot.label }}</label>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-2">
            <label for="service" class="text-sm">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Untersuchung" class="w-full" />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 rounded-xl bg-white p-6">
        <h2 class="text-lg font-medium">Deine Daten</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" placeholder="Max Mustermann" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="max@example.com" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." />
        </div>
        <div class="flex items-center gap-3">
          <InputSwitch v-model="sendReminder" inputId="reminder" />
          <div>
            <label for="reminder" class="font-semibold text-sm">Erinnerung senden</label>
            <p class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</p>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-4">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Buchen" severity="primary" @click="showConfirmation = true" />
      </div>
    </div>

    <Dialog v-model:visible="showConfirmation" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Datum:</span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Zeit:</span>
          <span class="text-sm font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Dienstleistung:</span>
          <span class="text-sm font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="showConfirmation = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmation = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputSwitch from 'primevue/inputswitch';
import Dialog from 'primevue/dialog';

const date = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTimeSlot = ref('11:00 - 12:30');
const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09:00 - 10:30' },
  { label: '11:00 - 12:30', value: '11:00 - 12:30' },
  { label: '14:00 - 15:30', value: '14:00 - 15:30' },
  { label: '16:00 - 17:30', value: '16:00 - 17:30' }
]);

const selectedService = ref({ label: 'Untersuchung', value: 'untersuchung' });
const services = ref([
  { label: 'Beratungsgespräch', value: 'beratung' },
  { label: 'Untersuchung', value: 'untersuchung' }
]);

const name = ref('Max Mustermann');
const email = ref('');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmation = ref(true);
</script>