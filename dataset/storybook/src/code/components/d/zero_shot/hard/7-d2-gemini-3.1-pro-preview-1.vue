<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-[688px]">
    <!-- Card 1 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="border border-surface-200 shadow-none rounded-xl overflow-hidden">
      <template #content>
        <div class="flex flex-col">
          <!-- Header -->
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
                <span class="text-[10px] font-light text-surface-500">Vor 5 Minuten</span>
              </div>
            </div>
            <Tag value="Einladung" severity="info" class="text-xs font-bold px-2 py-1" />
          </div>

          <Divider class="my-0" />

          <!-- Body -->
          <div class="px-4 py-4">
            <p class="text-sm font-normal text-surface-700 m-0">
              Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
            </p>
          </div>

          <Divider class="my-0" />

          <!-- Footer -->
          <div class="flex justify-end gap-2 px-4 py-2.5">
            <Button label="Ablehnen" severity="secondary" class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200 font-medium text-sm px-4 py-2" />
            <Button label="Akzeptieren" class="bg-[#10B981] border-none hover:bg-[#059669] text-white font-medium text-sm px-4 py-2" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Card 2 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="border border-surface-200 shadow-none rounded-xl overflow-hidden">
      <template #content>
        <div class="flex flex-col">
          <!-- Header -->
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Anna Schmidt</span>
                <span class="text-[10px] font-light text-surface-500">Vor 24 Minuten</span>
              </div>
            </div>
            <Tag value="Review" severity="warn" class="text-xs font-bold px-2 py-1" />
          </div>

          <Divider class="my-0" />

          <!-- Body -->
          <div class="px-4 py-4">
            <p class="text-sm font-normal text-surface-700 m-0">
              Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
            </p>
          </div>

          <Divider class="my-0" />

          <!-- Footer -->
          <div class="flex justify-end gap-2 px-4 py-2.5">
            <Button label="Ablehnen" severity="secondary" class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200 font-medium text-sm px-4 py-2" />
            <Button label="Akzeptieren" class="bg-[#10B981] border-none hover:bg-[#059669] text-white font-medium text-sm px-4 py-2" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Card 3 -->
    <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="border border-surface-200 shadow-none rounded-xl overflow-hidden">
      <template #content>
        <div class="flex flex-col">
          <!-- Header -->
          <div class="flex justify-between items-center p-2.5">
            <div class="flex items-center gap-3">
              <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-700 font-normal" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Tom Fischer</span>
                <span class="text-[10px] font-light text-surface-500">Vor 1 Stunde</span>
              </div>
            </div>
            <Tag value="Zugriff" severity="danger" class="text-xs font-bold px-2 py-1" />
          </div>

          <Divider class="my-0" />

          <!-- Body -->
          <div class="px-4 py-4">
            <p class="text-sm font-normal text-surface-700 m-0 leading-relaxed">
              Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
            </p>
          </div>

          <Divider class="my-0" />

          <!-- Footer -->
          <div class="flex justify-end gap-2 px-4 py-2.5">
            <Button label="Ablehnen" severity="secondary" class="bg-slate-100 border-none text-slate-700 hover:bg-slate-200 font-medium text-sm px-4 py-2" />
            <Button label="Akzeptieren" class="bg-[#10B981] border-none hover:bg-[#059669] text-white font-medium text-sm px-4 py-2" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
</script>