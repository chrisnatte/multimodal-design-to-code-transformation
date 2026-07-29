<template>
  <div class="flex flex-col gap-6 p-6 max-w-3xl mx-auto font-sans bg-white">
    <Card 
      v-for="notification in notifications" 
      :key="notification.id" 
      class="border border-gray-200 shadow-none rounded-xl overflow-hidden"
      :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
    >
      <template #content>
        <!-- Header Section -->
        <div class="p-4 flex justify-between items-start">
          <div class="flex items-center gap-4">
            <Avatar 
              :label="notification.initial" 
              shape="circle" 
              class="bg-gray-200 text-gray-600 font-medium text-lg" 
              size="large" 
            />
            <div class="flex flex-col">
              <span class="text-gray-800 font-medium text-base">{{ notification.name }}</span>
              <span class="text-gray-500 text-sm">{{ notification.time }}</span>
            </div>
          </div>
          <Tag 
            :value="notification.tagLabel" 
            :severity="notification.tagSeverity" 
            class="px-3 py-1 text-sm font-semibold"
            :pt="{ root: { class: notification.tagBgClass } }"
          />
        </div>
        
        <Divider class="m-0 border-gray-100" />
        
        <!-- Content Section -->
        <div class="p-5 text-gray-700 text-base leading-relaxed">
          {{ notification.message }}
        </div>
        
        <Divider class="m-0 border-gray-100" />
        
        <!-- Footer Section -->
        <div class="p-4 flex justify-end gap-3">
          <Button 
            label="Ablehnen" 
            severity="secondary" 
            class="bg-gray-100 border-none text-gray-700 hover:bg-gray-200 font-medium px-5 py-2" 
          />
          <Button 
            label="Akzeptieren" 
            severity="success" 
            class="bg-emerald-500 border-none hover:bg-emerald-600 font-medium px-5 py-2" 
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const notifications = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    tagBgClass: 'bg-blue-100 text-blue-700',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    tagBgClass: 'bg-orange-100 text-orange-700',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    tagBgClass: 'bg-red-100 text-red-700',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>