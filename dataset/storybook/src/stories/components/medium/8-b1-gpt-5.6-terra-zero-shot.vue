<template>
  <div class="flex h-[512px] w-[240px] flex-col items-center justify-between gap-6 bg-slate-200 p-6">
    <div class="flex w-full flex-col items-center gap-6">
      <span class="text-[24px] font-normal leading-[29px]">Emails</span>

      <div class="flex w-full flex-col gap-4">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start !bg-slate-100 !text-sm"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start !text-sm"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start !text-sm"
        />
      </div>
    </div>

    <div class="flex w-full flex-col items-center">
      <Divider class="!my-0 !h-[29px] before:!border-slate-500" />

      <div class="flex h-[42px] items-center gap-4">
        <Avatar
          label="B"
          size="large"
          shape="circle"
          class="!h-[42px] !w-[42px] !bg-slate-500 !text-[21px]"
        />
        <span class="text-[16px] font-normal leading-[19px]">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>