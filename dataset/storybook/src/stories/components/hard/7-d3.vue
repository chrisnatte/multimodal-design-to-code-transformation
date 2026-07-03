<template>
  <div class="bg-slate-100 p-6 min-h-screen">
    <div class="flex flex-col gap-4 max-w-[680px]">
      <Card
        v-for="item in state.notifications"
        :key="item.id"
        class="rounded-xl border border-slate-200 shadow-sm"
      >
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar :label="item.initials" shape="circle" class="bg-slate-200 text-slate-600" />
                <div class="flex flex-col">
                  <span class="text-slate-700 text-[28px] leading-none scale-[0.5] origin-left">{{ item.name }}</span>
                  <span class="text-slate-500 text-[20px] leading-none scale-[0.5] origin-left -mt-1">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.tag" :severity="item.tagSeverity" class="text-xs font-bold" />
            </div>

            <Divider class="!my-0" />

            <div class="px-4 py-4">
              <p class="text-slate-700 text-sm leading-8 scale-y-[0.5] origin-top-left whitespace-normal">
                {{ item.message }}
              </p>
            </div>

            <Divider class="!my-0" />

            <div class="flex justify-end gap-2 px-4 py-4">
              <Button
                label="Ablehnen"
                severity="secondary"
                @click="reject(item.id)"
              />
              <Button
                label="Akzeptieren"
                severity="success"
                @click="accept(item.id)"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const state = reactive({
  notifications: [
    {
      id: 1,
      initials: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tag: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
      id: 2,
      initials: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tag: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
      id: 3,
      initials: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tag: 'Zugriff',
      tagSeverity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
  ]
})

const accept = (id) => {
  state.notifications = state.notifications.filter((n) => n.id !== id)
}

const reject = (id) => {
  state.notifications = state.notifications.filter((n) => n.id !== id)
}
</script>