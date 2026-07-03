<template>
  <div class="min-h-screen bg-slate-50 p-6">
    <div class="max-w-4xl mx-auto flex flex-col gap-4">
      <Card v-for="item in invites" :key="item.id" class="rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-start justify-between px-4 py-4">
              <div class="flex items-center gap-3">
                <Avatar :label="item.initial" shape="circle" class="bg-slate-200 text-slate-600" />
                <div class="flex flex-col">
                  <span class="text-slate-700 text-2xl">{{ item.name }}</span>
                  <span class="text-slate-500 text-sm">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.typeLabel" :severity="item.typeSeverity" rounded />
            </div>

            <Divider class="my-0" />

            <div class="px-4 py-4 text-slate-700 text-2xl leading-relaxed">
              {{ item.message }}
            </div>

            <Divider class="my-0" />

            <div class="px-4 py-4 flex justify-end gap-3">
              <Button
                label="Ablehnen"
                severity="secondary"
                @click="decline(item.id)"
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
  acceptedIds: [],
  declinedIds: []
})

const invites = reactive([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    typeLabel: 'Einladung',
    typeSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    typeLabel: 'Review',
    typeSeverity: 'warning',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    typeLabel: 'Zugriff',
    typeSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])

const accept = (id) => {
  if (!state.acceptedIds.includes(id)) state.acceptedIds.push(id)
  state.declinedIds = state.declinedIds.filter((x) => x !== id)
}

const decline = (id) => {
  if (!state.declinedIds.includes(id)) state.declinedIds.push(id)
  state.acceptedIds = state.acceptedIds.filter((x) => x !== id)
}
</script>