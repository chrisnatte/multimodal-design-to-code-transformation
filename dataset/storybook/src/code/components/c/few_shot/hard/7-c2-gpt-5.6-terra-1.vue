<template>
  <div class="flex w-full max-w-2xl flex-col gap-4 p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.sender"
      class="overflow-hidden border border-surface-200 shadow-sm"
      :pt="{
        body: 'gap-0 !p-0',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between px-3 py-2">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.initial" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-medium text-surface-700">{{ notification.sender }}</span>
              <span class="text-xs text-surface-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.type" :severity="notification.severity" />
        </div>
      </template>

      <template #content>
        <Divider class="!my-0" />
        <p class="px-4 py-4 text-sm leading-5 text-surface-700">{{ notification.message }}</p>
        <Divider class="!my-0" />
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 px-4 py-5">
          <Button label="Ablehnen" severity="secondary" size="small" />
          <Button label="Akzeptieren" severity="success" size="small" />
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
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
  {
    initial: 'M',
    sender: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    severity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initial: 'A',
    sender: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    severity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initial: 'T',
    sender: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    severity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
])
</script>