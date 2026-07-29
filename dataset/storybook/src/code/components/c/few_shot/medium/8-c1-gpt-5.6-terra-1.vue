<template>
  <aside class="flex h-[512px] w-[240px] flex-col bg-slate-200 px-6 py-6 text-slate-700">
    <h1 class="mb-6 text-center text-xl font-medium">Emails</h1>

    <nav class="flex flex-col gap-3">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        text
        severity="secondary"
        class="w-full !justify-start !bg-white/65 !px-3 !py-2"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        text
        severity="secondary"
        class="w-full !justify-start !px-3 !py-2"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        text
        severity="secondary"
        class="w-full !justify-start !px-3 !py-2"
      />
    </nav>

    <div class="mt-auto border-t border-slate-500 pt-3">
      <Button text severity="secondary" class="w-full !justify-start !gap-3 !p-0">
        <template #icon>
          <Avatar label="B" shape="circle" class="!h-10 !w-10 !bg-slate-500 !text-white" />
        </template>
        <span class="text-sm">Benutzername</span>
      </Button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
</script>