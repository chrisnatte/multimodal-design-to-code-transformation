<template>
  <div class="flex min-h-screen items-center justify-center bg-black/40">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      :dismissableMask="false"
      :style="{ width: '384px' }"
      contentClass="!p-0"
    >
      <div class="flex flex-col overflow-hidden rounded-xl">
        <header class="flex items-center justify-between px-4 py-4">
          <div class="flex items-center gap-3">
            <Avatar
              label="M"
              size="large"
              shape="circle"
              class="!h-[42px] !w-[42px] !bg-slate-200 !text-[21px] !text-slate-600"
            />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-slate-700">Dr. Mustermann</span>
              <span class="text-[10px] font-light text-slate-500">Allgemeinmedizin</span>
            </div>
          </div>

          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Schließen"
            class="!h-7 !w-9 !p-0"
            @click="visible = false"
          />
        </header>

        <Divider class="!m-0" />

        <main class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
          <Breadcrumb
            :model="steps"
            class="!border-0 !bg-transparent !px-[14px] !py-[14px]"
          >
            <template #item="{ item }">
              <span
                :class="[
                  'whitespace-nowrap text-sm font-normal text-slate-500',
                  item.active && 'rounded-md border border-emerald-500 px-1 text-slate-500'
                ]"
              >
                {{ item.label }}
              </span>
            </template>
            <template #separator>
              <i class="pi pi-chevron-right text-xs text-slate-400"></i>
            </template>
          </Breadcrumb>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-[7px]">
              <label for="appointment-date" class="text-sm font-normal text-slate-700">Datum</label>
              <div class="relative">
                <i class="pi pi-calendar pointer-events-none absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
                <DatePicker
                  id="appointment-date"
                  v-model="appointmentDate"
                  placeholder="Datum auswählen"
                  dateFormat="dd.mm.yy"
                  class="w-full"
                  inputClass="!h-[34px] !w-full !rounded-md !border-slate-300 !pl-9 !text-sm"
                />
              </div>
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="appointment-time" class="text-sm font-normal text-slate-700">Uhrzeit</label>
              <div class="relative">
                <i class="pi pi-clock pointer-events-none absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
                <DatePicker
                  id="appointment-time"
                  v-model="appointmentTime"
                  timeOnly
                  hourFormat="24"
                  placeholder="Uhrzeit auswählen"
                  class="w-full"
                  inputClass="!h-[34px] !w-full !rounded-md !border-slate-300 !pl-9 !text-sm"
                />
              </div>
            </div>

            <Textarea
              v-model="note"
              placeholder="Anmerkung eingeben..."
              rows="4"
              class="!h-[101px] !w-full !resize-none !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm"
            />
          </div>
        </main>

        <footer class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            class="!h-[33px] !bg-slate-100 !px-[11px] !text-sm !text-slate-600"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            iconPos="right"
            class="!h-[33px] !px-[11px] !text-sm"
          />
        </footer>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
])
</script>