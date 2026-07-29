<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-3xl font-sans">
    <!-- Card 1 -->
    <div class="flex flex-col border border-surface-200 rounded-xl bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700 font-medium" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Max Mustermann</span>
            <span class="text-[10px] text-surface-500">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" class="!text-xs" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="p-4">
        <p class="text-sm text-surface-700 m-0">
          Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
        </p>
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex justify-end gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Akzeptieren" severity="success" class="!bg-emerald-500 !border-none hover:!bg-emerald-600" />
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col border border-surface-200 rounded-xl bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-700 font-medium" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Anna Schmidt</span>
            <span class="text-[10px] text-surface-500">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" class="!text-xs" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="p-4">
        <p class="text-sm text-surface-700 m-0">
          Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
        </p>
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex justify-end gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Akzeptieren" severity="success" class="!bg-emerald-500 !border-none hover:!bg-emerald-600" />
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col border border-surface-200 rounded-xl bg-white">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-700 font-medium" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Tom Fischer</span>
            <span class="text-[10px] text-surface-500">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" class="!text-xs" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="p-4">
        <p class="text-sm text-surface-700 m-0">
          Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
        </p>
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex justify-end gap-2 p-4">
        <Button label="Ablehnen" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Akzeptieren" severity="success" class="!bg-emerald-500 !border-none hover:!bg-emerald-600" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
</script>