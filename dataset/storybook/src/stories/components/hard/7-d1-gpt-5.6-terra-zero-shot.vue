<template>
  <div class="flex w-full max-w-[640px] flex-col gap-4 p-6">
    <div class="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div class="flex items-center justify-between gap-2.5 p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
          <div class="flex w-[115px] flex-col">
            <span class="text-sm font-normal leading-[17px] text-slate-700">Max Mustermann</span>
            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" severity="info" class="!text-[12px]" />
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-[7px] pb-[17px]">
        <div class="px-4">
          <span class="text-sm leading-[23px] text-slate-700">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </span>
        </div>

        <Divider class="!my-[6px]" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" size="small" @click="declinedInvitation = true" />
          <Button label="Akzeptieren" size="small" @click="acceptedInvitation = true" />
        </div>
      </div>
    </div>

    <div class="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div class="flex items-center justify-between gap-2.5 p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
          <div class="flex w-[115px] flex-col">
            <span class="text-sm font-normal leading-[17px] text-slate-700">Anna Schmidt</span>
            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" severity="warn" class="!text-[12px]" />
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-[7px] pb-[17px]">
        <div class="px-4">
          <span class="text-sm leading-[23px] text-slate-700">
            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </span>
        </div>

        <Divider class="!my-[6px]" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" size="small" @click="declinedReview = true" />
          <Button label="Akzeptieren" size="small" @click="acceptedReview = true" />
        </div>
      </div>
    </div>

    <div class="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div class="flex items-center justify-between gap-2.5 p-2.5">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
          <div class="flex w-[115px] flex-col">
            <span class="text-sm font-normal leading-[17px] text-slate-700">Tom Fischer</span>
            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" severity="danger" class="!text-[12px]" />
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-[7px] pb-[17px]">
        <div class="px-4">
          <span class="text-sm leading-[23px] text-slate-700">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
          </span>
        </div>

        <Divider class="!my-[6px]" />

        <div class="flex items-center justify-end gap-2 px-4">
          <Button label="Ablehnen" severity="secondary" size="small" @click="declinedAccess = true" />
          <Button label="Akzeptieren" size="small" @click="acceptedAccess = true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const acceptedInvitation = ref(false)
const declinedInvitation = ref(false)
const acceptedReview = ref(false)
const declinedReview = ref(false)
const acceptedAccess = ref(false)
const declinedAccess = ref(false)
</script>