<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="bg-white rounded-xl w-[640px]"
    >
      <div class="flex items-center justify-between gap-2.5 p-2.5">
        <div class="flex items-center gap-3">
          <Avatar :label="notification.avatarLabel" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">{{ notification.name }}</span>
            <span class="text-[10px] font-light">{{ notification.time }}</span>
          </div>
        </div>
        <Tag :value="notification.tagText" :severity="notification.severity" />
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm m-0">{{ notification.content }}</p>
        </div>

        <Divider class="!my-0" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
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
    avatarLabel: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagText: 'Einladung',
    severity: 'info',
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatarLabel: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagText: 'Review',
    severity: 'warn',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatarLabel: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagText: 'Zugriff',
    severity: 'danger',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>