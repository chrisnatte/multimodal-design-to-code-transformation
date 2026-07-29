<template>
  <div class="flex w-fit flex-col gap-4 bg-white p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.id"
      :pt="{
        root: 'w-[640px] rounded-xl bg-white border border-surface-200 shadow-none',
        body: '!p-0',
        title: '!p-0',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #title>
        <div class="flex items-center justify-between p-2.5">
          <div class="flex items-center gap-3">
            <Avatar :label="notification.avatar" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-normal">{{ notification.name }}</span>
              <span class="text-surface-500 text-[10px] font-light">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.tagLabel" :severity="notification.tagSeverity" />
        </div>
        <Divider class="!m-0" />
      </template>
      <template #content>
        <div class="px-4 py-4">
          <p class="m-0 text-sm font-normal">{{ notification.message }}</p>
        </div>
        <Divider class="!m-0" />
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 px-4 py-3">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
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
      message:
        'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      id: 2,
      avatar: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tagLabel: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
      id: 3,
      avatar: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tagLabel: 'Zugriff',
      tagSeverity: 'danger',
      message:
        'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    },
  ])
</script>