<template>
  <div class="p-6 bg-slate-50 min-h-screen">
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
      <Card v-for="item in state.invitations" :key="item.id" class="overflow-hidden rounded-2xl">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-start justify-between px-3 py-1">
              <div class="flex items-center gap-3">
                <Avatar :label="item.avatar" shape="circle" class="bg-slate-200 text-slate-700" />
                <div class="flex flex-col">
                  <span class="text-slate-700 text-[28px] leading-none">{{ item.name }}</span>
                  <span class="text-slate-400 text-xl mt-1">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.type" :severity="item.tagSeverity" rounded />
            </div>

            <Divider class="my-3" />

            <div class="px-3 py-2">
              <p class="text-slate-700 text-[32px] leading-snug m-0">
                {{ item.message }}
              </p>
            </div>

            <Divider class="my-3" />

            <div class="flex justify-end gap-3 px-3 pb-2">
              <Button
                label="Ablehnen"
                severity="secondary"
                variant="outlined"
                class="!bg-slate-100 !border-slate-100 !text-slate-600 !text-3xl !px-6 !py-3"
                @click="decline(item.id)"
              />
              <Button
                label="Akzeptieren"
                severity="success"
                class="!text-3xl !px-6 !py-3"
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
  invitations: [
    {
      id: 1,
      avatar: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      type: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
      id: 2,
      avatar: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      type: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
      id: 3,
      avatar: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      type: 'Zugriff',
      tagSeverity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
  ]
})

const decline = (id) => {
  state.invitations = state.invitations.filter((item) => item.id !== id)
}

const accept = (id) => {
  state.invitations = state.invitations.filter((item) => item.id !== id)
}
</script>