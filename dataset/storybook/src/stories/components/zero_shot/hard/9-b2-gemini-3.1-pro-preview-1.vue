<template>
  <div class="min-h-screen flex items-center justify-center bg-surface-900 p-8">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :pt="{
        root: { class: 'w-full max-w-[384px] rounded-xl bg-white border border-surface-200 shadow-lg' },
        header: { class: 'p-4 pb-0' },
        content: { class: 'p-0' },
        footer: { class: 'p-4 pt-0' }
      }"
    >
      <template #header>
        <div class="flex items-center gap-3 w-full">
          <Avatar
            label="M"
            shape="circle"
            size="large"
            class="bg-surface-200 text-surface-700 text-xl font-normal"
          />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-surface-600">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col w-full">
        <Divider class="!m-0 !mt-4" />

        <div class="flex flex-col gap-4 p-4">
          <!-- Breadcrumb Steps -->
          <div class="flex items-center gap-2 bg-white rounded-md">
            <span class="text-sm font-normal text-surface-600">Arzt wählen</span>
            <i class="pi pi-chevron-right text-xs text-surface-400"></i>
            <div class="px-1 py-0.5 border border-surface-200 rounded-md">
              <span class="text-sm font-normal text-surface-900">Termin wählen</span>
            </div>
            <i class="pi pi-chevron-right text-xs text-surface-400"></i>
            <span class="text-sm font-normal text-surface-600">Bestätigen</span>
          </div>

          <!-- Form Fields -->
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-normal text-surface-900">Datum</label>
              <DatePicker
                v-model="date"
                showIcon
                iconDisplay="input"
                placeholder="Datum auswählen"
                fluid
              />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-normal text-surface-900">Uhrzeit</label>
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
                v-model="note"
                rows="4"
                placeholder="Anmerkung eingeben..."
                fluid
                class="resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between w-full mt-2">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            class="!bg-surface-100 !text-surface-900 !border-none hover:!bg-surface-200"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            iconPos="right"
            class="!bg-[#10B981] !border-none hover:!bg-[#059669] !text-white"
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
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');
</script>