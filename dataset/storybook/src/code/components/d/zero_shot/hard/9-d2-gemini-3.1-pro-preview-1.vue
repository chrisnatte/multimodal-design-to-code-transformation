<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :style="{ width: '24rem' }"
      :pt="{
        root: { class: 'bg-white rounded-xl shadow-lg overflow-hidden' },
        header: { class: 'p-4 pb-0 border-b-0' },
        content: { class: 'p-4 pt-0' },
        footer: { class: 'p-4 pt-0 border-t-0' }
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar
            label="M"
            size="large"
            shape="circle"
            class="bg-slate-100 text-slate-700 font-medium"
          />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Dr. Mustermann</span>
            <span class="text-xs font-light text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <Divider class="my-4" />

      <div class="flex flex-col gap-6">
        <!-- Custom Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <span>Arzt wählen</span>
          <i class="pi pi-angle-right text-xs"></i>
          <span class="border border-emerald-500 text-emerald-600 rounded-full px-3 py-0.5">
            Termin wählen
          </span>
          <i class="pi pi-angle-right text-xs"></i>
          <span>Bestätigen</span>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700">Datum</label>
            <DatePicker
              v-model="date"
              showIcon
              iconDisplay="input"
              placeholder="Datum auswählen"
              fluid
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700">Uhrzeit</label>
            <DatePicker
              v-model="time"
              timeOnly
              showIcon
              iconDisplay="input"
              placeholder="Uhrzeit auswählen"
              fluid
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>

          <div class="flex flex-col gap-1">
            <Textarea
              v-model="notes"
              placeholder="Anmerkung eingeben..."
              rows="4"
              fluid
              class="resize-none"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between w-full mt-4">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            iconPos="right"
            class="bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const notes = ref('');
</script>