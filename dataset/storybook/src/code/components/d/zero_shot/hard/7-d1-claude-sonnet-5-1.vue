<template>
  <div class="p-6 bg-white flex flex-col gap-4">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="w-full rounded-xl bg-white border border-surface-200"
    >
      <!-- header -->
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar :label="notification.avatarLabel" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">{{ notification.name }}</span>
            <span class="text-[10px] font-light text-surface-500">{{ notification.time }}</span>
          </div>
        </div>
        <Tag :value="notification.tagText" :severity="notification.tagSeverity" />
      </div>

      <Divider class="!my-0" />

      <!-- body -->
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4 pt-4">
          <span class="text-sm text-surface-800">{{ notification.message }}</span>
        </div>

        <Divider class="!my-0" />

        <!-- footer -->
        <div class="flex items-center justify-end gap-2 px-4">
          <Button
            label="Ablehnen"
            severity="secondary"
            @click="onReject(notification.id)"
          />
          <Button
            label="Akzeptieren"
            severity="primary"
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

const onAccept = (id) => {
  console.log('Accepted notification', id)
}

const onReject = (id) => {
  console.log('Rejected notification', id)
}
</script>