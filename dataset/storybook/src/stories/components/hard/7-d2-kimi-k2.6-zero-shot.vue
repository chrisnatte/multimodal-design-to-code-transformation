<template>
  <div class="flex flex-col gap-4 max-w-[640px] w-full">
    <div class="bg-white rounded-xl border border-surface-200 overflow-hidden flex flex-col">
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-600 w-7 h-7 text-sm" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Max Mustermann</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" class="text-xs font-bold" />
      </div>
      <Divider />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm text-slate-700">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </p>
        </div>
        <Divider />
        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl border border-surface-200 overflow-hidden flex flex-col">
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-600 w-7 h-7 text-sm" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Anna Schmidt</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" class="text-xs font-bold" />
      </div>
      <Divider />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm text-slate-700">
            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </p>
        </div>
        <Divider />
        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl border border-surface-200 overflow-hidden flex flex-col">
      <div class="flex items-center justify-between p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-600 w-7 h-7 text-sm" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Tom Fischer</span>
            <span class="text-[10px] text-slate-500 font-light">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" class="text-xs font-bold" />
      </div>
      <Divider />
      <div class="flex flex-col gap-2 pb-4">
        <div class="px-4">
          <p class="text-sm text-slate-700">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
          </p>
        </div>
        <Divider />
        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="success" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
</script>