<template>
  <main class="min-h-screen bg-white p-6 font-sans text-[#344563]">
    <section class="flex w-full max-w-[640px] flex-col gap-4">
      <Card
        v-for="notification in notifications"
        :key="notification.name"
        class="overflow-hidden rounded-xl !border !border-slate-100 !bg-white !shadow-sm"
        :pt="{
          body: { class: '!p-0' },
          content: { class: '!p-0' }
        }"
      >
        <template #header>
          <div class="flex h-[49px] items-center justify-between gap-3 px-2.5 py-2.5">
            <div class="flex items-center gap-3">
              <Avatar
                :label="notification.initial"
                shape="circle"
                class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-[#475569]"
              />
              <div class="flex w-[115px] flex-col">
                <span class="text-sm leading-[17px] text-[#344563]">{{ notification.name }}</span>
                <span class="text-[10px] font-light leading-3 text-[#64748b]">{{ notification.time }}</span>
              </div>
            </div>
            <Tag :value="notification.tag" :severity="notification.severity" class="!text-xs !font-bold" />
          </div>
        </template>

        <Divider class="!my-0 !h-[29px]" />

        <template #content>
          <div class="flex flex-col gap-[7px] pb-[17px]">
            <div class="px-4">
              <p class="m-0 text-sm leading-[23px] text-[#344563]">
                {{ notification.message }}
              </p>
            </div>

            <Divider class="!my-0 !h-[21px]" />

            <div class="flex h-[33px] items-center justify-end gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" class="!h-[33px] !px-3 !text-sm" />
              <Button
                label="Akzeptieren"
                class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-3 !text-sm hover:!border-[#059669] hover:!bg-[#059669]"
              />
            </div>
          </div>
        </template>
      </Card>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    severity: 'info',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    severity: 'warn',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    severity: 'danger',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
])
</script>