<template>
  <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto">
    <Card v-for="notification in notifications" :key="notification.id">
      <template #header>
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initials" shape="circle" :style="{ backgroundColor: '#e2e8f0', color: '#475569' }" />
            <div class="flex flex-col">
              <span class="font-medium text-gray-900">{{ notification.name }}</span>
              <span class="text-sm text-gray-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tag" :severity="notification.tagSeverity" rounded />
        </div>
      </template>
      <template #content>
        <Divider class="my-4" />
        <p class="text-gray-700 leading-relaxed">
          {{ notification.message }}
        </p>
        <Divider class="my-4" />
        <div class="flex justify-end gap-2">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
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
    initials: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initials: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initials: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>