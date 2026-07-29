<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-3xl">
    <!-- Card 1 -->
    <div class="flex flex-col rounded-xl border border-surface-200 bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-surface-500">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" />
      </div>
      <Divider class="!m-0" />
      <div class="p-4">
        <p class="text-sm font-normal text-surface-700 m-0">
          Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
        </p>
      </div>
      <Divider class="!m-0" />
      <div class="flex justify-end items-center gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="bg-surface-100 hover:bg-surface-200 text-surface-900 border-none" />
        <Button label="Akzeptieren" severity="success" class="bg-emerald-500 hover:bg-emerald-600 border-none" />
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col rounded-xl border border-surface-200 bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Anna Schmidt</span>
            <span class="text-[10px] font-light text-surface-500">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" />
      </div>
      <Divider class="!m-0" />
      <div class="p-4">
        <p class="text-sm font-normal text-surface-700 m-0">
          Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
        </p>
      </div>
      <Divider class="!m-0" />
      <div class="flex justify-end items-center gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="bg-surface-100 hover:bg-surface-200 text-surface-900 border-none" />
        <Button label="Akzeptieren" severity="success" class="bg-emerald-500 hover:bg-emerald-600 border-none" />
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col rounded-xl border border-surface-200 bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Tom Fischer</span>
            <span class="text-[10px] font-light text-surface-500">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" />
      </div>
      <Divider class="!m-0" />
      <div class="p-4">
        <p class="text-sm font-normal text-surface-700 m-0">
          Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
        </p>
      </div>
      <Divider class="!m-0" />
      <div class="flex justify-end items-center gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="bg-surface-100 hover:bg-surface-200 text-surface-900 border-none" />
        <Button label="Akzeptieren" severity="success" class="bg-emerald-500 hover:bg-emerald-600 border-none" />
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