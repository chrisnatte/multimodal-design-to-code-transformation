<template>
  <div class="flex items-center justify-center min-h-screen bg-surface-500">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :style="{ width: '24rem' }"
      :draggable="false"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Dr. Mustermann</span>
            <span class="text-xs font-light text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col gap-4">
        <Breadcrumb :home="null" :model="breadcrumbItems">
          <template #item="{ item }">
            <span
              :class="[
                'text-sm px-1 rounded-md',
                item.active ? 'border border-primary-500 text-primary-500' : 'text-surface-500'
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs text-surface-400"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-surface-900">Datum</label>
          <DatePicker
            v-model="datum"
            showIcon
            iconDisplay="input"
            icon="pi pi-calendar"
            placeholder="Datum auswählen"
            fluid
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-surface-900">Uhrzeit</label>
          <DatePicker
            v-model="uhrzeit"
            timeOnly
            showIcon
            iconDisplay="input"
            icon="pi pi-clock"
            placeholder="Uhrzeit auswählen"
            fluid
          />
        </div>

        <Textarea
          v-model="anmerkung"
          placeholder="Anmerkung eingeben..."
          rows="4"
          class="w-full"
        />
      </div>

      <template #footer>
        <div class="flex justify-between w-full">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
          />
          <Button
            label="Weiter"
            iconPos="right"
            icon="pi pi-angle-right"
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
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const visible = ref(true);
const datum = ref(null);
const uhrzeit = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);
</script>