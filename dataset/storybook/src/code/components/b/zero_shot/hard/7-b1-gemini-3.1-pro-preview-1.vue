<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-full max-w-[688px]">
    <div class="flex flex-col gap-4">
      <div 
        v-for="notification in notifications" 
        :key="notification.id" 
        class="flex flex-col bg-white rounded-xl shadow-sm border border-surface-100"
      >
        <!-- Header -->
        <div class="flex flex-row justify-between items-center p-2.5">
          <div class="flex flex-row items-center gap-3">
            <Avatar 
              :label="notification.avatar" 
              shape="circle" 
              class="bg-[#e2e8f0] text-surface-700 font-normal text-sm" 
            />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-surface-900">{{ notification.name }}</span>
              <span class="text-[10px] font-light text-surface-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" />
        </div>
        
        <Divider class="!m-0" />
        
        <!-- Body -->
        <div class="flex flex-col gap-[7px] pb-[17.5px] pt-[7px]">
          <div class="flex flex-col px-4">
            <span class="text-sm font-normal text-surface-700 leading-snug">
              {{ notification.message }}
            </span>
          </div>
          
          <Divider class="!m-0" />
          
          <!-- Footer -->
          <div class="flex flex-row justify-end items-center gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" size="small" />
            <Button label="Akzeptieren" severity="primary" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const notifications = ref([
  {
    id: 1,
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>