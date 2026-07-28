<template>
  <div class="flex flex-col gap-4 w-full max-w-[640px]">
    <div class="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!bg-slate-200 !text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-800">Max Mustermann</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" />
      </div>
      <Divider />
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <p class="m-0 px-4 text-sm text-slate-700">
          Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
        </p>
        <Divider />
        <div class="flex justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="!bg-slate-200 !text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-800">Anna Schmidt</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" />
      </div>
      <Divider />
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <p class="m-0 px-4 text-sm text-slate-700">
          Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
        </p>
        <Divider />
        <div class="flex justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div class="flex justify-between items-center p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="!bg-slate-200 !text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-800">Tom Fischer</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" />
      </div>
      <Divider />
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <p class="m-0 px-4 text-sm text-slate-700">
          Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
        </p>
        <Divider />
        <div class="flex justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" />
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