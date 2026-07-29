<template>
  <aside class="h-[560px] w-[288px] bg-white p-6">
    <div class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <span class="text-2xl font-normal">Emails</span>

        <nav class="flex w-full flex-col gap-4" aria-label="E-Mail-Navigation">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="w-full !justify-start !bg-[#f1f5f9]"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col items-center">
        <Divider class="!my-0" />
        <div class="mt-3 flex items-center gap-4">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base font-normal">Benutzername</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>