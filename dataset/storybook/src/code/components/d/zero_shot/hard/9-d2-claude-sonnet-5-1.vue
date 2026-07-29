<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-500 p-10">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '24rem' }"
      class="rounded-xl"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" size="large" />
            <div class="flex flex-col">
              <span class="text-sm text-surface-900">Dr. Mustermann</span>
              <span class="text-xs text-surface-500">Allgemeinmedizin</span>
            </div>
          </div>
          <Button icon="pi pi-times" severity="secondary" text rounded @click="visible = false" />
        </div>
      </template>

      <Divider class="!mt-0" />

      <div class="flex flex-col gap-4 px-1">
        <Breadcrumb :model="breadcrumbItems" class="!p-0 !border-0">
          <template #item="{ item }">
            <span
              :class="[
                'text-sm',
                item.active ? 'border border-primary rounded-md px-2 py-1 text-primary' : 'text-surface-500 px-1'
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-surface-400 text-xs"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-surface-900">Datum</label>
          <DatePicker
            v-model="date"
            placeholder="Datum auswählen"
            showIcon
            iconDisplay="input"
            fluid
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-surface-900">Uhrzeit</label>
          <DatePicker
            v-model="time"
            timeOnly
            showIcon
            fluid
          >
            <template #inputicon="slotProps">
              <i class="pi pi-clock" @click="slotProps.clickCallback" />
            </template>
          </DatePicker>
        </div>

        <div class="flex flex-col gap-1">
          <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between w-full">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="visible = false" />
          <Button label="Weiter" iconPos="right" icon="pi pi-angle-right" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);
</script>