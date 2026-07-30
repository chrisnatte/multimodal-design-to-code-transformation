<template>
  <div class="min-h-screen bg-white flex justify-center py-16 font-sans text-surface-900">
    <div class="w-[833px] flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded text severity="secondary" class="w-[50px] h-[50px] bg-surface-100" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight m-0">Termin buchen</h1>
          <p class="text-base font-normal m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 gap-[7px]">
        
        <!-- Card 1: Datum wählen -->
        <div class="bg-surface-50 rounded-xl flex flex-col p-[17.5px] gap-4">
          <h2 class="text-[17.5px] font-medium m-0">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full border-none" />
        </div>

        <!-- Card 2: Zeitslot wählen -->
        <div class="bg-surface-50 rounded-xl flex flex-col p-[17.5px] gap-4">
          <h2 class="text-[17.5px] font-medium m-0">Zeitslot wählen</h2>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="slot1" value="09:00 - 10:30" />
              <label for="slot1" class="text-sm">09:00 - 10:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="slot2" value="11:00 - 12:30" />
              <label for="slot2" class="text-sm">11:00 - 12:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="slot3" value="14:00 - 15:30" />
              <label for="slot3" class="text-sm">14:00 - 15:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="slot4" value="16:00 - 17:30" />
              <label for="slot4" class="text-sm">16:00 - 17:30</label>
            </div>
          </div>
          <div class="flex flex-col gap-1 mt-auto">
            <label class="text-sm">Dienstleistung</label>
            <Select v-model="service" :options="services" optionLabel="label" optionValue="value" placeholder="Dienstleistung" class="w-full" />
          </div>
        </div>

        <!-- Card 3: Deine Daten -->
        <div class="bg-surface-50 rounded-xl flex flex-col p-[17.5px] gap-4 col-span-2">
          <h2 class="text-[17.5px] font-medium m-0">Deine Daten</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-sm">Name</label>
              <InputText v-model="name" placeholder="Name eingeben" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm">E-Mail</label>
              <InputText v-model="email" placeholder="E-Mail eingeben" />
            </div>
          </div>
          <div class="flex flex-col gap-1 mt-3">
            <label class="text-sm">Anmerkungen</label>
            <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="resize-none" />
          </div>
          <div class="flex items-center gap-3 mt-3">
            <ToggleSwitch v-model="reminder" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Erinnerung senden</span>
              <span class="text-[10px] font-light">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end items-center gap-3 mt-4">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Buchen" @click="showDialog = true" />
      </div>

    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showDialog" header="Buchung bestätigen" modal :style="{ width: '350px' }" :pt="{ root: { class: 'rounded-xl' }, header: { class: 'p-[17.5px] pb-0' }, content: { class: 'p-[17.5px]' }, footer: { class: 'p-[17.5px] pt-0' } }">
      <div class="flex flex-col gap-2 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm">Datum:</span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Zeit</span>
          <span class="text-sm font-semibold">{{ timeSlot }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ service }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showDialog = false" />
        <Button label="Bestätigen" @click="showDialog = false" />
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

const date = ref(new Date(2024, 0, 15));
const timeSlot = ref('11:00 - 12:30');
const service = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const reminder = ref(true);
const showDialog = ref(true);

const services = ref([
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
]);
</script>