<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div v-for="(card, i) in cards" :key="i" class="flex flex-col bg-white rounded-xl overflow-hidden">
      <div class="flex items-center justify-between p-2.5 gap-2.5">
        <div class="flex items-center gap-3">
          <Avatar :label="card.avatar" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">{{ card.name }}</span>
            <span class="text-xs font-light text-gray-500">{{ card.time }}</span>
          </div>
        </div>
        <Tag :value="card.tagLabel" :severity="card.tagSeverity" />
      </div>
      <Divider class="my-3.5" />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm font-normal text-gray-900">{{ card.body }}</p>
        </div>
        <Divider />
        <div class="flex items-center justify-end gap-2 px-4">
          <Button :label="card.rejectLabel" severity="secondary" />
          <Button :label="card.acceptLabel" />
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

const cards = ref([
  {
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    body: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    rejectLabel: 'Ablehnen',
    acceptLabel: 'Akzeptieren'
  },
  {
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    body: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    rejectLabel: 'Ablehnen',
    acceptLabel: 'Akzeptieren'
  },
  {
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    body: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    rejectLabel: 'Ablehnen',
    acceptLabel: 'Akzeptieren'
  }
])
</script>