<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :pt="{
      root: 'w-full max-w-[450px]',
      header: 'p-6 pb-4',
      content: 'p-6 pt-0',
      footer: 'p-6 pt-0'
    }"
  >
    <template #header>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-100 text-slate-700 font-medium" />
          <div class="flex flex-col">
            <span class="font-medium text-slate-800 text-lg leading-tight">Dr. Mustermann</span>
            <span class="text-sm text-slate-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" @click="visible = false" class="text-slate-400 hover:text-slate-600" />
      </div>
    </template>

    <Divider class="!my-0 !mb-6" />

    <div class="flex items-center gap-2 text-sm mb-6 text-slate-500">
      <span>Arzt wählen</span>
      <i class="pi pi-angle-right text-xs"></i>
      <span class="border border-emerald-500 text-emerald-600 rounded-full px-3 py-1">Termin wählen</span>
      <i class="pi pi-angle-right text-xs"></i>
      <span>Bestätigen</span>
    </div>

    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label for="datum" class="text-sm text-slate-700">Datum</label>
        <DatePicker
          v-model="date"
          inputId="datum"
          placeholder="Datum auswählen"
          showIcon
          iconDisplay="input"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="uhrzeit" class="text-sm text-slate-700">Uhrzeit</label>
        <DatePicker
          v-model="time"
          inputId="uhrzeit"
          timeOnly
          placeholder="Uhrzeit auswählen"
          showIcon
          iconDisplay="input"
          icon="pi pi-clock"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2">
        <Textarea
          v-model="notes"
          placeholder="Anmerkung eingeben..."
          rows="4"
          class="w-full resize-none"
        />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-between w-full mt-2">
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          class="bg-slate-50 border-none text-slate-700 hover:bg-slate-100"
        />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          iconPos="right"
          class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const notes = ref('');
</script>