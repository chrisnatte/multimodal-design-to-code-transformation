<template>
  <aside class="flex h-[560px] w-72 flex-col bg-white p-6">
    <div class="flex h-[512px] w-full flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <span class="text-2xl font-normal">Emails</span>

        <div class="flex w-full flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start !bg-[#f1f5f9]"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
        </div>
      </div>

      <div class="flex w-full flex-col items-center">
        <Divider class="w-full" style="--p-divider-border-color: #64748b" />
        <div class="flex items-center justify-center gap-4">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="!bg-[#64748b] !text-white"
            aria-label="Benutzername"
          />
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