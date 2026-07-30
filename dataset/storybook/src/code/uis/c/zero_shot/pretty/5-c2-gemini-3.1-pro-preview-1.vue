<template>
  <div class="min-h-screen bg-surface-100 p-8 flex justify-center font-sans text-surface-900">
    <div class="max-w-4xl w-full flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-start gap-4">
        <Button icon="pi pi-times" rounded variant="text" severity="secondary" class="!bg-surface-200 !text-surface-600 hover:!bg-surface-300 w-12 h-12 shrink-0" />
        <div>
          <h1 class="text-3xl font-bold m-0 text-surface-900">Termin buchen</h1>
          <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Date Card -->
        <div class="bg-surface-200 rounded-xl p-6 flex flex-col gap-4">
          <h2 class="text-lg font-semibold m-0">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full border-none bg-transparent" />
        </div>

        <!-- Time & Service Card -->
        <div class="bg-surface-200 rounded-xl p-6 flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :inputId="slot" name="timeSlot" :value="slot" />
                <label :for="slot" class="text-surface-700">{{ slot }}</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-600">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="name" placeholder="Untersuchung" class="w-full bg-surface-100" />
          </div>
        </div>
      </div>

      <!-- Data Card -->
      <div class="bg-surface-200 rounded-xl p-6 flex flex-col gap-6">
        <h2 class="text-lg font-semibold m-0">Deine Daten</h2>
        
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-surface-600">Name</label>
          <InputText id="name" v-model="name" placeholder="Max Mustermann" class="w-full bg-surface-100" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm text-surface-600">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full bg-surface-100 resize-none" />
        </div>

        <div class="flex items-center gap-4 pt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div>
            <div class="font-semibold text-surface-900">Erinnerung senden</div>
            <div class="text-xs text-surface-600">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="flex justify-end gap-4 mt-2">
        <Button label="Abbrechen" variant="text" severity="secondary" class="!text-surface-600 hover:!bg-surface-200" />
        <Button label="Buchen" severity="success" @click="showConfirmDialog = true" class="!bg-emerald-600 !border-emerald-600 hover:!bg-emerald-700" />
      </div>
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600">Datum:</span>
          <span class="font-semibold text-surface-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600">Zeit</span>
          <span class="font-semibold text-surface-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600">Dienstleistung</span>
          <span class="font-semibold text-surface-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 w-full">
          <Button label="Abbrechen" variant="text" severity="secondary" @click="showConfirmDialog = false" class="!text-surface-700 bg-surface-100 hover:bg-surface-200" />
          <Button label="Bestätigen" severity="success" @click="showConfirmDialog = false" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" />
        </div>
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

const selectedDate = ref(new Date(2026, 6, 15));
const selectedTime = ref('11:00 - 12:30');
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]);

const selectedService = ref({ name: 'Untersuchung', code: 'U1' });
const services = ref([
  { name: 'Untersuchung', code: 'U1' },
  { name: 'Beratungsgespräch', code: 'B1' }
]);

const name = ref('');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmDialog = ref(true);
</script>