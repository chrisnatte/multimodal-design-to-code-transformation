<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <div class="flex flex-col gap-4 max-w-[680px]">
      <Card v-for="item in state.notifications" :key="item.id" class="rounded-xl border border-gray-200 shadow-sm">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-start justify-between p-[10px]">
              <div class="flex items-center gap-3">
                <Avatar :label="item.avatar" shape="circle" class="bg-slate-200 text-slate-700" size="normal" />
                <div class="flex flex-col">
                  <span class="text-[28px]"></span>
                  <span class="text-[22px]"></span>
                  <span class="text-[14px] text-slate-700 leading-5">{{ item.name }}</span>
                  <span class="text-[12px] text-slate-500 leading-4">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.tag" :severity="item.tagSeverity" />
            </div>

            <Divider class="!my-0" />

            <div class="flex flex-col gap-2 pb-4">
              <div class="px-4 pt-3">
                <p class="text-[30px]"></p>
                <p class="text-[14px] text-slate-700 leading-8">{{ item.message }}</p>
              </div>

              <Divider class="!my-0" />

              <div class="flex justify-end items-center gap-2 px-4 pt-2">
                <Button label="Ablehnen" severity="secondary" @click="onDecline(item.id)" />
                <Button label="Akzeptieren" severity="success" @click="onAccept(item.id)" />
              </div>
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
  ]
})

const onDecline = () => {}
const onAccept = () => {}
</script>