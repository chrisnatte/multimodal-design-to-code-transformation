<template>
  <main class="min-h-screen bg-white p-6">
    <section class="mx-auto flex max-w-[640px] flex-col gap-4">
      <Card
        v-for="request in requests"
        :key="request.name"
        class="overflow-hidden [&_.p-card-body]:p-0 [&_.p-card-content]:p-0"
      >
        <template #content>
          <div class="flex h-[63px] items-center justify-between border-b border-slate-200 px-4">
            <div class="flex items-center gap-3">
              <Avatar
                :label="request.initial"
                shape="circle"
                class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
              />
              <div class="flex flex-col">
                <span class="text-sm font-medium leading-4 text-slate-700">{{ request.name }}</span>
                <span class="text-[11px] leading-4 text-slate-500">{{ request.time }}</span>
              </div>
            </div>

            <Tag
              :value="request.tag"
              :severity="request.tagSeverity"
              class="text-xs"
            />
          </div>

          <div
            class="border-b border-slate-200 px-4 py-4 text-sm leading-[22px] text-slate-700"
            :class="request.multiline ? 'min-h-[74px]' : 'min-h-[51px]'"
          >
            {{ request.message }}
          </div>

          <div class="flex h-[72px] items-center justify-end gap-2 px-4">
            <Button
              label="Ablehnen"
              severity="secondary"
              size="small"
              class="bg-slate-100 text-slate-600"
            />
            <Button
              label="Akzeptieren"
              severity="success"
              size="small"
            />
          </div>
        </template>
      </Card>
    </section>
  </main>
</template>

<script setup>
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const requests = [
  {
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    tagSeverity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    multiline: false
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    tagSeverity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    multiline: false
  },
  {
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    tagSeverity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    multiline: true
  }
]
</script>