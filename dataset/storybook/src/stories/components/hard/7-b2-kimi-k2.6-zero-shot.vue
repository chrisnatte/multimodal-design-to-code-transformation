<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <div class="bg-white rounded-xl flex flex-col">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Max Mustermann</span>
            <span class="text-xs font-light text-gray-500">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" />
      </div>
      <Divider type="solid" />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm font-normal text-gray-900">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </p>
        </div>
        <Divider type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl flex flex-col">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Anna Schmidt</span>
            <span class="text-xs font-light text-gray-500">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" />
      </div>
      <Divider type="solid" />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm font-normal text-gray-900">
            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </p>
        </div>
        <Divider type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl flex flex-col">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Tom Fischer</span>
            <span class="text-xs font-light text-gray-500">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" />
      </div>
      <Divider type="solid" />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm font-normal text-gray-900">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
          </p>
        </div>
        <Divider type="solid" />
        <div class="flex justify-end items-center gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
</script>