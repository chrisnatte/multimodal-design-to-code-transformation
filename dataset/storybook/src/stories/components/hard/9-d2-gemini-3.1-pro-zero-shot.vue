<template>
  <div class="flex min-h-screen items-center justify-center bg-surface-900/40 p-4">
    <Dialog 
      v-model:visible="visible" 
      modal 
      :closable="true" 
      :style="{ width: '384px' }" 
      :pt="{
        root: { class: 'border-surface-200 rounded-xl shadow-lg' },
        header: { class: 'pb-0 border-b border-surface-200/50' },
        content: { class: 'pt-4 pb-4' },
        footer: { class: 'pt-0 border-t-0' }
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar 
            label="M" 
            size="large" 
            shape="circle" 
            class="bg-surface-200 text-surface-700 text-lg font-medium" 
          />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col">
        <!-- Steps Indicator -->
        <div class="flex items-center justify-center gap-2 mb-6 w-full">
          <span class="text-sm text-surface-500">Arzt wählen</span>
          <i class="pi pi-angle-right text-surface-400 text-xs"></i>
          <div class="border border-primary rounded-md px-2 py-0.5">
            <span class="text-sm text-primary">Termin wählen</span>
          </div>
          <i class="pi pi-angle-right text-surface-400 text-xs"></i>
          <span class="text-sm text-surface-500">Bestätigen</span>
        </div>

        <!-- Booking Form Fields -->
        <div class="flex flex-col gap-4">
          <!-- Date Picker -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-700">Datum</label>
            <DatePicker 
              v-model="selectedDate" 
              placeholder="Datum auswählen" 
              showIcon 
              iconDisplay="input" 
              fluid 
            >
              <template #inputicon="slotProps">
                <i class="pi pi-calendar text-surface-400" @click="slotProps.clickCallback"></i>
              </template>
            </DatePicker>
          </div>

          <!-- Time Picker -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-700">Uhrzeit</label>
            <DatePicker 
              v-model="selectedTime" 
              timeOnly 
              placeholder="Uhrzeit auswählen" 
              showIcon 
              iconDisplay="input" 
              fluid 
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock text-surface-400" @click="slotProps.clickCallback"></i>
              </template>
            </DatePicker>
          </div>

          <!-- Remark Textarea -->
          <div class="flex flex-col gap-1">
            <Textarea 
              v-model="remark" 
              rows="3" 
              placeholder="Anmerkung eingeben..." 
              fluid 
              style="resize: none;" 
              class="w-full"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between w-full mt-2">
          <Button 
            label="Zurück" 
            icon="pi pi-angle-left" 
            severity="secondary" 
            class="bg-surface-100 hover:bg-surface-200 text-surface-800 border-none font-medium px-4 py-2"
          />
          <Button 
            label="Weiter" 
            icon="pi pi-angle-right" 
            iconPos="right" 
            class="font-medium px-4 py-2"
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
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const selectedDate = ref(null);
const selectedTime = ref(null);
const remark = ref('');
</script>