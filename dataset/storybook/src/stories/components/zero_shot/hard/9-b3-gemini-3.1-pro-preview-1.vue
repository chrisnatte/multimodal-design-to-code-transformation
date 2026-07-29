<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :showHeader="false"
      class="w-[384px] bg-white rounded-xl border border-[#e2e8f0] overflow-hidden"
      :pt="{ content: { class: 'p-0' } }"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-[#e2e8f0] text-[#1e293b] text-[21px]" />
          <div class="flex flex-col">
            <span class="text-sm font-normal font-inter text-[#1e293b]">Dr. Mustermann</span>
            <span class="text-[10px] font-light font-inter text-[#64748b]">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" @click="visible = false" />
      </div>

      <Divider class="m-0 border-[#e2e8f0]" />

      <!-- Content -->
      <div class="flex flex-col gap-[7px] p-[17.5px]">
        <!-- Breadcrumb -->
        <Breadcrumb :model="breadcrumbItems" class="bg-white p-3.5 rounded-md">
          <template #item="{ item }">
            <div
              :class="[
                'text-sm font-normal font-inter',
                item.label === 'Termin wählen' ? 'border border-white rounded-md px-1' : 'text-[#64748b]'
              ]"
            >
              {{ item.label }}
            </div>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs text-[#cbd5e1]"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <!-- DatePicker Datum -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-normal font-inter text-[#1e293b]">Datum</label>
            <DatePicker
              v-model="date"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              fluid
              class="border-[#cbd5e1]"
            />
          </div>

          <!-- DatePicker Uhrzeit -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-normal font-inter text-[#1e293b]">Uhrzeit</label>
            <DatePicker
              v-model="time"
              timeOnly
              placeholder="Uhrzeit auswählen"
              showIcon
              iconDisplay="input"
              fluid
              class="border-[#cbd5e1]"
            >
              <template #inputicon>
                <i class="pi pi-clock"></i>
              </template>
            </DatePicker>
          </div>

          <!-- Textarea -->
          <div class="flex flex-col gap-1">
            <Textarea
              v-model="note"
              placeholder="Anmerkung eingeben..."
              rows="4"
              fluid
              class="border-[#cbd5e1] resize-none"
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between p-[17.5px]">
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          class="bg-[#f1f5f9] text-[#1e293b] font-medium text-sm px-4 py-2"
        />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          iconPos="right"
          class="bg-[#10b981] border-[#10b981] text-white font-medium text-sm px-4 py-2"
        />
      </div>
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
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);
</script>