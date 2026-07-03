<template>
  <div class="min-h-screen bg-black/40 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="state.visible"
      :modal="true"
      :closable="false"
      :draggable="false"
      :dismissableMask="true"
      :style="{ width: '24rem' }"
      contentClass="!p-0"
    >
      <template #container>
        <div class="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <div class="flex items-center justify-between px-4 py-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="!bg-slate-200 !text-slate-700" />
              <div class="flex flex-col leading-tight">
                <span class="text-slate-700 font-medium">Dr. Mustermann</span>
                <span class="text-slate-500 text-sm">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" variant="text" rounded severity="secondary" aria-label="Schließen" @click="state.visible = false" />
          </div>

          <Divider class="!my-0" />

          <div class="flex flex-col gap-4 px-4 py-5">
            <div class="flex items-center gap-2 text-slate-500">
              <span>Arzt wählen</span>
              <i class="pi pi-angle-right text-xs"></i>
              <span class="px-2 py-0.5 rounded-full border border-emerald-500 text-emerald-600 leading-none">Termin wählen</span>
              <i class="pi pi-angle-right text-xs"></i>
              <span>Bestätigen</span>
            </div>

            <div class="flex flex-col gap-2">
              <label for="date" class="text-slate-700">Datum</label>
              <DatePicker
                inputId="date"
                v-model="state.date"
                placeholder="Datum auswählen"
                showIcon
                iconDisplay="input"
                dateFormat="dd.mm.yy"
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="time" class="text-slate-700">Uhrzeit</label>
              <DatePicker
                inputId="time"
                v-model="state.time"
                placeholder="Uhrzeit auswählen"
                timeOnly
                iconDisplay="input"
                showIcon
                fluid
              />
            </div>

            <Textarea
              v-model="state.note"
              placeholder="Anmerkung eingeben..."
              rows="4"
              fluid
              class="!resize-none"
            />

            <div class="flex items-center justify-between pt-1">
              <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
              <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
            </div>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const state = reactive({
  visible: true,
  date: null,
  time: null,
  note: ''
});
</script>