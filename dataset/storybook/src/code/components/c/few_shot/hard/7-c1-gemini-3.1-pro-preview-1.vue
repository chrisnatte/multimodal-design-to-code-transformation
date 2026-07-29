<template>
  <div class="flex flex-col gap-6 p-6 max-w-3xl mx-auto font-sans">
    <Card
      v-for="notification in notifications"
      :key="notification.id"
      :pt="{
        root: 'border border-surface-200 shadow-none rounded-xl overflow-hidden',
        body: 'p-0',
        title: 'p-4 flex justify-between items-start m-0',
        content: 'p-4 border-y border-surface-200 text-surface-700',
        footer: 'p-4 flex justify-end gap-3 m-0'
      }"
    >
      <template #title>
        <div class="flex items-center gap-4">
          <Avatar 
            :label="notification.initials" 
            shape="circle" 
            size="large" 
            class="bg-surface-100 text-surface-600 font-medium" 
          />
          <div class="flex flex-col gap-0.5">
            <span class="text-surface-900 font-medium text-base">{{ notification.name }}</span>
            <span class="text-surface-500 text-sm font-normal">{{ notification.time }}</span>
          </div>
        </div>
        <Badge 
          :value="notification.type" 
          :severity="notification.typeSeverity" 
          class="mt-1" 
        />
      </template>
      <template #content>
        <p class="m-0 leading-relaxed">{{ notification.content }}</p>
      </template>
      <template #footer>
        <Button label="Ablehnen" severity="secondary" />
        <Button label="Akzeptieren" severity="primary" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Button from 'primevue/button'

type Severity = 'info' | 'warn' | 'danger' | 'success' | 'secondary' | 'contrast' | null | undefined;

const notifications = ref([
  {
    id: 1,
    initials: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    typeSeverity: 'info' as Severity,
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initials: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    typeSeverity: 'warn' as Severity,
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initials: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    typeSeverity: 'danger' as Severity,
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>