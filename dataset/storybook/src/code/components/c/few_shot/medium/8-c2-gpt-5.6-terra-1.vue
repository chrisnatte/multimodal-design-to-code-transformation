<template>
  <aside class="flex h-[512px] w-[240px] flex-col bg-slate-200 px-6 py-6 text-slate-700">
    <h1 class="mb-6 text-center text-xl font-normal">Emails</h1>

    <nav class="flex flex-col gap-3">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        variant="text"
        severity="secondary"
        fluid
        class="!justify-start !bg-white/70 !px-3 !py-1.5"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        variant="text"
        severity="secondary"
        fluid
        class="!justify-start !px-3 !py-1.5"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        variant="text"
        severity="secondary"
        fluid
        class="!justify-start !px-3 !py-1.5"
      />
    </nav>

    <div class="mt-auto">
      <Divider class="!my-3" />
      <div class="flex items-center gap-3 px-3">
        <Avatar label="B" shape="circle" class="!bg-slate-500 !text-white" />
        <span class="text-sm">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>