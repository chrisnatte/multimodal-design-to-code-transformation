<template>
  <div class="min-h-screen bg-[#f3f4f6] p-6">
    <div class="mx-auto flex w-full max-w-[680px] flex-col gap-4">
      <Card
        v-for="item in state.notifications"
        :key="item.id"
        class="rounded-xl border border-[#e5e7eb] shadow-sm"
        :pt="{
          body: { class: 'p-0' },
          content: { class: 'p-0' }
        }"
      >
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-3">
              <div class="flex items-center gap-3">
                <Avatar
                  :label="item.initial"
                  shape="circle"
                  class="!bg-[#e2e8f0] !text-[#475569]"
                  :style="{ width: '32px', height: '32px' }"
                />
                <div class="flex flex-col">
                  <span class="text-[30px] font-normal text-[#334155] leading-none">{{ item.name }}</span>
                  <span class="text-xs font-light text-[#64748b] leading-none mt-1">{{ item.time }}</span>
                </div>
              </div>
              <Tag :value="item.tag" :severity="item.tagSeverity" class="text-xs font-bold" />
            </div>

            <Divider class="!my-0" />

            <div class="px-4 py-4">
              <p class="m-0 text-[30px] font-normal text-[#334155]">
                {{ item.message }}
              </p>
            </div>

            <Divider class="!my-0" />

            <div class="flex justify-end gap-2 px-4 py-4">
              <Button
                label="Ablehnen"
                severity="secondary"
                @click="state.actions[item.id] = 'declined'"
              />
              <Button
                label="Akzeptieren"
                @click="state.actions[item.id] = 'accepted'"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

const state = reactive({
  notifications: [
    {
      id: 1,
      initial: 'M',
      name: 'Max Mustermann',
      time: 'Vor 5 Minuten',
      tag: 'Einladung',
      tagSeverity: 'info',
      message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
      id: 2,
      initial: 'A',
      name: 'Anna Schmidt',
      time: 'Vor 24 Minuten',
      tag: 'Review',
      tagSeverity: 'warn',
      message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
      id: 3,
      initial: 'T',
      name: 'Tom Fischer',
      time: 'Vor 1 Stunde',
      tag: 'Zugriff',
      tagSeverity: 'danger',
      message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
  ],
  actions: {}
});
</script>