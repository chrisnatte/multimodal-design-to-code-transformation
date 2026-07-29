<template>
  <div class="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
    <Card
      v-for="item in notifications"
      :key="item.id"
      class="shadow-sm border border-surface-200 rounded-lg"
    >
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Avatar :label="item.initial" shape="circle" size="normal" />
              <div class="flex flex-col">
                <span class="font-medium text-sm text-color">{{ item.name }}</span>
                <span class="text-xs text-muted-color">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tagLabel" :severity="item.tagSeverity" rounded />
          </div>

          <Divider class="!my-0" />

          <p class="text-sm text-color m-0">{{ item.message }}</p>

          <Divider class="!my-0" />

          <div class="flex justify-end gap-2">
            <Button label="Ablehnen" severity="secondary" text />
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
</script>