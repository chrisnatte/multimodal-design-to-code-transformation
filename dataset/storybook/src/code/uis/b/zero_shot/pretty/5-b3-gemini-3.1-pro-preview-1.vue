<template>
  <div class="min-h-screen bg-white p-8 font-sans text-surface-900 flex flex-col gap-8 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times" rounded severity="secondary" variant="text" class="w-12 h-12 !text-surface-500 bg-surface-100 hover:bg-surface-200" aria-label="Close" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <p class="text-base text-surface-600 m-0">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Card 1: Datum wählen -->
      <Card class="bg-surface-50 shadow-none border border-surface-100 rounded-xl">
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="text-lg font-medium">Datum wählen</div>
            <DatePicker v-model="selectedDate" inline class="w-full" />
          </div>
        </template>
      </Card>

      <!-- Card 2: Zeitslot wählen -->
      <Card class="bg-surface-50 shadow-none border border-surface-100 rounded-xl">
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="text-lg font-medium">Zeitslot wählen</div>
            
            <div class="flex flex-col gap-3 mt-2">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time1" value="09:00 - 10:30" />
                <label for="time1" class="text-sm cursor-pointer">09:00 - 10:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time2" value="11:00 - 12:30" />
                <label for="time2" class="text-sm cursor-pointer">11:00 - 12:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time3" value="14:00 - 15:30" />
                <label for="time3" class="text-sm cursor-pointer">14:00 - 15:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time4" value="16:00 - 17:30" />
                <label for="time4" class="text-sm cursor-pointer">16:00 - 17:30</label>
              </div>
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <label class="text-sm text-surface-700">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" placeholder="Dienstleistung wählen" class="w-full" />
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 3: Deine Daten -->
      <Card class="bg-surface-50 shadow-none border border-surface-100 rounded-xl md:col-span-2">
        <template #content>
          <div class="flex flex-col gap-6">
            <div class="text-lg font-medium">Deine Daten</div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-700">Name</label>
                <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-700">E-Mail</label>
                <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-700">Anmerkungen</label>
              <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full resize-none" />
            </div>

            <div class="flex items-center gap-3 mt-2">
              <ToggleSwitch v-model="sendReminder" inputId="reminder" />
              <div class="flex flex-col">
                <label for="reminder" class="text-sm font-semibold cursor-pointer">Erinnerung senden</label>
                <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-end items-center gap-3 mt-4">
      <Button label="Abbrechen" severity="secondary" class="bg-surface-100 text-surface-900 border-none hover:bg-surface-200" />
      <Button label="Buchen" @click="showConfirmDialog = true" class="bg-emerald-500 border-none hover:bg-emerald-600" />
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Datum:</span>
          <span class="text-sm font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Zeit</span>
          <span class="text-sm font-semibold">{{ selectedTime }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ selectedService }}</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 w-full">
          <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" class="bg-surface-100 text-surface-900 border-none hover:bg-surface-200" />
          <Button label="Bestätigen" @click="showConfirmDialog = false" class="bg-emerald-500 border-none hover:bg-emerald-600" />
        </div>
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

const selectedDate = ref(new Date(2029, 5, 15)); // 15. Juni 2029
const selectedTime = ref('11:00 - 12:30');
const services = ref(['Beratungsgespräch', 'Untersuchung']);
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const showConfirmDialog = ref(false);

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return selectedDate.value.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
});
</script>