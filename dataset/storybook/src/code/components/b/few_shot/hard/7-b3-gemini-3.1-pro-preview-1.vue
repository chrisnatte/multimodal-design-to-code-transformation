<template>
  <div class="w-full max-w-[688px] bg-white p-6">
    <div class="flex flex-col gap-4">
      <Card v-for="item in notifications" :key="item.id" :pt="{ body: '!p-0', root: 'overflow-hidden' }">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar :label="item.avatar" shape="circle" />
                <div class="flex flex-col">
                  <span class="text-sm text-surface-900">{{ item.name }}</span>
                  <span class="text-[10px] font-light text-surface-500">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.tag" :severity="item.tagSeverity" />
            </div>
            
            <Divider class="!m-0" />
            
            <div class="flex flex-col gap-2 pb-4 pt-2">
              <div class="px-4">
                <p class="m-0 text-sm text-surface-700">{{ item.message }}</p>
              </div>
              
              <Divider class="!m-0" />
              
              <div class="flex items-center justify-end gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" severity="primary" />
              </div>
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
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>