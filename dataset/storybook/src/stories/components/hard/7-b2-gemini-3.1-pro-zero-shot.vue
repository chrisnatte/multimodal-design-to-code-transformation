<template>
  <div class="flex flex-col gap-4">
    <!-- Card 1 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-stretch p-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Max Mustermann</span>
            <span class="text-[10px] font-light">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag severity="info" value="Einladung" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <div class="flex flex-col px-4">
          <span class="text-sm font-normal">Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.</span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4">
          <Button severity="secondary" label="Ablehnen" />
          <Button label="Akzeptieren" />
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-stretch p-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="A" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Anna Schmidt</span>
            <span class="text-[10px] font-light">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag severity="warn" value="Review" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <div class="flex flex-col px-4">
          <span class="text-sm font-normal">Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.</span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4">
          <Button severity="secondary" label="Ablehnen" />
          <Button label="Akzeptieren" />
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex flex-row justify-between items-stretch p-2.5">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="T" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Tom Fischer</span>
            <span class="text-[10px] font-light">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag severity="danger" value="Zugriff" />
      </div>
      
      <Divider class="!m-0" />
      
      <div class="flex flex-col gap-[7px] pb-[17.5px]">
        <div class="flex flex-col px-4">
          <span class="text-sm font-normal">Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.</span>
        </div>
        
        <Divider class="!m-0" />
        
        <div class="flex flex-row justify-end items-center gap-2 px-4">
          <Button severity="secondary" label="Ablehnen" />
          <Button label="Akzeptieren" />
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