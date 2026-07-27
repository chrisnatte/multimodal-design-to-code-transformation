<template>
  <div
    class="flex h-[512px] w-[240px] flex-col items-center justify-between gap-6 bg-[#e2e8f0] p-6"
  >
    <div class="flex w-full flex-col items-center gap-6">
      <span class="text-[24px] font-normal leading-[29px]">Emails</span>

      <div class="flex w-full flex-col gap-4">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start !bg-[#f1f5f9]"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          outlined
          class="!h-[33px] !w-full !justify-start"
        />
      </div>
    </div>

    <div class="flex w-full flex-col items-center">
      <Divider class="!my-0 !h-[29px] !w-full" />
      <div class="flex items-center gap-4">
        <Avatar
          label="B"
          size="large"
          shape="circle"
          class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px]"
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