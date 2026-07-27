<template>
  <div class="flex flex-col gap-4 w-[640px]">
    <!-- Card 1 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-center p-2.5 gap-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-[#e2e8f0]" />
          <div class="flex flex-col">
            <span class="font-sans font-normal text-[14px] text-gray-900">Max Mustermann</span>
            <span class="font-sans font-light text-[10px] text-gray-600">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" :rounded="false" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px] pt-2">
        <div class="flex flex-col px-4">
          <span class="font-sans font-normal text-[14px] text-gray-900">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4 pt-1">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-center p-2.5 gap-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-[#e2e8f0]" />
          <div class="flex flex-col">
            <span class="font-sans font-normal text-[14px] text-gray-900">Anna Schmidt</span>
            <span class="font-sans font-light text-[10px] text-gray-600">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" :rounded="false" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px] pt-2">
        <div class="flex flex-col px-4">
          <span class="font-sans font-normal text-[14px] text-gray-900">
            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4 pt-1">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-center p-2.5 gap-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-[#e2e8f0]" />
          <div class="flex flex-col">
            <span class="font-sans font-normal text-[14px] text-gray-900">Tom Fischer</span>
            <span class="font-sans font-light text-[10px] text-gray-600">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" :rounded="false" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px] pt-2">
        <div class="flex flex-col px-4">
          <span class="font-sans font-normal text-[14px] text-gray-900">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
          </span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4 pt-1">
          <Button label="Ablehnen" severity="secondary" />
          <Button label="Akzeptieren" severity="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
</script>