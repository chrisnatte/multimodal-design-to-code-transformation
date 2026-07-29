<template>
  <div class="flex w-2xl flex-col gap-4 p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.name"
      :pt="{
        body: 'gap-4 !p-0',
        content: '!p-4 border-y border-surface-200',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between p-4 pb-0">
          <div class="flex items-center gap-2">
            <Avatar :label="notification.initial" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">{{ notification.name }}</span>
              <span class="text-xs text-surface-400">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tag" :severity="notification.severity" rounded />
        </div>
      </template>
      <template #content>
        <p class="m-0 text-sm">{{ notification.message }}</p>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 p-4 pt-0">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
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