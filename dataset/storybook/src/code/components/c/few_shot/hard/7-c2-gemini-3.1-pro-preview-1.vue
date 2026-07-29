<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-3xl mx-auto">
    <Card v-for="notification in notifications" :key="notification.id" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }" class="shadow-sm border border-slate-200">
      <template #content>
        <!-- Header -->
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initials" shape="circle" size="large" class="bg-slate-100 text-slate-600 font-medium" />
            <div class="flex flex-col">
              <span class="font-medium text-slate-800">{{ notification.name }}</span>
              <span class="text-sm text-slate-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" class="!rounded-md" />
        </div>

        <Divider class="!m-0" />

        <!-- Content -->
        <div class="p-4 text-slate-700 leading-relaxed">
          {{ notification.message }}
        </div>

        <Divider class="!m-0" />

        <!-- Footer -->
        <div class="p-4 flex justify-end gap-3">
          <Button label="Ablehnen" class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200" />
          <Button label="Akzeptieren" severity="success" class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669]" />
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
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const notifications = ref([
  {
    id: 1,
    initials: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initials: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initials: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>