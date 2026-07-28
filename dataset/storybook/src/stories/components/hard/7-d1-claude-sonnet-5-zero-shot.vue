<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="bg-white rounded-xl border border-surface-200 overflow-hidden"
    >
      <!-- header -->
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar :label="notification.avatarLabel" shape="circle" class="bg-surface-200" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">{{ notification.name }}</span>
            <span class="text-[10px] text-surface-500">{{ notification.time }}</span>
          </div>
        </div>
        <Tag :value="notification.tagText" :severity="notification.tagSeverity" />
      </div>

      <Divider class="!m-0" />

      <!-- body -->
      <div class="flex flex-col gap-1.5 pb-4">
        <div class="px-4 pt-2">
          <p class="text-sm text-surface-700 m-0">{{ notification.message }}</p>
        </div>

        <Divider class="!m-0" />

        <div class="flex items-center justify-end gap-2 px-4 pt-2">
          <Button
            label="Ablehnen"
            severity="secondary"
            @click="onReject(notification.id)"
          />
          <Button
            label="Akzeptieren"
            style="background-color:#10b981;border-color:#10b981;"
            @click="onAccept(notification.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const notifications = ref([
  {
    id: 1,
    avatarLabel: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagText: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatarLabel: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagText: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatarLabel: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagText: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])

function onReject(id) {
  console.log('Rejected notification', id)
}

function onAccept(id) {
  console.log('Accepted notification', id)
}
</script>