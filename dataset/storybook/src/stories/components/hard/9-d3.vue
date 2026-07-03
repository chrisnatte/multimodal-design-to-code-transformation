<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-6">
    <Dialog v-model:visible="state.visible" modal :closable="false" :draggable="false" :style="{ width: '24rem' }">
      <template #container>
        <div class="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" size="large" class="!bg-slate-200 !text-slate-700" />
              <div class="flex flex-col leading-tight">
                <span class="text-slate-700 text-[28px]"></span>
                <span class="text-slate-700 text-sm">Dr. Mustermann</span>
                <span class="text-slate-500 text-[11px]">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" text severity="secondary" rounded />
          </div>

          <Divider class="!my-0" />

          <div class="flex flex-col gap-4 p-4">
            <Breadcrumb :model="breadcrumbItems" class="!p-0 !bg-transparent">
              <template #item="{ item }">
                <span
                  :class="[
                    'text-sm',
                    item.active
                      ? 'border border-emerald-500 rounded-md px-2 py-0.5 text-slate-600'
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
                <label class="text-slate-700">Datum</label>
                <DatePicker
                  v-model="state.date"
                  showIcon
                  iconDisplay="input"
                  fluid
                  placeholder="Datum auswählen"
                  dateFormat="dd.mm.yy"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700">Uhrzeit</label>
                <DatePicker
                  v-model="state.time"
                  timeOnly
                  showIcon
                  iconDisplay="input"
                  fluid
                  placeholder="Uhrzeit auswählen"
                />
              </div>

              <Textarea
                v-model="state.note"
                rows="5"
                fluid
                placeholder="Anmerkung eingeben..."
                class="w-full"
              />
            </div>
          </div>

          <div class="flex items-center justify-between p-4 pt-0">
            <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
            <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import Breadcrumb from 'primevue/breadcrumb'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const state = reactive({
  visible: true,
  date: null,
  time: null,
  note: ''
})

const breadcrumbItems = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
])
</script>