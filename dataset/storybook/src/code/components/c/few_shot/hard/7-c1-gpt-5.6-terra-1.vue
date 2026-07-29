<template>
  <div class="flex w-full max-w-[688px] flex-col gap-4 p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.name"
      :pt="{
        root: 'overflow-hidden border border-surface-100 shadow-sm',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex items-start justify-between px-4 py-3">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initials" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-medium text-surface-700">{{ notification.name }}</span>
              <span class="text-xs text-surface-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.type" :severity="notification.severity" />
        </div>

        <div class="border-y border-surface-200 px-4 py-4">
          <p class="m-0 text-sm leading-6 text-surface-700">{{ notification.message }}</p>
        </div>

        <div class="flex justify-end gap-2 px-4 py-5">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'

  const notifications = ref([
    {
      initials: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      type: 'Einladung',
      severity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      initials: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      type: 'Review',
      severity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
      initials: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      type: 'Zugriff',
      severity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    },
  ])
</script>