<template>
  <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto bg-surface-50 min-h-screen">
    <div 
      v-for="item in notifications" 
      :key="item.id" 
      class="bg-surface-0 border border-surface-200 rounded-xl flex flex-col shadow-sm"
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar 
            :label="item.avatar" 
            shape="circle" 
            class="bg-surface-100 text-surface-600 font-medium" 
          />
          <div class="flex flex-col">
            <span class="text-surface-900 font-medium">{{ item.name }}</span>
            <span class="text-surface-500 text-sm">{{ item.time }}</span>
          </div>
        </div>
        <Tag 
          :value="item.tagLabel" 
          :severity="item.tagSeverity" 
          class="font-medium px-3 py-1" 
        />
      </div>
      
      <Divider class="!m-0" />
      
      <!-- Content -->
      <div class="p-4 text-surface-700 leading-relaxed">
        {{ item.content }}
      </div>
      
      <Divider class="!m-0" />
      
      <!-- Footer -->
      <div class="flex justify-end gap-3 p-4">
        <Button 
          label="Ablehnen" 
          severity="secondary" 
          class="font-medium"
        />
        <Button 
          label="Akzeptieren" 
          severity="success" 
          class="font-medium"
        />
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
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>