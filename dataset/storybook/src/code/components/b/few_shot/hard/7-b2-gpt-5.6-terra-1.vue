<template>
  <div class="flex w-[688px] flex-col gap-[10px] bg-white p-6">
    <div class="flex w-[640px] flex-col gap-4">
      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-[10px] p-[10px]">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm font-normal">Max Mustermann</span>
              <span class="text-[10px] font-light">Vor 5 Minuten</span>
            </div>
          </div>
          <Tag value="Einladung" severity="info" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="!my-0 w-full" />
        </div>

        <div class="flex flex-col gap-[7px] pb-[17.5px]">
          <div class="px-4">
            <span class="text-sm font-normal leading-[23px]">
              Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="!my-0 w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-[10px] p-[10px]">
          <div class="flex items-center gap-3">
            <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm font-normal">Anna Schmidt</span>
              <span class="text-[10px] font-light">Vor 24 Minuten</span>
            </div>
          </div>
          <Tag value="Review" severity="warn" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="!my-0 w-full" />
        </div>

        <div class="flex flex-col gap-[7px] pb-[17.5px]">
          <div class="px-4">
            <span class="text-sm font-normal leading-[23px]">
              Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="!my-0 w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-[10px] p-[10px]">
          <div class="flex items-center gap-3">
            <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm font-normal">Tom Fischer</span>
              <span class="text-[10px] font-light">Vor 1 Stunde</span>
            </div>
          </div>
          <Tag value="Zugriff" severity="danger" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="!my-0 w-full" />
        </div>

        <div class="flex flex-col gap-[7px] pb-[17.5px]">
          <div class="px-4">
            <span class="text-sm font-normal leading-[23px]">
              Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="!my-0 w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" />
            <Button label="Akzeptieren" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>