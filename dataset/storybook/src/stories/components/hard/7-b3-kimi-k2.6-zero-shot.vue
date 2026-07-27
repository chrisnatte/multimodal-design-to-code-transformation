<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div class="flex flex-col bg-white rounded-xl overflow-hidden">
      <div class="flex justify-between items-start p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Max Mustermann</span>
            <span class="text-[10px] font-light">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" />
      </div>
      <Divider layout="horizontal" type="solid" />
      <div class="flex flex-col gap-2 pb-4 rounded-md">
        <div class="flex flex-col px-4">
          <p class="text-sm font-normal">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</p>
        </div>
        <Divider layout="horizontal" type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-xl overflow-hidden">
      <div class="flex justify-between items-start p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" size="normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Anna Schmidt</span>
            <span class="text-[10px] font-light">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" />
      </div>
      <Divider layout="horizontal" type="solid" />
      <div class="flex flex-col gap-2 pb-4 rounded-md">
        <div class="flex flex-col px-4">
          <p class="text-sm font-normal">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</p>
        </div>
        <Divider layout="horizontal" type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-xl overflow-hidden">
      <div class="flex justify-between items-start p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" size="normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Tom Fischer</span>
            <span class="text-[10px] font-light">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" />
      </div>
      <Divider layout="horizontal" type="solid" />
      <div class="flex flex-col gap-2 pb-4 rounded-md">
        <div class="flex flex-col px-4">
          <p class="text-sm font-normal">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</p>
        </div>
        <Divider layout="horizontal" type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>