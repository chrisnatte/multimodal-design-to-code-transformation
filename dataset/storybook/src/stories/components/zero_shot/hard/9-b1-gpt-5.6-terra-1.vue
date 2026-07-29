<template>
  <div class="h-[768px] w-[768px] bg-white">
    <div class="flex h-full w-full flex-col items-center justify-center bg-black py-[280px]">
      <section class="flex w-[384px] flex-col rounded-xl border border-[#e2e8f0] bg-white">
        <header class="flex items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" size="large" class="bg-[#e2e8f0] text-surface-700" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm font-normal text-surface-900">Dr. Mustermann</span>
              <span class="text-[10px] font-light text-surface-700">Allgemeinmedizin</span>
            </div>
          </div>

          <div class="flex w-[35px] flex-col gap-[7px]">
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Dialog schließen"
              class="h-7 w-[35px]"
            />
          </div>
        </header>

        <Divider class="my-0" />

        <main class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
          <Breadcrumb :model="breadcrumbItems" class="w-full rounded-md px-[14px] py-[14px]" />

          <div class="flex w-full flex-col gap-4">
            <div class="flex flex-col gap-[7px]">
              <label for="appointment-date" class="text-sm font-normal text-surface-900">Datum</label>
              <DatePicker
                id="appointment-date"
                v-model="appointmentDate"
                placeholder="Datum auswählen"
                show-icon
                icon-display="input"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="appointment-time" class="text-sm font-normal text-surface-900">Uhrzeit</label>
              <DatePicker
                id="appointment-time"
                v-model="appointmentTime"
                placeholder="Uhrzeit auswählen"
                time-only
                show-icon
                icon-display="input"
                class="w-full"
              />
            </div>

            <Textarea
              v-model="note"
              placeholder="Anmerkung eingeben..."
              rows="4"
              class="h-[101px] w-full resize-none"
              aria-label="Anmerkung"
            />
          </div>
        </main>

        <footer class="flex items-center justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
          <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" />
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const breadcrumbItems = [
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]
</script>