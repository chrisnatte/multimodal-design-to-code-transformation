<template>
  <div class="flex w-[688px] flex-col gap-2.5 bg-white p-6 font-sans">
    <div class="flex w-[640px] flex-col gap-4">
      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-[14px] !text-slate-700" />
            <div class="flex w-[115px] flex-col">
              <span class="text-[14px] leading-[17px]">Max Mustermann</span>
              <span class="text-[10px] font-light leading-3">Vor 5 Minuten</span>
            </div>
          </div>
          <Tag value="Einladung" severity="info" class="!text-[12.25px]" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="w-full" />
        </div>

        <div class="flex flex-col gap-[7px] rounded-md pb-[17.5px]">
          <div class="flex h-[23px] flex-col px-4">
            <span class="text-[14px] leading-[23px]">
              Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px]" />
            <Button label="Akzeptieren" severity="primary" class="!h-[33px]" />
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-[14px] !text-slate-700" />
            <div class="flex w-[115px] flex-col">
              <span class="text-[14px] leading-[17px]">Anna Schmidt</span>
              <span class="text-[10px] font-light leading-3">Vor 24 Minuten</span>
            </div>
          </div>
          <Tag value="Review" severity="warn" class="!text-[12.25px]" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="w-full" />
        </div>

        <div class="flex flex-col gap-[7px] rounded-md pb-[17.5px]">
          <div class="flex h-[23px] flex-col px-4">
            <span class="text-[14px] leading-[23px]">
              Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px]" />
            <Button label="Akzeptieren" severity="primary" class="!h-[33px]" />
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-xl bg-white">
        <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-[14px] !text-slate-700" />
            <div class="flex w-[115px] flex-col">
              <span class="text-[14px] leading-[17px]">Tom Fischer</span>
              <span class="text-[10px] font-light leading-3">Vor 1 Stunde</span>
            </div>
          </div>
          <Tag value="Zugriff" severity="danger" class="!text-[12.25px]" />
        </div>

        <div class="flex h-[29px] items-center">
          <Divider class="w-full" />
        </div>

        <div class="flex flex-col gap-[7px] rounded-md pb-[17.5px]">
          <div class="flex h-[46px] flex-col px-4">
            <span class="text-[14px] leading-[23px]">
              Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
            </span>
          </div>

          <div class="flex h-[21px] items-center">
            <Divider class="w-full" />
          </div>

          <div class="flex h-[33px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px]" />
            <Button label="Akzeptieren" severity="primary" class="!h-[33px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>