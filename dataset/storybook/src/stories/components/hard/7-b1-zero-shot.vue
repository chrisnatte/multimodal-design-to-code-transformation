<template>
  <div class="flex flex-col gap-4">
    <Card v-for="(item, index) in state.cards" :key="index" class="rounded-xl">
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between gap-2.5 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar :label="item.avatar" shape="circle" size="normal" />
              <div class="flex flex-col">
                <span class="text-sm">{{ item.name }}</span>
                <span class="text-[10px] font-light">{{ item.time }}</span>
              </div>
            </div>
            <Tag :value="item.tag" :severity="item.tagSeverity" />
          </div>

          <Divider />

          <div class="flex flex-col gap-2 pb-4">
            <div class="flex flex-col px-4">
              <span class="text-sm">{{ item.message }}</span>
            </div>

            <Divider />

            <div class="flex justify-end items-center gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" @click="onReject(index)" />
              <Button label="Akzeptieren" @click="onAccept(index)" />
            </div>
          </div>
        </div>
      </template>
    </Card>
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
  cards: [
    {
      avatar: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tag: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
      avatar: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tag: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
      avatar: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tag: 'Zugriff',
      tagSeverity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
  ]
})

const onReject = (index) => {
  state.cards[index].status = 'rejected'
}

const onAccept = (index) => {
  state.cards[index].status = 'accepted'
}
</script>