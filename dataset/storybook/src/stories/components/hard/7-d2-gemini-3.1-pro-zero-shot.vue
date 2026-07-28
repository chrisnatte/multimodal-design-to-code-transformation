<template>
  <div class="flex flex-col gap-4 w-full max-w-[640px] font-sans">
    <!-- Card 1 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="shadow-none border border-surface-200 rounded-xl overflow-hidden">
      <template #content>
        <div class="p-[10px] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-700 font-medium" />
            <div class="flex flex-col">
              <span class="text-[14px] text-surface-900 leading-tight">Max Mustermann</span>
              <span class="text-[10px] font-light text-surface-500 leading-tight mt-0.5">Vor 5 Minuten</span>
            </div>
          </div>
          <Tag value="Einladung" severity="info" class="text-[12.25px] font-bold" />
        </div>
        <Divider class="m-0" />
        <div class="pt-4 pb-[17.5px] flex flex-col">
          <div class="px-4 pb-4">
            <p class="text-[14px] text-surface-800 m-0">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</p>
          </div>
          <Divider class="m-0" />
          <div class="flex items-center justify-end gap-2 px-4 pt-3">
            <Button label="Ablehnen" severity="secondary" class="font-medium text-[14px] px-3 py-1.5" />
            <Button label="Akzeptieren" class="font-medium text-[14px] px-3 py-1.5" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Card 2 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="shadow-none border border-surface-200 rounded-xl overflow-hidden">
      <template #content>
        <div class="p-[10px] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="A" shape="circle" class="bg-surface-100 text-surface-700 font-medium" />
            <div class="flex flex-col">
              <span class="text-[14px] text-surface-900 leading-tight">Anna Schmidt</span>
              <span class="text-[10px] font-light text-surface-500 leading-tight mt-0.5">Vor 24 Minuten</span>
            </div>
          </div>
          <Tag value="Review" severity="warn" class="text-[12.25px] font-bold" />
        </div>
        <Divider class="m-0" />
        <div class="pt-4 pb-[17.5px] flex flex-col">
          <div class="px-4 pb-4">
            <p class="text-[14px] text-surface-800 m-0">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</p>
          </div>
          <Divider class="m-0" />
          <div class="flex items-center justify-end gap-2 px-4 pt-3">
            <Button label="Ablehnen" severity="secondary" class="font-medium text-[14px] px-3 py-1.5" />
            <Button label="Akzeptieren" class="font-medium text-[14px] px-3 py-1.5" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Card 3 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="shadow-none border border-surface-200 rounded-xl overflow-hidden">
      <template #content>
        <div class="p-[10px] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="T" shape="circle" class="bg-surface-100 text-surface-700 font-medium" />
            <div class="flex flex-col">
              <span class="text-[14px] text-surface-900 leading-tight">Tom Fischer</span>
              <span class="text-[10px] font-light text-surface-500 leading-tight mt-0.5">Vor 1 Stunde</span>
            </div>
          </div>
          <Tag value="Zugriff" severity="danger" class="text-[12.25px] font-bold" />
        </div>
        <Divider class="m-0" />
        <div class="pt-4 pb-[17.5px] flex flex-col">
          <div class="px-4 pb-4">
            <p class="text-[14px] text-surface-800 m-0">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</p>
          </div>
          <Divider class="m-0" />
          <div class="flex items-center justify-end gap-2 px-4 pt-3">
            <Button label="Ablehnen" severity="secondary" class="font-medium text-[14px] px-3 py-1.5" />
            <Button label="Akzeptieren" class="font-medium text-[14px] px-3 py-1.5" />
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
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>