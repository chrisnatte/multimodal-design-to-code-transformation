<template>
  <div class="min-h-screen bg-black/40 flex items-center justify-center p-6">
    <Dialog
      v-model:visible="state.visible"
      :modal="true"
      :closable="false"
      :draggable="false"
      :style="{ width: '24rem' }"
      contentClass="p-0"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!bg-slate-200 !text-slate-700" />
            <div class="flex flex-col">
              <span class="text-slate-700 text-2 leading-none">Dr. Mustermann</span>
              <span class="text-slate-500 text-xs">Allgemeinmedizin</span>
            </div>
          </div>
          <Button icon="pi pi-times" text rounded severity="secondary" @click="state.visible = false" />
        </div>

        <div class="px-6 py-5 flex flex-col gap-5">
          <div class="flex items-center gap-2 text-slate-500">
            <span>Arzt wählen</span>
            <i class="pi pi-angle-right text-xs"></i>
            <span class="px-2 py-0.5 border border-emerald-500 rounded-full text-emerald-600 leading-none">Termin wählen</span>
            <i class="pi pi-angle-right text-xs"></i>
            <span>Bestätigen</span>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-slate-700">Datum</label>
            <DatePicker
              v-model="state.date"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              fluid
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-slate-700">Uhrzeit</label>
            <InputText v-model="state.time" placeholder="Uhrzeit auswählen" fluid />
          </div>

          <Textarea
            v-model="state.note"
            placeholder="Anmerkung eingeben..."
            rows="5"
            fluid
            autoResize
          />

          <div class="flex items-center justify-between pt-1">
            <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
            <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="!bg-emerald-500 !border-emerald-500" />
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const state = reactive({
  visible: true,
  date: null,
  time: '',
  note: ''
})
</script>