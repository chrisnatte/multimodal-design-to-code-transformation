<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white">
    <div class="flex flex-col gap-4 w-[640px]">
      
      <!-- Card 1 -->
      <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="rounded-xl bg-white border border-surface-200 shadow-sm overflow-hidden">
        <template #content>
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center p-2.5">
              <div class="flex flex-row items-center gap-3">
                <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
                  <span class="text-[10px] font-light text-surface-500">Vor 5 Minuten</span>
                </div>
              </div>
              <Tag value="Einladung" severity="info" />
            </div>
            
            <Divider class="!my-0" />
            
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="px-4">
                <span class="text-sm font-normal text-surface-900">
                  Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                </span>
              </div>
              
              <Divider class="!my-2" />
              
              <div class="flex flex-row justify-end items-center gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 2 -->
      <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="rounded-xl bg-white border border-surface-200 shadow-sm overflow-hidden">
        <template #content>
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center p-2.5">
              <div class="flex flex-row items-center gap-3">
                <Avatar label="A" shape="circle" class="bg-surface-100 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-sm font-normal text-surface-900">Anna Schmidt</span>
                  <span class="text-[10px] font-light text-surface-500">Vor 24 Minuten</span>
                </div>
              </div>
              <Tag value="Review" severity="warn" />
            </div>
            
            <Divider class="!my-0" />
            
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="px-4">
                <span class="text-sm font-normal text-surface-900">
                  Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                </span>
              </div>
              
              <Divider class="!my-2" />
              
              <div class="flex flex-row justify-end items-center gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Card 3 -->
      <Card :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }" class="rounded-xl bg-white border border-surface-200 shadow-sm overflow-hidden">
        <template #content>
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center p-2.5">
              <div class="flex flex-row items-center gap-3">
                <Avatar label="T" shape="circle" class="bg-surface-100 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-sm font-normal text-surface-900">Tom Fischer</span>
                  <span class="text-[10px] font-light text-surface-500">Vor 1 Stunde</span>
                </div>
              </div>
              <Tag value="Zugriff" severity="danger" />
            </div>
            
            <Divider class="!my-0" />
            
            <div class="flex flex-col gap-[7px] pb-[17.5px] pt-4">
              <div class="px-4">
                <span class="text-sm font-normal text-surface-900">
                  Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                </span>
              </div>
              
              <Divider class="!my-2" />
              
              <div class="flex flex-row justify-end items-center gap-2 px-4">
                <Button label="Ablehnen" severity="secondary" />
                <Button label="Akzeptieren" />
              </div>
            </div>
          </div>
        </template>
      </Card>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>