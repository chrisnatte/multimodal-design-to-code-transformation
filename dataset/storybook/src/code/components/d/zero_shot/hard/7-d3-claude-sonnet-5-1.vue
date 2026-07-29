<template>
  <div class="p-6 bg-white flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <Card v-for="notification in notifications" :key="notification.id" class="border border-gray-200 rounded-xl shadow-none">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar :label="notification.avatarLabel" shape="circle" class="bg-blue-50 text-gray-700" />
                <div class="flex flex-col">
                  <span class="text-sm text-gray-800">{{ notification.name }}</span>
                  <span class="text-xs text-gray-400">{{ notification.time }}</span>
                </div>
              </div>
              <Tag :value="notification.tagText" :severity="notification.tagSeverity" />
            </div>

            <Divider class="!my-0" />

            <div class="flex flex-col gap-2 pb-4">
              <div class="px-4 pt-3">
                <p class="text-sm text-gray-700 m-0">{{ notification.message }}</p>
              </div>

              <Divider class="!my-0" />

              <div class="flex items-center justify-end gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" @click="onReject(notification.id)" />
                <Button label="Akzeptieren" @click="onAccept(notification.id)" class="!bg-emerald-500 !border-emerald-500" />
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
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
    avatarLabel: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagText: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatarLabel: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagText: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatarLabel: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagText: 'Zugriff',
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