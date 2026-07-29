<template>
  <div class="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
    <Card v-for="item in notifications" :key="item.id" class="shadow-sm border border-gray-200">
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between pb-3 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <Avatar :label="item.initial" shape="circle" class="bg-gray-200 text-gray-700" />
              <div class="flex flex-col">
                <span class="font-medium text-gray-900">{{ item.name }}</span>
                <span class="text-xs text-gray-400">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tagLabel" :severity="item.tagSeverity" rounded />
          </div>

          <div class="py-4 text-sm text-gray-600">
            {{ item.message }}
          </div>

          <div class="flex justify-end gap-2 pt-3 border-t border-gray-100">
            <Button label="Ablehnen" severity="secondary" text class="bg-gray-100" />
            <Button label="Akzeptieren" severity="success" />
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
import Button from 'primevue/button'

const notifications = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warning',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>