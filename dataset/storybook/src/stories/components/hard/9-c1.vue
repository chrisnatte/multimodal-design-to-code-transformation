<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-6">
    <Card class="w-full max-w-[380px] rounded-2xl shadow-2xl overflow-hidden">
      <template #content>
        <div class="flex flex-col -m-4">
          <div class="flex items-center justify-between px-5 pt-5 pb-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-600" size="large" />
              <div class="flex flex-col leading-tight">
                <span class="text-slate-700 text-2 font-medium">Dr. Mustermann</span>
                <span class="text-slate-500 text-xs">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" text rounded severity="secondary" class="!text-slate-500" />
          </div>

          <Divider class="!my-0" />

          <div class="px-5 py-4 flex flex-col gap-4">
            <Steps :model="steps" :activeStep="1" readonly class="appointment-steps" />

            <div class="flex flex-col gap-2">
              <label class="text-slate-700 text-xl">Datum</label>
              <IconField>
                <InputIcon class="pi pi-calendar" />
                <InputText v-model="form.date" placeholder="Datum auswählen" class="w-full" />
              </IconField>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-slate-700 text-xl">Uhrzeit</label>
              <IconField>
                <InputIcon class="pi pi-clock" />
                <InputText v-model="form.time" placeholder="Uhrzeit auswählen" class="w-full" />
              </IconField>
            </div>

            <Textarea
              v-model="form.note"
              placeholder="Anmerkung eingeben..."
              rows="5"
              autoResize
              class="w-full"
            />

            <div class="flex items-center justify-between pt-1">
              <Button label="Zurück" icon="pi pi-chevron-left" severity="secondary" />
              <Button label="Weiter" icon="pi pi-chevron-right" iconPos="right" severity="success" />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Steps from 'primevue/steps'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  date: '',
  time: '',
  note: ''
})

const steps = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])
</script>