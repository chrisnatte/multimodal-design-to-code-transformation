<template>
  <div class="flex flex-col gap-2.5 p-6">
    <div class="flex flex-col gap-4">
      <Card>
        <template #header>
          <div class="flex gap-3 items-center">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span>Vor 5 Minuten</span>
            </div>
          </div>
           <Tag value="Einladung" severity="info" />
        </template>
        <Divider />
        <template #content>
          <span class="text-sm">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</span>
        </template>
        <Divider />
        <template #footer>
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </template>
      </Card>
      <Card>
        <template #header>
          <div class="flex gap-3 items-center">
            <Avatar label="A" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Anna Schmidt</span>
              <span>Vor 24 Minuten</span>
            </div>
          </div>
          <Tag value="Review" severity="warn" />
        </template>
        <Divider />
        <template #content>
          <span class="text-sm">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</span>
        </template>
        <Divider />
        <template #footer>
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </template>
      </Card>
      <Card>
        <template #header>
          <div class="flex gap-3 items-center">
            <Avatar label="T" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Tom Fischer</span>
              <span>Vor 1 Stunde</span>
            </div>
          </div>
          <Tag value="Zugriff" severity="danger" />
        </template>
        <Divider />
        <template #content>
          <span class="text-sm">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</span>
        </template>
        <Divider />
        <template #footer>
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>
