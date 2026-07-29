<template>
  <div class="flex flex-col gap-4">
    <Card
      :pt="{
        header: 'flex items-center justify-between px-4 py-2',
        body: '!p-0 !pb-4',
        footer: 'flex justify-end gap-2 px-4',
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span>Max Mustermann</span>
            <span class="font-xs font-light">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" />
      </template>

      <template #content>
        <Divider type="solid" layout="horizontal" />
        <p class="mx-4">
          Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
        </p>
        <Divider type="solid" layout="horizontal" />
      </template>

      <template #footer>
        <Button label="Ablehnen" severity="secondary" />
        <Button label="Akzeptieren" severity="primary" />
      </template>
    </Card>
    <Card
      :pt="{
        header: 'flex items-center justify-between px-4 py-2',
        body: '!p-0 !pb-4',
        footer: 'flex justify-end gap-2 px-4',
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" />
          <div class="flex flex-col">
            <span>Anna Schmidt</span>
            <span class="font-xs font-light">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" />
      </template>

      <template #content>
        <Divider type="solid" layout="horizontal" />
        <p class="mx-4">
          Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
        </p>
        <Divider type="solid" layout="horizontal" />
      </template>

      <template #footer>
        <Button label="Ablehnen" severity="secondary" />
        <Button label="Akzeptieren" severity="primary" />
      </template>
    </Card>
    <Card
      :pt="{
        header: 'flex items-center justify-between px-4 py-2',
        body: '!p-0 !pb-4',
        footer: 'flex justify-end gap-2 px-4',
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="P" shape="circle" />
          <div class="flex flex-col">
            <span>Tom Fischer</span>
            <span class="font-xs font-light">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" />
      </template>

      <template #content>
        <Divider type="solid" layout="horizontal" />
        <p class="mx-4">
          Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
        </p>
        <Divider type="solid" layout="horizontal" />
      </template>

      <template #footer>
        <Button label="Ablehnen" severity="secondary" />
        <Button label="Akzeptieren" severity="primary" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Divider from 'primevue/divider'
  import Button from 'primevue/button'
</script>
