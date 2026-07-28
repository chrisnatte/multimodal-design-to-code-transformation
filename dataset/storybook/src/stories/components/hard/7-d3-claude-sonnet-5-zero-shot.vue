<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div
      v-for="item in notifications"
      :key="item.id"
      class="bg-white rounded-xl overflow-hidden"
    >
      <!-- header -->
      <div class="flex items-center justify-between p-[10px]">
        <div class="flex items-center gap-3">
          <Avatar :label="item.avatarLabel" shape="circle" size="normal" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">{{ item.name }}</span>
            <span class="text-[10px] text-gray-400">{{ item.time }}</span>
          </div>
        </div>
        <Tag :value="item.tagText" :severity="item.severity" :rounded="false" />
      </div>

      <Divider class="!my-0" />

      <!-- body -->
      <div class="flex flex-col gap-2 pb-[17.5px]">
        <div class="px-4">
          <p class="text-sm text-gray-700 m-0">{{ item.content }}</p>
        </div>

        <Divider class="!my-0" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button
            label="Ablehnen"
            severity="secondary"
          />
          <Button
            label="Akzeptieren"
            style="background-color: #10b981; border-color: #10b981;"
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
    severity: 'info',
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatarLabel: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagText: 'Review',
    severity: 'warn',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatarLabel: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagText: 'Zugriff',
    severity: 'danger',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>