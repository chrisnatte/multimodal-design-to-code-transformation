<template>
  <div class="p-6 bg-white flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="border border-surface-200 rounded-xl w-full"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-2.5">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initial" shape="circle" class="bg-blue-100 text-surface-900" />
            <div class="flex flex-col">
              <span class="text-sm text-surface-900">{{ notification.name }}</span>
              <span class="text-[10px] font-light text-surface-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" />
        </div>

        <Divider class="!my-0" />

        <!-- Body -->
        <div class="flex flex-col gap-2 pb-4">
          <div class="px-4 pt-4">
            <p class="text-sm text-surface-900 m-0">{{ notification.message }}</p>
          </div>

          <Divider class="!my-0" />

          <div class="flex items-center justify-end gap-2 px-4">
            <Button
              label="Ablehnen"
              severity="secondary"
              @click="reject(notification.id)"
            />
            <Button
              label="Akzeptieren"
              severity="success"
              @click="accept(notification.id)"
            />
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

const accept = (id) => {
  console.log('Accepted notification', id);
};

const reject = (id) => {
  console.log('Rejected notification', id);
};
</script>