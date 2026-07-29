<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex w-[640px] flex-col gap-4">
      <Card
        v-for="notification in notifications"
        :key="notification.id"
        :pt="{
          body: '!p-0 gap-0',
          content: '!p-0',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between p-2.5">
            <div class="flex items-center gap-3">
              <Avatar :label="notification.initial" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">{{ notification.name }}</span>
                <span class="text-[10px] font-light">{{ notification.time }}</span>
              </div>
            </div>
            <Tag :value="notification.tag" :severity="notification.severity" />
          </div>
          <Divider class="!my-0" />
        </template>
        <template #content>
          <div class="flex flex-col gap-1.5 pb-4">
            <div class="px-4 pt-4">
              <span class="text-sm">{{ notification.message }}</span>
            </div>
            <Divider class="!my-0" />
            <div class="flex items-center justify-end gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" severity="primary" />
            </div>
          </div>
        </template>
      </Card>
    </div>
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
      initial: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tag: 'Einladung',
      severity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      id: 2,
      initial: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tag: 'Review',
      severity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
      id: 3,
      initial: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tag: 'Zugriff',
      severity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    },
  ])
</script>