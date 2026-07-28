<template>
  <div class="flex flex-col gap-6 p-8 max-w-3xl mx-auto font-sans bg-white">
    <Card 
      v-for="notification in notifications" 
      :key="notification.id"
      :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
      class="border border-surface-200 shadow-none rounded-lg overflow-hidden"
    >
      <template #content>
        <!-- Header -->
        <div class="flex justify-between items-center p-4 border-b border-surface-200">
          <div class="flex items-center gap-4">
            <Avatar 
              :label="notification.avatar" 
              shape="circle" 
              class="!bg-slate-200 !text-slate-600 font-medium" 
              size="large" 
            />
            <div class="flex flex-col">
              <span class="font-medium text-surface-700 text-lg">{{ notification.name }}</span>
              <span class="text-sm text-surface-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag 
            :value="notification.tagLabel" 
            :class="['font-bold px-3 py-1 !rounded-md', notification.tagClass]" 
          />
        </div>
        
        <!-- Body -->
        <div class="p-5 border-b border-surface-200 text-surface-700 text-base">
          {{ notification.content }}
        </div>
        
        <!-- Footer -->
        <div class="p-4 flex justify-end gap-3">
          <Button 
            label="Ablehnen" 
            class="!bg-slate-100 !text-slate-600 !border-none hover:!bg-slate-200 font-semibold px-5 py-2" 
          />
          <Button 
            label="Akzeptieren" 
            class="!bg-[#10b981] !text-white !border-none hover:!bg-[#059669] font-semibold px-5 py-2" 
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

const notifications = ref([
  {
    id: 1,
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagClass: '!bg-blue-100 !text-blue-700',
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagClass: '!bg-orange-100 !text-orange-700',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagClass: '!bg-red-100 !text-red-700',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>