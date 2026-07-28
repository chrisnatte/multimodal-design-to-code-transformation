<template>
  <div class="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
    <Card v-for="item in notifications" :key="item.id" class="shadow-sm">
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between px-2 pt-2 pb-3">
            <div class="flex items-center gap-3">
              <Avatar :label="item.initial" shape="circle" class="bg-gray-200 text-gray-700" />
              <div class="flex flex-col">
                <span class="font-semibold text-gray-800">{{ item.name }}</span>
                <span class="text-sm text-gray-400">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tag" :severity="item.severity" rounded />
          </div>

          <Divider class="my-0" />

          <div class="px-2 py-3 text-gray-600 text-sm">
            {{ item.message }}
          </div>

          <Divider class="my-0" />

          <div class="flex justify-end gap-3 px-2 pt-3">
            <Button label="Ablehnen" severity="secondary" outlined size="small" />
            <Button label="Akzeptieren" severity="success" size="small" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
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
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    severity: 'warning',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    severity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>