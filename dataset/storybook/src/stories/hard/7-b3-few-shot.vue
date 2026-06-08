<template>
  <div class="flex flex-col gap-4">
    <Card>
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center justify-between gap-2 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" />
              <div class="flex flex-col">
                <span>Max Mustermann</span>
                <span class="text-xs">Vor 5 Minuten</span>
              </div>
            </div>
            <Tag value="Einladung" severity="info" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-4">
            <div class="flex flex-col px-4">
              <span>Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</span>
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
          <div class="flex items-center justify-between gap-2 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="A" shape="circle" />
              <div class="flex flex-col">
                <span>Anna Schmidt</span>
                <span class="text-xs">Vor 24 Minuten</span>
              </div>
            </div>
            <Tag value="Review" severity="warn" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-4">
            <div class="flex flex-col px-4">
              <span>Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</span>
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
          <div class="flex items-center justify-between gap-2 p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="T" shape="circle" />
              <div class="flex flex-col">
                <span>Tom Fischer</span>
                <span class="text-xs">Vor 1 Stunde</span>
              </div>
            </div>
            <Tag value="Zugriff" severity="danger" />
          </div>
          <Divider />
          <div class="flex flex-col gap-2 pb-4">
            <div class="flex flex-col px-4">
              <span>Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</span>
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
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const form = reactive({})
</script>