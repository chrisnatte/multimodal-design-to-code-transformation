<template>
  <div class="flex flex-col gap-4 w-full max-w-[640px] rounded-xl">
    <div
      v-for="request in requests"
      :key="request.id"
      class="bg-surface-0 border border-surface-200 rounded-xl flex flex-col overflow-hidden"
    >
      <div class="flex justify-between items-start pt-[10px] pb-[10px] px-[10px]">
        <div class="flex items-center gap-3">
          <Avatar
            :label="request.authorInitials"
            shape="circle"
            class="bg-surface-100 text-surface-700 w-7 h-7 text-sm font-normal"
          />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">{{ request.authorName }}</span>
            <span class="text-[10px] font-light text-surface-500">{{ request.time }}</span>
          </div>
        </div>
        <Tag
          :value="request.tagLabel"
          :severity="request.tagSeverity"
          class="text-[12.25px] font-bold px-2 py-0.5"
        />
      </div>

      <Divider class="!m-0 border-surface-200" />

      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <div class="px-4 py-[11.5px]">
          <p class="text-sm font-normal text-surface-900 m-0">
            {{ request.content }}
          </p>
        </div>

        <Divider class="!m-0 border-surface-200" />

        <div class="flex justify-end items-center gap-2 px-4 pt-2">
          <Button
            label="Ablehnen"
            severity="secondary"
            class="px-4 py-1.5 text-sm font-medium bg-surface-100 text-surface-700 border-none hover:bg-surface-200"
          />
          <Button
            label="Akzeptieren"
            severity="success"
            class="px-4 py-1.5 text-sm font-medium bg-[#10b981] hover:bg-[#059669] border-none text-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const requests = ref([
  {
    id: 1,
    authorInitials: 'M',
    authorName: 'Max Mustermann',
    time: 'Vor 5 Minuten',
    tagLabel: 'Einladung',
    tagSeverity: 'info',
    content: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
  },
  {
    id: 2,
    authorInitials: 'A',
    authorName: 'Anna Schmidt',
    time: 'Vor 24 Minuten',
    tagLabel: 'Review',
    tagSeverity: 'warn',
    content: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
  },
  {
    id: 3,
    authorInitials: 'T',
    authorName: 'Tom Fischer',
    time: 'Vor 1 Stunde',
    tagLabel: 'Zugriff',
    tagSeverity: 'danger',
    content: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
  }
]);
</script>