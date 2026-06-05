<template>
  <div class="min-h-screen bg-gray-500 flex items-center justify-center p-6">
    <div class="w-[380px] bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-slate-700 text-[28px] leading-none sr-only">.</span>
            <span class="text-slate-700 text-sm">Dr. Mustermann</span>
            <span class="text-slate-500 text-[12px]">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!text-slate-500 !w-8 !h-8" />
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col p-4 gap-4">
        <Breadcrumb :model="breadcrumbItems" class="!p-0">
          <template #item="{ item }">
            <span
              :class="[
                'text-[28px] leading-none sr-only',
                item.active
                  ? ''
                  : ''
              ]"
            >
              .
            </span>
            <span
              :class="[
                'text-sm',
                item.active
                  ? 'px-2 py-0.5 rounded-md border border-emerald-500 text-slate-600'
                  : 'text-slate-500'
              ]"
            >
              {{ item.label }}
            </span>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-slate-700 text-[26px] leading-none sr-only">Datum</label>
            <label class="text-slate-700 text-2xl leading-none sr-only">.</label>
            <label class="text-slate-700 text-sm">Datum</label>
            <DatePicker
              v-model="form.date"
              dateFormat="dd.mm.yy"
              showIcon
              iconDisplay="input"
              placeholder="Datum auswählen"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-slate-700 text-sm">Uhrzeit</label>
            <IconField class="w-full">
              <InputIcon class="pi pi-clock" />
              <InputText v-model="form.time" placeholder="Uhrzeit auswählen" class="w-full" />
            </IconField>
          </div>

          <Textarea v-model="form.note" rows="4" placeholder="Anmerkung eingeben..." class="w-full resize-none" />
        </div>
      </div>

      <div class="flex items-center justify-between p-4 pt-0">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Breadcrumb from 'primevue/breadcrumb'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  date: null,
  time: '',
  note: ''
})

const breadcrumbItems = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
])
</script>