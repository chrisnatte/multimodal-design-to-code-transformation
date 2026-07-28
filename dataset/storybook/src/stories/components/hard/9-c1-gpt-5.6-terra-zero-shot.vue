<template>
  <main class="min-h-screen">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      closable
      :draggable="false"
      class="w-[24rem]"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-600" size="large" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-slate-700">Dr. Mustermann</span>
            <span class="text-[11px] text-slate-500">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <nav class="flex items-center justify-center gap-2 whitespace-nowrap text-sm text-slate-500">
          <span>Arzt wählen</span>
          <i class="pi pi-angle-right text-xs text-slate-400"></i>
          <span class="rounded-full border border-emerald-500 px-1.5 py-0.5 text-emerald-700">
            Termin wählen
          </span>
          <i class="pi pi-angle-right text-xs text-slate-400"></i>
          <span>Bestätigen</span>
        </nav>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="date" class="text-sm font-medium text-slate-700">Datum</label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-calendar text-sm text-slate-400"></i>
              </InputGroupAddon>
              <InputText
                id="date"
                v-model="date"
                placeholder="Datum auswählen"
                class="w-full"
              />
            </InputGroup>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="time" class="text-sm font-medium text-slate-700">Uhrzeit</label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-clock text-sm text-slate-400"></i>
              </InputGroupAddon>
              <InputText
                id="time"
                v-model="time"
                placeholder="Uhrzeit auswählen"
                class="w-full"
              />
            </InputGroup>
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full resize-none"
          />
        </div>

        <div class="flex items-center justify-between border-t border-slate-100 pt-4">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
          <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="success" />
        </div>
      </div>
    </Dialog>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Textarea from 'primevue/textarea'

const dialogVisible = ref(true)
const date = ref('')
const time = ref('')
const note = ref('')
</script>