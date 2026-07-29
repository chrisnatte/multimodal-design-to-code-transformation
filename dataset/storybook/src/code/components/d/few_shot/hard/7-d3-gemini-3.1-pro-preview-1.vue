<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-[688px]">
    <Card
      v-for="notification in notifications"
      :key="notification.id"
      class="border border-surface-200 shadow-none rounded-xl overflow-hidden"
      :pt="{ body: '!p-0', content: '!p-0' }"
    >
      <template #content>
        <div class="flex flex-col">
          <!-- Header -->
          <div class="flex justify-between items-center p-4">
            <div class="flex items-center gap-3">
              <Avatar :label="notification.avatar" shape="circle" class="bg-surface-100 text-surface-700" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">{{ notification.name }}</span>
                <span class="text-xs font-light text-surface-500">{{ notification.time }}</span>
              </div>
            </div>
            <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" />
          </div>
          
          <Divider class="!m-0" />
          
          <!-- Content -->
          <div class="p-4 text-sm text-surface-700">
            {{ notification.content }}
          </div>
          
          <Divider class="!m-0" />
          
          <!-- Footer -->
          <div class="flex justify-end gap-2 p-4">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" severity="primary" />
          </div>
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
    id: 1,
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>