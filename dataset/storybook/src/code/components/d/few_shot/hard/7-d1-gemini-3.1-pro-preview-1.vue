<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-3xl">
    <Card
      v-for="notification in notifications"
      :key="notification.id"
      :pt="{
        root: 'border border-surface-200 shadow-none rounded-xl',
        body: '!p-0',
        content: '!p-0'
      }"
    >
      <template #content>
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar
              :label="notification.user.initials"
              shape="circle"
              class="bg-surface-100 text-surface-700 font-normal"
            />
            <div class="flex flex-col">
              <span class="text-sm text-surface-900">{{ notification.user.name }}</span>
              <span class="text-xs text-surface-500">{{ notification.user.time }}</span>
            </div>
          </div>
          <Tag
            :value="notification.tag.label"
            :severity="notification.tag.severity"
          />
        </div>
        
        <Divider class="!my-0" />
        
        <div class="p-4 text-sm text-surface-700 leading-normal">
          {{ notification.content }}
        </div>
        
        <Divider class="!my-0" />
        
        <div class="flex items-center justify-end gap-2 p-4">
          <Button
            label="Ablehnen"
            severity="secondary"
            :pt="{ root: 'bg-surface-100 border-none text-surface-700 hover:bg-surface-200' }"
          />
          <Button
            label="Akzeptieren"
            severity="primary"
          />
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
    user: {
      name: 'Max Mustermann',
      initials: 'M',
      time: 'Vor 5 Minuten'
    },
    tag: {
      label: 'Einladung',
      severity: 'info'
    },
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    user: {
      name: 'Anna Schmidt',
      initials: 'A',
      time: 'Vor 24 Minuten'
    },
    tag: {
      label: 'Review',
      severity: 'warn'
    },
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    user: {
      name: 'Tom Fischer',
      initials: 'T',
      time: 'Vor 1 Stunde'
    },
    tag: {
      label: 'Zugriff',
      severity: 'danger'
    },
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>