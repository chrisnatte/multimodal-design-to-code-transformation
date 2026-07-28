<template>
  <div class="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
    <Card v-for="notification in notifications" :key="notification.id" class="shadow-sm border border-surface-200">
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Avatar :label="notification.initial" shape="circle" style="background-color: #e0e0e0; color: #4b5563" />
              <div class="flex flex-col">
                <span class="font-medium text-surface-900">{{ notification.name }}</span>
                <span class="text-sm text-surface-500">{{ notification.time }}</span>
              </div>
            </div>
            <Tag :value="notification.tag" :severity="notification.severity" rounded />
          </div>

          <Divider class="!my-0" />

          <p class="text-surface-700 m-0">
            {{ notification.message }}
          </p>

          <Divider class="!my-0" />

          <div class="flex justify-end gap-2">
            <Button label="Ablehnen" severity="secondary" variant="text" @click="reject(notification.id)" />
            <Button label="Akzeptieren" severity="success" @click="accept(notification.id)" />
          </div>
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
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    severity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    severity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    severity: 'danger',
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