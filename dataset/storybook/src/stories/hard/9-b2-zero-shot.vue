<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center py-[280px]">
    <div class="bg-white rounded-xl flex flex-col w-full max-w-2xl">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Close" />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col items-center gap-2 px-[17.5px] pb-[17.5px]">
        <div class="w-full p-3.5 flex items-center gap-2 rounded-md">
          <Breadcrumb :model="breadcrumbItems">
            <template #separator>
              <i class="pi pi-chevron-right text-xs"></i>
            </template>
          </Breadcrumb>
        </div>

        <div class="w-full flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="date" class="text-sm">Datum</label>
            <DatePicker
              id="date"
              v-model="form.date"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              fluid
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="time" class="text-sm">Uhrzeit</label>
            <DatePicker
              id="time"
              v-model="form.time"
              placeholder="Uhrzeit auswählen"
              timeOnly
              showIcon
              iconDisplay="input"
              fluid
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock cursor-pointer" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>

          <Textarea
            v-model="form.note"
            placeholder="Anmerkung eingeben..."
            rows="5"
            fluid
          />
        </div>
      </div>

      <div class="flex justify-between items-center gap-2 px-[17.5px] pb-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';
import Textarea from 'primevue/textarea';

const form = reactive({
  date: null,
  time: null,
  note: ''
});

const breadcrumbItems = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);
</script>