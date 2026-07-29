<template>
  <div class="flex h-[600px] w-[300px] flex-col bg-slate-100 p-6">
    <h1 class="mb-8 text-center text-2xl font-medium text-slate-700">Emails</h1>

    <div class="flex flex-col gap-2">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        severity="secondary"
        class="w-full !justify-start !bg-white !text-slate-600"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        severity="secondary"
        text
        class="w-full !justify-start !text-slate-600"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        severity="secondary"
        text
        class="w-full !justify-start !text-slate-600"
      />
    </div>

    <div class="mt-auto">
      <Divider class="!border-slate-300" />
      <div class="flex items-center gap-4 pt-4">
        <Avatar label="B" size="large" shape="circle" class="!bg-slate-500 !text-white" />
        <span class="text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>