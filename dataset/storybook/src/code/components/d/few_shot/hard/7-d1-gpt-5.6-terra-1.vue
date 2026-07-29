<template>
  <div class="flex w-full max-w-[688px] flex-col gap-4 bg-white p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.sender"
      class="w-full overflow-hidden"
      :pt="{
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex items-center justify-between gap-2 px-2.5 py-2.5">
          <div class="flex items-center gap-3">
            <Avatar
              :label="notification.initials"
              shape="circle"
              class="!h-7 !w-7 !text-sm"
            />
            <div class="flex flex-col">
              <span class="text-sm">{{ notification.sender }}</span>
              <span class="text-[10px] font-light">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.type" :severity="notification.severity" />
        </div>

        <Divider class="!my-0" />

        <div class="flex flex-col gap-2 pb-[17.5px]">
          <div class="px-4">
            <span class="text-sm leading-[23px]">{{ notification.message }}</span>
          </div>

          <Divider class="!my-0" />

          <div class="flex justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" severity="primary" />
          </div>
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
    initials: 'M',
    sender: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    severity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initials: 'A',
    sender: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    severity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initials: 'T',
    sender: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    severity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
]
</script>