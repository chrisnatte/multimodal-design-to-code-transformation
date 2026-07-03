<template>
  <div class="flex flex-col gap-4">
    <Card>
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between gap-2.5 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Max Mustermann</span>
                <span class="text-[10px] font-light">Vor 5 Minuten</span>
              </div>
            </div>
            <Tag value="Einladung" severity="info" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-[17.5px]">
            <div class="flex flex-col px-4">
              <span class="text-sm">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</span>
            </div>
            <Divider />
            <div class="flex items-center justify-end gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" />
            </div>
          </div>
        </div>
      </template>
    </Card>

    <Card>
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between gap-2.5 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="A" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Anna Schmidt</span>
                <span class="text-[10px] font-light">Vor 24 Minuten</span>
              </div>
            </div>
            <Tag value="Review" severity="warn" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-[17.5px]">
            <div class="flex flex-col px-4">
              <span class="text-sm">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</span>
            </div>
            <Divider />
            <div class="flex items-center justify-end gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" />
            </div>
          </div>
        </div>
      </template>
    </Card>

    <Card>
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between gap-2.5 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="T" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Tom Fischer</span>
                <span class="text-[10px] font-light">Vor 1 Stunde</span>
              </div>
            </div>
            <Tag value="Zugriff" severity="danger" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-[17.5px]">
            <div class="flex flex-col px-4">
              <span class="text-sm">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</span>
            </div>
            <Divider />
            <div class="flex items-center justify-end gap-2 px-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const state = reactive({})
</script>