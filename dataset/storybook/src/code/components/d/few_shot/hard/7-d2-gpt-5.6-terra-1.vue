<template>
  <div class="flex w-[688px] flex-col gap-4 bg-white p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.name"
      :pt="{
        root: 'overflow-hidden rounded-xl border border-surface-100 shadow-sm',
        body: '!gap-0 !p-0',
        header: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-2 px-2.5 py-2.5">
          <div class="flex items-center gap-3">
            <Avatar
              :label="notification.initial"
              shape="circle"
              class="!h-7 !w-7 !text-sm"
            />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm leading-4">{{ notification.name }}</span>
              <span class="text-[10px] font-light leading-3">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.category" :severity="notification.severity" />
        </div>
        <Divider class="!my-0" />
      </template>

      <template #content>
        <div class="px-4 pt-4 text-sm leading-6">
          {{ notification.message }}
        </div>
        <Divider class="!my-3" />
        <div class="flex justify-end gap-2 px-4 pb-[17px]">
          <Button label="Ablehnen" severity="secondary" size="small" />
          <Button label="Akzeptieren" size="small" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = [
  {
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    category: 'Einladung',
    severity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    category: 'Review',
    severity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    category: 'Zugriff',
    severity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
]
</script>