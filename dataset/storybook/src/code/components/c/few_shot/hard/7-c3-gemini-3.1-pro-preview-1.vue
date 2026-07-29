<template>
  <div class="flex flex-col gap-6 p-8 max-w-3xl mx-auto font-sans">
    <Card
      v-for="notification in notifications"
      :key="notification.id"
      class="shadow-none border border-gray-200 rounded-xl overflow-hidden"
      :pt="{
        body: '!p-0',
        content: '!p-0'
      }"
    >
      <template #content>
        <!-- Header -->
        <div class="flex items-center justify-between p-5">
          <div class="flex items-center gap-4">
            <Avatar
              :label="notification.avatar"
              shape="circle"
              size="large"
              class="!bg-slate-200 !text-slate-600 font-medium"
            />
            <div class="flex flex-col">
              <span class="text-base font-medium text-slate-800">{{ notification.name }}</span>
              <span class="text-sm text-slate-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag
            :value="notification.tagLabel"
            :severity="notification.tagSeverity"
            class="px-3 py-1 text-sm font-semibold"
          />
        </div>

        <Divider class="!m-0 !border-gray-100" />

        <!-- Body -->
        <div class="p-5 text-slate-700 text-base leading-relaxed">
          {{ notification.message }}
        </div>

        <Divider class="!m-0 !border-gray-100" />

        <!-- Footer -->
        <div class="flex justify-end gap-3 p-5">
          <Button
            label="Ablehnen"
            severity="secondary"
            class="!bg-slate-100 !border-transparent !text-slate-700 hover:!bg-slate-200 font-medium px-5 py-2"
          />
          <Button
            label="Akzeptieren"
            severity="success"
            class="font-medium px-5 py-2"
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
    avatar: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    avatar: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    avatar: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>