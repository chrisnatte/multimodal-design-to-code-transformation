<template>
  <main class="flex w-full max-w-[688px] flex-col gap-4 bg-white p-6">
    <Card
      v-for="request in requests"
      :key="request.name"
      :pt="{
        root: 'overflow-hidden border border-slate-100 shadow-sm',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex items-center justify-between px-2.5 py-2.5">
          <div class="flex items-center gap-3">
            <Avatar :label="request.initials" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm leading-4 text-slate-700">{{ request.name }}</span>
              <span class="text-xs leading-3 text-slate-500">{{ request.time }}</span>
            </div>
          </div>
          <Tag
            :value="request.type"
            :severity="request.severity"
            class="text-xs"
          />
        </div>

        <Divider class="!m-0" />

        <p class="min-h-[50px] px-4 py-4 text-sm leading-5 text-slate-700">
          {{ request.message }}
        </p>

        <Divider class="!m-0" />

        <div class="flex justify-end gap-2 px-4 py-5">
          <Button label="Ablehnen" severity="secondary" size="small" />
          <Button label="Akzeptieren" size="small" />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const requests = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    severity: 'info' as const,
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    severity: 'warn' as const,
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initials: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    severity: 'danger' as const,
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
])
</script>