<template>
  <aside class="w-72 bg-white p-6">
    <div class="flex h-[512px] w-60 flex-col justify-between bg-slate-200 p-6">
      <div class="flex flex-col items-center gap-6">
        <span class="text-2xl font-normal">Emails</span>
        <nav class="flex w-full flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            fluid
            class="!justify-start"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            outlined
            fluid
            class="!justify-start"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            outlined
            fluid
            class="!justify-start"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col">
        <Divider />
        <div class="flex items-center gap-4 px-3">
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