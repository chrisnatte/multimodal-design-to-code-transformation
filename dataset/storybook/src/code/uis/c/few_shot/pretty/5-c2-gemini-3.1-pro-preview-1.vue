<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-surface-100 p-8">
    <div class="w-full max-w-4xl">
      <div class="mb-8 flex items-center gap-4">
        <Button icon="pi pi-times" rounded text severity="secondary" size="large" />
        <div>
          <h1 class="text-3xl font-bold text-surface-900">Termin buchen</h1>
          <p class="text-surface-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <template #title>Datum wählen</template>
          <template #content>
            <DatePicker v-model="date" inline showWeek class="w-full" />
          </template>
        </Card>

        <Card>
          <template #title>Zeitslot wählen</template>
          <template #content>
            <div class="flex flex-col gap-3 mb-6">
              <div class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" inputId="slot1" name="timeSlot" value="09:00 - 10:30" />
                <label for="slot1">09:00 - 10:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" inputId="slot2" name="timeSlot" value="11:00 - 12:30" />
                <label for="slot2">11:00 - 12:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" inputId="slot3" name="timeSlot" value="14:00 - 15:30" />
                <label for="slot3">14:00 - 15:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" inputId="slot4" name="timeSlot" value="16:00 - 17:30" />
                <label for="slot4">16:00 - 17:30</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm font-medium text-surface-700">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" optionLabel="name" placeholder="Untersuchung" class="w-full" />
            </div>
          </template>
        </Card>

        <Card class="md:col-span-2">
          <template #title>Deine Daten</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm font-medium text-surface-700">Name</label>
                <InputText id="name" v-model="name" placeholder="Max Mustermann" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="notes" class="text-sm font-medium text-surface-700">Anmerkungen</label>
                <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." />
              </div>
              <div class="flex items-center gap-3 mt-2">
                <ToggleSwitch v-model="reminder" inputId="reminder" />
                <div>
                  <label for="reminder" class="font-medium text-surface-900 block">Erinnerung senden</label>
                  <span class="text-sm text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-8 flex justify-end gap-4">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
      </div>
    </div>

    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between">
          <span class="text-surface-600">Datum:</span>
          <span class="font-medium text-surface-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-surface-600">Zeit</span>
          <span class="font-medium text-surface-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-surface-600">Dienstleistung</span>
          <span class="font-medium text-surface-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="showConfirmDialog = false" />
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

const date = ref(new Date(2026, 6, 15));
const timeSlot = ref('11:00 - 12:30');
const selectedService = ref({ name: 'Untersuchung', code: 'U' });
const services = ref([
  { name: 'Beratungsgespräch', code: 'B' },
  { name: 'Untersuchung', code: 'U' }
]);
const name = ref('Max Mustermann');
const notes = ref('');
const reminder = ref(true);
const showConfirmDialog = ref(true);
</script>