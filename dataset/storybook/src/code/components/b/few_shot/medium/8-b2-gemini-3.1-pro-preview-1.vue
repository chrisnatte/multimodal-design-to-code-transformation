<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex h-[512px] w-[240px] flex-col justify-between bg-slate-200 p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <span class="text-2xl font-normal text-gray-900">Emails</span>
        <div class="flex w-full flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="w-full !justify-start bg-slate-100"
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
        </div>
      </div>
      
      <div class="flex w-full flex-col">
        <Divider />
        <div class="flex flex-row items-center justify-center gap-4">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base font-normal text-gray-900">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>