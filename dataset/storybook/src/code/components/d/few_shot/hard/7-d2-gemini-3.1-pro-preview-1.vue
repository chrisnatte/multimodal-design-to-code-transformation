<template>
  <div class="flex w-full max-w-3xl flex-col gap-4 bg-white p-6">
    <Card
      v-for="(item, index) in notifications"
      :key="index"
      :pt="{
        root: 'border border-surface-200 shadow-none rounded-xl overflow-hidden',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar :label="item.avatar" shape="circle" class="bg-slate-200 text-slate-700" />
              <div class="flex flex-col">
                <span class="text-sm text-surface-900">{{ item.name }}</span>
                <span class="text-[10px] text-surface-500">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tagLabel" :severity="item.tagSeverity" />
          </div>
          <Divider class="!m-0" />
          <div class="p-4 text-sm text-surface-700">
            {{ item.message }}
          </div>
          <Divider class="!m-0" />
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
      avatar: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tagLabel: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    },
    {
      avatar: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tagLabel: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    },
    {
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