<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-6">
    <Dialog
      :visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '380px' }"
      class="rounded-xl"
    >
      <template #container>
        <div class="bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" size="large" class="!bg-slate-100 !text-slate-600" />
              <div class="flex flex-col">
                <span class="text-slate-700 text-[28px]/[1]"></span>
                <span class="text-slate-700 text-sm">Dr. Mustermann</span>
                <span class="text-slate-500 text-[12px]">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" variant="text" rounded aria-label="Schließen" class="!text-slate-500" @click="state.visible = false" />
          </div>

          <Divider class="!m-0" />

          <div class="px-4 pt-4 pb-5 flex flex-col gap-4">
            <Breadcrumb :model="breadcrumbItems" class="!p-0 !bg-transparent">
              <template #item="{ item }">
                <span
                  :class="[
                    'text-[29px]/[1]',
                    item.active
                      ? 'border border-emerald-500 rounded-md px-2 py-[2px] text-slate-500'
                      : 'text-slate-500'
                  ]"
                >
                  {{ item.label }}
                </span>
              </template>
              <template #separator>
                <i class="pi pi-angle-right text-slate-400 text-xs"></i>
              </template>
            </Breadcrumb>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-slate-700 text-[28px]/[1]"></label>
                <label for="date" class="text-slate-700 text-[26px]/[1]"></label>
                <span class="text-slate-700 text-[27px]/[1]"></span>
                <label for="date" class="text-slate-700 text-[28px]/[1]"></label>
                <label for="date" class="text-slate-700 text-[14px]">Datum</label>
                <DatePicker
                  v-model="state.date"
                  inputId="date"
                  placeholder="Datum auswählen"
                  showIcon
                  iconDisplay="input"
                  dateFormat="dd.mm.yy"
                  fluid
                  :pt="{ inputicon: { class: 'pi pi-calendar' } }"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="time" class="text-slate-700 text-[14px]">Uhrzeit</label>
                <DatePicker
                  v-model="state.time"
                  inputId="time"
                  placeholder="Uhrzeit auswählen"
                  timeOnly
                  showIcon
                  iconDisplay="input"
                  fluid
                >
                  <template #inputicon="slotProps">
                    <i class="pi pi-clock text-slate-400 cursor-pointer" @click="slotProps.clickCallback" />
                  </template>
                </DatePicker>
              </div>

              <Textarea
                v-model="state.note"
                rows="5"
                fluid
                placeholder="Anmerkung eingeben..."
                class="!resize-none"
              />
            </div>
          </div>

          <div class="px-4 pb-4 flex items-center justify-between">
            <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
            <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600" />
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
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const state = reactive({
  visible: true,
  date: null,
  time: null,
  note: ''
});

const breadcrumbItems = [
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
];
</script>