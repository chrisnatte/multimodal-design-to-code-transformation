<template>
  <div class="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
    <Card v-for="item in items" :key="item.id">
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Avatar :label="item.initials" shape="circle" />
              <div class="flex flex-col">
                <span class="font-medium text-gray-900">{{ item.name }}</span>
                <span class="text-sm text-gray-500">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tag" :severity="item.tagSeverity" />
          </div>

          <Divider />

          <p class="text-gray-700 m-0">{{ item.message }}</p>

          <Divider />

          <div class="flex justify-end gap-2">
            <Button label="Ablehnen" variant="outlined" severity="secondary" />
            <Button label="Akzeptieren" severity="success" />
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
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const items = ref([
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