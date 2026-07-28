<template>
  <div class="flex flex-col gap-4 max-w-2xl mx-auto p-4 font-sans border-none bg-surface-50">
    <div 
      v-for="req in requests" 
      :key="req.id" 
      class="border border-surface-200 rounded-xl bg-white overflow-hidden flex flex-col shadow-sm"
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-3 px-4">
        <div class="flex items-center gap-3">
          <Avatar 
            :label="req.initial" 
            shape="circle" 
            class="bg-surface-200 text-surface-800 text-sm font-normal w-7 h-7 flex items-center justify-center p-0" 
          />
          <div class="flex flex-col justify-center">
            <span class="text-sm text-surface-900 leading-tight mb-0.5">{{ req.name }}</span>
            <span class="text-[10px] text-surface-500 font-light leading-tight">{{ req.time }}</span>
          </div>
        </div>
        <Tag 
          :value="req.tagRequired" 
          :severity="req.tagSeverity" 
          class="text-xs font-bold px-2 py-1 bg-opacity-20" 
          :style="{ color: req.tagColor, backgroundColor: req.tagBg }"
        />
      </div>
      
      <Divider class="m-0" />
      
      <!-- Body content -->
      <div class="px-4 py-5 text-sm text-surface-800 leading-relaxed break-words">
        {{ req.message }}
      </div>

      <Divider class="m-0" />
      
      <!-- Footer -->
      <div class="flex justify-end gap-2 p-3 px-4 bg-white items-center">
        <Button 
          label="Ablehnen" 
          severity="secondary"
          class="text-sm font-medium px-4 py-1.5 h-[33px] bg-slate-100 hover:bg-slate-200 text-slate-700 border-none" 
        />
        <Button 
          label="Akzeptieren" 
          class="text-sm font-medium px-4 py-1.5 h-[33px] bg-[#10b981] hover:bg-[#059669] border-[#10b981] text-white" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const requests = ref([
  {
    id: 1,
    name: 'Max Mustermann',
    initial: 'M',
    time: 'Vor 5 Minuten',
    tagRequired: 'Einladung',
    tagSeverity: 'info',
    tagColor: '#0c6396',
    tagBg: '#e0f2fe',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initial: 'A',
    time: 'Vor 24 Minuten',
    tagRequired: 'Review',
    tagSeverity: 'warn',
    tagColor: '#c2410c',
    tagBg: '#ffedd5',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    name: 'Tom Fischer',
    initial: 'T',
    time: 'Vor 1 Stunde',
    tagRequired: 'Zugriff',
    tagSeverity: 'danger',
    tagColor: '#b91c1c',
    tagBg: '#fee2e2',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>