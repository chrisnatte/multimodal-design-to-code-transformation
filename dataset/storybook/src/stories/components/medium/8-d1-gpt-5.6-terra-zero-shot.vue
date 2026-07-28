<template>
  <aside
    class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6 font-sans text-[#334155]"
    aria-label="E-Mail Navigation"
  >
    <div class="flex w-full flex-col items-center gap-6">
      <h1 class="m-0 text-2xl font-normal leading-[29px]">Emails</h1>

      <nav class="flex w-full flex-col gap-4" aria-label="E-Mail Bereiche">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
          class="h-[33px] w-full justify-start border-0 bg-[#f1f5f9] px-3 text-sm font-medium text-[#64748b] shadow-none"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          text
          class="h-[33px] w-full justify-start px-3 text-sm font-medium text-[#64748b] shadow-none"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          text
          class="h-[33px] w-full justify-start px-3 text-sm font-medium text-[#64748b] shadow-none"
        />
      </nav>
    </div>

    <div class="flex w-full flex-col">
      <Divider class="my-0 h-[29px] before:border-t-[#64748b]" />

      <div class="flex items-center justify-center gap-4">
        <Avatar
          label="B"
          shape="circle"
          class="h-[42px] w-[42px] bg-[#64748b] text-[21px] font-normal text-white"
        />
        <span class="text-base font-normal leading-[19px]">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>