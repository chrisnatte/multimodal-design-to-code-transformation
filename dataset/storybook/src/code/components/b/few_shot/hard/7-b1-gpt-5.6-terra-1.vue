<template>
  <div class="flex w-[688px] flex-col gap-2.5 bg-white p-6">
    <div class="flex flex-col gap-4">
      <Card
        v-for="notification in notifications"
        :key="notification.sender"
        class="w-full"
        :pt="{
          body: { class: '!p-0' },
          content: { class: '!p-0' },
        }"
      >
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between gap-2.5 p-2.5">
              <div class="flex items-center gap-3">
                <Avatar :label="notification.initial" shape="circle" />
                <div class="flex w-[115px] flex-col">
                  <span class="text-sm">{{ notification.sender }}</span>
                  <span class="text-[10px] font-light">{{ notification.time }}</span>
                </div>
              </div>
              <Tag :value="notification.type" :severity="notification.severity" />
            </div>

            <Divider class="!my-0" />

            <div class="flex flex-col gap-[7px] pb-[17.5px]">
              <div class="flex flex-col px-4">
                <span class="text-sm leading-[23px]">{{ notification.message }}</span>
              </div>

              <Divider class="!my-0" />

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
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
  {
    initial: 'M',
    sender: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    type: 'Einladung',
    severity: 'info',
    message:
      'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
  },
  {
    initial: 'A',
    sender: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    type: 'Review',
    severity: 'warn',
    message:
      'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
  },
  {
    initial: 'T',
    sender: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    type: 'Zugriff',
    severity: 'danger',
    message:
      'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
  },
])
</script>