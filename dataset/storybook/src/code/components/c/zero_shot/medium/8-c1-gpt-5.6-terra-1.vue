<template>
  <aside class="flex h-[512px] w-60 flex-col bg-[#e3e9f2] px-6 pt-6 pb-5 text-[#5e728f]">
    <h1 class="text-center text-2xl font-normal text-[#31435f]">Emails</h1>

    <nav class="mt-6 flex flex-col gap-3" aria-label="Email navigation">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        text
        class="!h-8 !w-full !justify-start !border-0 !bg-[#f7f9fc] !px-3 !text-sm !font-normal !text-[#5e728f]"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        text
        class="!mt-1 !h-8 !w-full !justify-start !border-0 !px-3 !text-sm !font-normal !text-[#5e728f]"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        text
        class="!mt-1 !h-8 !w-full !justify-start !border-0 !px-3 !text-sm !font-normal !text-[#5e728f]"
      />
    </nav>

    <div class="mt-auto">
      <Divider class="!my-0" />
      <div class="flex items-center gap-4 pt-3">
        <Avatar label="B" shape="circle" class="!h-11 !w-11 !bg-[#637690] !text-xl !text-white" />
        <span class="text-base text-[#31435f]">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>