<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-[688px]">
    <div class="flex flex-col gap-4 w-[640px]">
      
      <!-- Card 1 -->
      <Card class="w-full rounded-xl bg-white shadow-sm border border-surface-200 overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' }, footer: { class: '!p-0' } }">
        <template #header>
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-[#e2e8f0] text-surface-700 font-sans" />
              <div class="flex flex-col">
                <span class="text-sm font-normal font-sans text-surface-900">Max Mustermann</span>
                <span class="text-[10px] font-light font-sans text-surface-500">Vor 5 Minuten</span>
              </div>
            </div>
            <Tag value="Einladung" severity="info" :rounded="false" />
          </div>
          <Divider class="!m-0" />
        </template>
        <template #content>
          <div class="px-4 pt-3.5 pb-1.5">
            <p class="text-sm font-normal font-sans text-surface-900 m-0">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</p>
          </div>
          <Divider class="!my-2.5" />
        </template>
        <template #footer>
          <div class="flex justify-end gap-2 px-4 pb-[17.5px]">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </template>
      </Card>

      <!-- Card 2 -->
      <Card class="w-full rounded-xl bg-white shadow-sm border border-surface-200 overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' }, footer: { class: '!p-0' } }">
        <template #header>
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="A" shape="circle" class="bg-[#e2e8f0] text-surface-700 font-sans" />
              <div class="flex flex-col">
                <span class="text-sm font-normal font-sans text-surface-900">Anna Schmidt</span>
                <span class="text-[10px] font-light font-sans text-surface-500">Vor 24 Minuten</span>
              </div>
            </div>
            <Tag value="Review" severity="warn" :rounded="false" />
          </div>
          <Divider class="!m-0" />
        </template>
        <template #content>
          <div class="px-4 pt-3.5 pb-1.5">
            <p class="text-sm font-normal font-sans text-surface-900 m-0">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</p>
          </div>
          <Divider class="!my-2.5" />
        </template>
        <template #footer>
          <div class="flex justify-end gap-2 px-4 pb-[17.5px]">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </template>
      </Card>

      <!-- Card 3 -->
      <Card class="w-full rounded-xl bg-white shadow-sm border border-surface-200 overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' }, footer: { class: '!p-0' } }">
        <template #header>
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="T" shape="circle" class="bg-[#e2e8f0] text-surface-700 font-sans" />
              <div class="flex flex-col">
                <span class="text-sm font-normal font-sans text-surface-900">Tom Fischer</span>
                <span class="text-[10px] font-light font-sans text-surface-500">Vor 1 Stunde</span>
              </div>
            </div>
            <Tag value="Zugriff" severity="danger" :rounded="false" />
          </div>
          <Divider class="!m-0" />
        </template>
        <template #content>
          <div class="px-4 pt-3.5 pb-1.5">
            <p class="text-sm font-normal font-sans text-surface-900 m-0">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</p>
          </div>
          <Divider class="!my-2.5" />
        </template>
        <template #footer>
          <div class="flex justify-end gap-2 px-4 pb-[17.5px]">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </template>
      </Card>

    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>