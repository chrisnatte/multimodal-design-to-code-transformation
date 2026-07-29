<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :style="{ width: '450px' }"
    :pt="{
      header: { class: 'border-b border-surface-200 pb-4' },
      content: { class: 'pt-4' },
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" class="bg-blue-100 text-blue-800" />
        <div class="flex flex-col">
          <span class="font-medium text-surface-900">Dr. Mustermann</span>
          <span class="text-sm text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex flex-col gap-6">
      <!-- Breadcrumb / Steps -->
      <div class="flex items-center justify-center gap-2 text-sm">
        <span class="text-surface-500">Arzt wählen</span>
        <i class="pi pi-angle-right text-surface-400 text-xs"></i>
        <span class="rounded-full border border-emerald-500 px-3 py-1 text-emerald-600">Termin wählen</span>
        <i class="pi pi-angle-right text-surface-400 text-xs"></i>
        <span class="text-surface-500">Bestätigen</span>
      </div>

      <!-- Form Fields -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="date" class="text-sm font-medium text-surface-700">Datum</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-calendar text-surface-400" />
            <InputText id="date" v-model="date" placeholder="Datum auswählen" class="w-full" />
          </IconField>
        </div>

        <div class="flex flex-col gap-2">
          <label for="time" class="text-sm font-medium text-surface-700">Uhrzeit</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-clock text-surface-400" />
            <InputText id="time" v-model="time" placeholder="Uhrzeit auswählen" class="w-full" />
          </IconField>
        </div>

        <div class="flex flex-col gap-2">
          <Textarea v-model="notes" rows="4" placeholder="Anmerkung eingeben..." class="w-full resize-none" />
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex w-full justify-between pt-2">
        <Button label="Zurück" icon="pi pi-angle-left" class="bg-blue-50 text-blue-800 border-none hover:bg-blue-100" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const visible = ref(true)
const date = ref('')
const time = ref('')
const notes = ref('')
</script>