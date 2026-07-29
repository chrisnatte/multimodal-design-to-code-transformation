<template>
  <div class="w-[288px] h-[560px] p-6 bg-white">
    <div class="w-full h-full bg-[#e2e8f0] p-6 flex flex-col justify-between">
      <div class="flex flex-col gap-6">
        <h1 class="text-2xl text-slate-800 text-center font-normal">Emails</h1>
        <div class="flex flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            class="w-full justify-start bg-[#f1f5f9] border-none text-slate-700 hover:bg-white"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            text
            class="w-full justify-start text-slate-600"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            text
            class="w-full justify-start text-slate-600"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <Divider class="!my-0 before:border-slate-400" />
        <div class="flex items-center gap-4 justify-center">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="bg-[#64748b] text-white"
          />
          <span class="text-slate-700 text-base">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>