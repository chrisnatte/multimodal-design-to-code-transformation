<template>
  <div class="flex w-xl flex-col gap-4 p-4">
    <Card
      v-for="notification in notifications"
      :key="notification.name"
      :pt="{
        body: '!p-0 !gap-0',
        content: 'flex flex-col',
      }"
    >
      <template #content>
        <div class="flex items-center justify-between p-4 pb-3">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initial" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">{{ notification.name }}</span>
              <span class="text-xs text-gray-400">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tag" :severity="notification.severity" rounded />
        </div>
        <Divider class="!my-0" />
        <p class="p-4 text-sm text-gray-600">{{ notification.message }}</p>
        <Divider class="!my-0" />
        <div class="flex justify-end gap-2 p-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Divider from 'primevue/divider'
  import Button from 'primevue/button'

  const notifications = ref([
    {
      name: 'Max Mustermann',
      initial: 'M',
      time: 'Vor 5 Minuten',
      tag: 'Einladung',
      severity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      name: 'Anna Schmidt',
      initial: 'A',
      time: 'Vor 24 Minuten',
      tag: 'Review',
      severity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
      name: 'Tom Fischer',
      initial: 'T',
      time: 'Vor 1 Stunde',
      tag: 'Zugriff',
      severity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    },
  ])
</script>