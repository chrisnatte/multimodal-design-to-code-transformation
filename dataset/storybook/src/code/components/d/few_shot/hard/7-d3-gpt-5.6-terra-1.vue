<template>
  <div class="flex w-[688px] flex-col gap-4 bg-white p-6">
    <Card
      v-for="notification in notifications"
      :key="notification.name"
      :pt="{
        root: 'overflow-hidden rounded-xl border border-slate-100 shadow-sm',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex items-center justify-between gap-2.5 px-2.5 py-2.5">
          <div class="flex items-center gap-3">
            <Avatar
              :label="notification.initial"
              shape="circle"
              aria-label="Absender"
              class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
            />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm leading-4 text-slate-700">{{ notification.name }}</span>
              <span class="text-[10px] leading-3 font-light text-slate-500">{{ notification.time }}</span>
            </div>
          </div>
          <Tag :value="notification.type" :severity="notification.severity" />
        </div>

        <Divider class="!my-3.5" />

        <div class="flex flex-col gap-[7px] pb-[17.5px]">
          <div class="px-4">
            <p class="m-0 text-sm leading-6 text-slate-700">{{ notification.message }}</p>
          </div>

          <Divider class="!my-2.5" />

          <div class="flex items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" size="small" />
            <Button label="Akzeptieren" severity="success" size="small" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    severity: 'info' as const,
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    severity: 'warn' as const,
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    severity: 'danger' as const,
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
])
</script>