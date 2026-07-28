<template>
  <div class="flex flex-col gap-4 p-6 max-w-2xl mx-auto bg-gray-50 min-h-screen">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar
            :label="notification.avatar"
            shape="circle"
            class="bg-gray-200 text-gray-600 font-medium"
          />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium text-sm">{{ notification.name }}</span>
            <span class="text-gray-400 text-xs">{{ notification.time }}</span>
          </div>
        </div>
        <Tag
          :value="notification.tag"
          :severity="notification.tagSeverity"
          class="text-xs font-medium"
        />
      </div>

      <div class="px-4 py-3 border-t border-gray-100">
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ notification.description }}
        </p>
      </div>

      <div class="flex items-center justify-end gap-2 px-4 py-3 border-t border-gray-100">
        <Button
          label="Ablehnen"
          variant="outlined"
          severity="secondary"
          size="small"
          class="text-xs"
          @click="handleReject(notification.id)"
        />
        <Button
          label="Akzeptieren"
          severity="success"
          size="small"
          class="text-xs"
          @click="handleAccept(notification.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const notifications = ref([
  {
    id: 1,
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    tagSeverity: 'info',
    description: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    tagSeverity: 'warning',
    description: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    tagSeverity: 'danger',
    description: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])

const handleAccept = (id) => {
  notifications.value = notifications.value.filter((n) => n.id !== id)
}

const handleReject = (id) => {
  notifications.value = notifications.value.filter((n) => n.id !== id)
}
</script>