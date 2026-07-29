<template>
  <main class="w-full max-w-[688px] bg-white p-6 font-sans text-[#334155]">
    <section class="flex flex-col gap-4" aria-label="Benachrichtigungen">
      <article
        v-for="notification in notifications"
        :key="notification.name"
        class="overflow-hidden rounded-xl border border-[#e9eef5] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
      >
        <header class="flex h-[63px] items-start justify-between px-2.5 pt-2.5">
          <div class="flex items-center gap-3">
            <Avatar
              :label="notification.initial"
              shape="circle"
              class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !font-normal !text-[#475569]"
            />
            <div class="flex h-[29px] w-[115px] flex-col">
              <span class="text-sm font-normal leading-[17px] text-[#334155]">
                {{ notification.name }}
              </span>
              <span class="text-[10px] font-light leading-3 text-[#64748b]">
                {{ notification.time }}
              </span>
            </div>
          </div>

          <Tag
            :value="notification.tag"
            :severity="notification.severity"
            class="!h-[22px] !px-[7px] !py-0 !text-[12px] !font-bold"
            :class="notification.tagClass"
          />
        </header>

        <Divider class="!m-0 !h-px" />

        <div
          class="flex items-start px-4 pt-4 text-sm font-normal leading-[23px] text-[#334155]"
          :class="notification.isLong ? 'h-[74px]' : 'h-[50px]'"
        >
          <span>{{ notification.message }}</span>
        </div>

        <Divider class="!m-0 !h-px" />

        <footer class="flex h-[72px] items-center justify-end gap-2 px-4">
          <Button
            label="Ablehnen"
            severity="secondary"
            class="!h-[33px] !border-[#f1f5f9] !bg-[#f1f5f9] !px-3 !py-0 !text-sm !font-medium !text-[#475569]"
          />
          <Button
            label="Akzeptieren"
            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-3 !py-0 !text-sm !font-medium !text-white"
          />
        </footer>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tag: 'Einladung',
    severity: 'info',
    tagClass: '!bg-[#e0f2fe] !text-[#0284c7]',
    message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
    isLong: false
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tag: 'Review',
    severity: 'warn',
    tagClass: '!bg-[#ffedd5] !text-[#ea580c]',
    message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
    isLong: false
  },
  {
    initial: 'T',
    name: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tag: 'Zugriff',
    severity: 'danger',
    tagClass: '!bg-[#fee2e2] !text-[#dc2626]',
    message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
    isLong: true
  }
])
</script>