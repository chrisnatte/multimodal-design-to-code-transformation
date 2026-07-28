<template>
  <div class="flex w-full max-w-[640px] flex-col gap-4 p-6 text-[#334155]">
    <Card
      class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
      :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }"
    >
      <template #content>
        <div class="flex items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-[#475569]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm leading-[17px]">Max Mustermann</span>
              <span class="text-[10px] font-light leading-3 text-[#475569]">Vor 5 Minuten</span>
            </div>
          </div>
          <Tag value="Einladung" severity="info" class="!px-[7px] !py-[3px] !text-[12px] !font-bold" />
        </div>

        <Divider class="!my-0 !h-[29px]" />

        <div class="flex flex-col gap-[7px] pb-[17px]">
          <div class="px-4 text-sm leading-[23px]">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </div>
          <Divider class="!my-0 !h-[21px]" />
          <div class="flex items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !px-[11px] !text-sm" />
            <Button label="Akzeptieren" class="!h-[33px] !bg-[#10b981] !px-[11px] !text-sm !border-[#10b981]" />
          </div>
        </div>
      </template>
    </Card>

    <Card
      class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
      :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }"
    >
      <template #content>
        <div class="flex items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-[#475569]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm leading-[17px]">Anna Schmidt</span>
              <span class="text-[10px] font-light leading-3 text-[#475569]">Vor 24 Minuten</span>
            </div>
          </div>
          <Tag value="Review" severity="warn" class="!px-[7px] !py-[3px] !text-[12px] !font-bold" />
        </div>

        <Divider class="!my-0 !h-[29px]" />

        <div class="flex flex-col gap-[7px] pb-[17px]">
          <div class="px-4 text-sm leading-[23px]">
            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </div>
          <Divider class="!my-0 !h-[21px]" />
          <div class="flex items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !px-[11px] !text-sm" />
            <Button label="Akzeptieren" class="!h-[33px] !bg-[#10b981] !px-[11px] !text-sm !border-[#10b981]" />
          </div>
        </div>
      </template>
    </Card>

    <Card
      class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
      :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }"
    >
      <template #content>
        <div class="flex items-center justify-between gap-2.5 p-2.5">
          <div class="flex items-center gap-3">
            <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-[#475569]" />
            <div class="flex w-[115px] flex-col">
              <span class="text-sm leading-[17px]">Tom Fischer</span>
              <span class="text-[10px] font-light leading-3 text-[#475569]">Vor 1 Stunde</span>
            </div>
          </div>
          <Tag value="Zugriff" severity="danger" class="!px-[7px] !py-[3px] !text-[12px] !font-bold" />
        </div>

        <Divider class="!my-0 !h-[29px]" />

        <div class="flex flex-col gap-[7px] pb-[17px]">
          <div class="px-4 text-sm leading-[23px]">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
          </div>
          <Divider class="!my-0 !h-[21px]" />
          <div class="flex items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !px-[11px] !text-sm" />
            <Button label="Akzeptieren" class="!h-[33px] !bg-[#10b981] !px-[11px] !text-sm !border-[#10b981]" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>