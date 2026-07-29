<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :pt="{
      root: 'w-full max-w-[420px]',
      content: '!pt-0 !pb-6',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pt-2">
        <div class="flex items-center gap-3">
          <Avatar
            label="M"
            size="large"
            shape="circle"
            class="text-xl !bg-slate-100 !text-slate-700"
          />
          <div class="flex flex-col">
            <span class="text-lg font-medium leading-tight text-surface-900"
              >Dr. Mustermann</span
            >
            <span class="text-sm text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          text
          rounded
          severity="secondary"
          @click="visible = false"
          class="!text-surface-500"
        />
      </div>
    </template>

    <Divider class="!my-4" />

    <div class="mb-6 flex items-center justify-center gap-2 text-sm">
      <span class="text-surface-500">Arzt wählen</span>
      <i class="pi pi-angle-right text-xs text-surface-400"></i>
      <span
        class="rounded-full border border-emerald-500 px-3 py-1 text-emerald-500"
        >Termin wählen</span
      >
      <i class="pi pi-angle-right text-xs text-surface-400"></i>
      <span class="text-surface-500">Bestätigen</span>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Datum</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-calendar text-surface-400" />
          <DatePicker v-model="date" placeholder="Datum auswählen" fluid />
        </IconField>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Uhrzeit</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-clock text-surface-400" />
          <DatePicker
            v-model="time"
            timeOnly
            placeholder="Uhrzeit auswählen"
            fluid
          />
        </IconField>
      </div>

      <Textarea
        v-model="note"
        placeholder="Anmerkung eingeben..."
        rows="4"
        class="mt-2 w-full resize-none"
      />
    </div>

    <template #footer>
      <div class="mt-4 flex w-full justify-between">
        <Button
          label="Zurück"
          icon="pi pi-chevron-left"
          class="px-4 py-2 !bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200"
        />
        <Button
          label="Weiter"
          icon="pi pi-chevron-right"
          iconPos="right"
          class="px-4 py-2 !bg-[#10b981] !border-[#10b981] hover:!bg-[#059669]"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');
</script>