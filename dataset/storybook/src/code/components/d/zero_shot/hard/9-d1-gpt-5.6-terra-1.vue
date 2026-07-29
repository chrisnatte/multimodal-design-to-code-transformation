<template>
  <div class="min-h-screen bg-white">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '384px' }"
      :pt="{
        mask: { class: 'bg-black/35' },
        root: { class: 'overflow-hidden rounded-xl border border-slate-200 shadow-2xl' },
        content: { class: '!p-0' }
      }"
    >
      <div class="flex flex-col bg-white">
        <header class="flex h-[74px] items-center justify-between px-4 py-4">
          <div class="flex items-center gap-3">
            <Avatar
              label="M"
              shape="circle"
              class="h-[42px] w-[42px] !bg-slate-200 !text-[21px] !text-slate-700"
            />
            <div class="flex flex-col">
              <span class="text-sm font-normal leading-[17px] text-slate-700">Dr. Mustermann</span>
              <span class="text-[10px] font-light leading-3 text-slate-500">Allgemeinmedizin</span>
            </div>
          </div>

          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Schließen"
            class="!h-7 !w-[35px] !p-0 !text-slate-500"
            @click="visible = false"
          />
        </header>

        <Divider class="!m-0" />

        <main class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
          <nav class="flex h-[42px] items-center gap-[7px] px-[14px] py-[14px] text-sm text-slate-500">
            <span>Arzt wählen</span>
            <i class="pi pi-chevron-right text-xs"></i>
            <span class="rounded-md border border-emerald-500 px-1 text-slate-500">Termin wählen</span>
            <i class="pi pi-chevron-right text-xs"></i>
            <span>Bestätigen</span>
          </nav>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-[7px]">
              <label for="date" class="text-sm leading-[21px] text-slate-700">Datum</label>
              <IconField iconPosition="left">
                <InputIcon class="pi pi-calendar !text-sm !text-slate-400" />
                <InputText
                  id="date"
                  v-model="date"
                  placeholder="Datum auswählen"
                  class="h-[34px] w-full !rounded-md !border-slate-300 !py-[7px] !pl-9 !pr-[10.5px] !text-sm !text-slate-600"
                />
              </IconField>
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="time" class="text-sm leading-[21px] text-slate-700">Uhrzeit</label>
              <IconField iconPosition="left">
                <InputIcon class="pi pi-clock !text-sm !text-slate-400" />
                <InputText
                  id="time"
                  v-model="time"
                  placeholder="Uhrzeit auswählen"
                  class="h-[34px] w-full !rounded-md !border-slate-300 !py-[7px] !pl-9 !pr-[10.5px] !text-sm !text-slate-600"
                />
              </IconField>
            </div>

            <Textarea
              v-model="note"
              placeholder="Anmerkung eingeben..."
              rows="4"
              class="h-[101px] w-full resize-none !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm !text-slate-600"
            />
          </div>
        </main>

        <footer class="flex h-[50.5px] items-start justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            class="!h-[33px] !border-0 !bg-slate-100 !px-[11.5px] !py-2 !text-sm !font-medium !text-slate-600"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            iconPos="right"
            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-[11.5px] !py-2 !text-sm !font-medium"
          />
        </footer>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const date = ref('')
const time = ref('')
const note = ref('')
</script>