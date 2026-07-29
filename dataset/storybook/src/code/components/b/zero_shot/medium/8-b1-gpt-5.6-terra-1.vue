<template>
  <div class="flex h-[560px] w-[288px] flex-col bg-white p-6">
    <div
      class="flex h-[512px] w-[240px] flex-col justify-between gap-6 bg-[#e2e8f0] p-6"
    >
      <div class="flex w-full flex-col items-center gap-6">
        <span class="text-2xl font-normal">Emails</span>

        <div class="flex w-[192px] flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="!h-[33px] !w-full !justify-start !bg-[#f1f5f9] !text-sm"
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
        <div class="flex h-[29px] w-full items-center">
          <Divider class="!my-0 !w-full" />
        </div>

        <div class="flex h-[42px] items-center gap-4">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base font-normal">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>