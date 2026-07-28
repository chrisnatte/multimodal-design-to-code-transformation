<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="bg-white rounded-xl overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-[10px]">
        <div class="flex items-center gap-3">
          <Avatar :label="notification.initial" shape="circle" style="background-color: #e2e8f0; color: #1a2551" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">{{ notification.name }}</span>
            <span class="text-[10px] text-gray-400">{{ notification.time }}</span>
          </div>
        </div>
        <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" />
      </div>

      <Divider class="!my-0" />

      <!-- Body -->
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <div class="px-4">
          <p class="text-sm text-gray-700 m-0">{{ notification.message }}</p>
        </div>

        <Divider class="!my-0" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" @click="onReject(notification.id)" />
          <Button label="Akzeptieren" severity="success" @click="onAccept(notification.id)" />
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
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);

const onAccept = (id) => {
  console.log('Accepted notification', id);
};

const onReject = (id) => {
  console.log('Rejected notification', id);
};
</script>