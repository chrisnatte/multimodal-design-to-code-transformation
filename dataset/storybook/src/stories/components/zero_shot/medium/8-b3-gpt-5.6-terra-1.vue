<template>
  <aside class="flex h-[560px] w-[288px] flex-col bg-white p-6">
    <div class="flex h-[512px] w-full flex-col justify-between gap-6 bg-slate-200 p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <h2 class="m-0 text-center text-[24px] font-normal leading-[29px] text-slate-950">
          Emails
        </h2>

        <nav class="flex w-full flex-col gap-4" aria-label="Email navigation">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="h-[33px] w-full !justify-start !bg-slate-50 !px-[11px] !py-2 !text-[14px]"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            outlined
            class="h-[33px] w-full !justify-start !px-[11px] !py-2 !text-[14px]"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            outlined
            class="h-[33px] w-full !justify-start !px-[11px] !py-2 !text-[14px]"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col items-center">
        <Divider class="!my-0" />

        <div class="flex items-center gap-4 pt-0">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="!h-[42px] !w-[42px] !bg-slate-500 !text-[21px] !text-white"
            aria-label="Benutzername"
          />
          <span class="text-[16px] font-normal leading-[19px] text-slate-950">
            Benutzername
          </span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>