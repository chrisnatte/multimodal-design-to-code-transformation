<template>
  <div class="flex flex-col bg-white p-6">
    <div class="flex w-[640px] flex-col gap-4">
      <!-- Card 1 -->
      <Card :pt="{ root: 'rounded-xl', body: '!p-0', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar label="M" shape="circle" />
                <div class="flex flex-col">
                  <span class="text-sm">Max Mustermann</span>
                  <span class="text-[10px] font-light">Vor 5 Minuten</span>
                </div>
              </div>
              <Tag value="Einladung" severity="info" />
            </div>
            <Divider class="!my-0" />
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="flex flex-col px-4">
                <span class="text-sm">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</span>
              </div>
              <Divider class="!my-2" />
              <div class="flex items-center justify-end gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" severity="primary" />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 2 -->
      <Card :pt="{ root: 'rounded-xl', body: '!p-0', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar label="A" shape="circle" />
                <div class="flex flex-col">
                  <span class="text-sm">Anna Schmidt</span>
                  <span class="text-[10px] font-light">Vor 24 Minuten</span>
                </div>
              </div>
              <Tag value="Review" severity="warn" />
            </div>
            <Divider class="!my-0" />
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="flex flex-col px-4">
                <span class="text-sm">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</span>
              </div>
              <Divider class="!my-2" />
              <div class="flex items-center justify-end gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" severity="primary" />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 3 -->
      <Card :pt="{ root: 'rounded-xl', body: '!p-0', content: '!p-0' }">
        <template #content>
          <div class="flex flex-col">
            <div class="flex items-center justify-between p-2.5">
              <div class="flex items-center gap-3">
                <Avatar label="T" shape="circle" />
                <div class="flex flex-col">
                  <span class="text-sm">Tom Fischer</span>
                  <span class="text-[10px] font-light">Vor 1 Stunde</span>
                </div>
              </div>
              <Tag value="Zugriff" severity="danger" />
            </div>
            <Divider class="!my-0" />
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="flex flex-col px-4">
                <span class="text-sm">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</span>
              </div>
              <Divider class="!my-2" />
              <div class="flex items-center justify-end gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" severity="primary" />
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>