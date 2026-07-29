<template>
  <div class="flex flex-col gap-4 bg-white p-6">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="flex flex-col rounded-xl border border-gray-200"
    >
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar :label="notification.initial" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">{{ notification.name }}</span>
            <span class="text-[10px] text-gray-500">{{ notification.time }}</span>
          </div>
        </div>
        <Tag :value="notification.tagText" :severity="notification.tagSeverity" />
      </div>
      <Divider class="!m-0" />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4 pt-4">
          <span class="text-sm">{{ notification.message }}</span>
        </div>
        <Divider class="!m-0" />
        <div class="flex justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Divider from 'primevue/divider'
  import Button from 'primevue/button'

  const notifications = ref([
    {
      id: 1,
      initial: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tagText: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      id: 2,
      initial: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tagText: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
      id: 3,
      initial: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tagText: 'Zugriff',
      tagSeverity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    },
  ])
</script>