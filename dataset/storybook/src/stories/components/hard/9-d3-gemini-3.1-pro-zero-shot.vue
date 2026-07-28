<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const selectedDate = ref(null)
const selectedTime = ref(null)
const notes = ref('')
</script>

<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-sans text-surface-900">
    <div class="bg-white rounded-[12px] w-[384px] border border-surface-200 overflow-hidden flex flex-col shadow-lg">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-surface-100 text-surface-700 text-xl font-normal !w-[42px] !h-[42px]" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900 leading-snug">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-surface-500 leading-tight">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" variant="text" severity="secondary" aria-label="Close" class="!text-surface-400 hover:!bg-surface-100 !w-7 !h-7 !p-0" />
      </div>

      <Divider class="!m-0 border-surface-200" />

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] items-stretch">
        
        <!-- Breadcrumb Steps -->
        <div class="flex items-center gap-2 mb-6">
          <span class="text-sm font-normal text-surface-500 cursor-pointer">Arzt wählen</span>
          <i class="pi pi-angle-right text-[12px] text-surface-400"></i>
          <span class="border border-primary text-primary text-sm font-normal rounded-full px-2.5 py-0.5 cursor-pointer">Termin wählen</span>
          <i class="pi pi-angle-right text-[12px] text-surface-400"></i>
          <span class="text-sm font-normal text-surface-500 cursor-pointer">Bestätigen</span>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-[16px]">
          
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-normal text-surface-700">Datum</label>
            <DatePicker 
              v-model="selectedDate" 
              placeholder="Datum auswählen" 
              showIcon 
              iconDisplay="input"
              fluid
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-normal text-surface-700">Uhrzeit</label>
            <DatePicker 
              v-model="selectedTime" 
              timeOnly
              placeholder="Uhrzeit auswählen" 
              showIcon 
              iconDisplay="input"
              icon="pi pi-clock"
              fluid
            />
          </div>

          <div class="flex flex-col mt-1">
            <Textarea 
              v-model="notes" 
              placeholder="Anmerkung eingeben..."
              rows="4"
              fluid
              class="resize-none"
            />
          </div>

        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between p-[17.5px] pb-5">
        <Button 
          label="Zurück" 
          icon="pi pi-angle-left" 
          severity="secondary" 
          class="!font-medium !text-sm !bg-surface-100 !text-surface-700 !border-none hover:!bg-surface-200" 
        />
        <Button 
          label="Weiter" 
          icon="pi pi-angle-right" 
          iconPos="right" 
          class="!font-medium !text-sm !bg-[#10b981] !text-white !border-none hover:!bg-[#059669]" 
        />
      </div>
      
    </div>
  </div>
</template>