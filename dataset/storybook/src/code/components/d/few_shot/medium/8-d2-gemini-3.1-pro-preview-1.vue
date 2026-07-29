<template>
  <div class="w-fit bg-white p-6">
    <div class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex flex-col items-center gap-6">
        <h2 class="text-2xl font-normal text-slate-800">Emails</h2>
        <div class="flex w-full flex-col gap-4">
          <Button
            icon="pi pi-inbox"
            label="Postfach"
            severity="secondary"
            class="w-full !border-transparent !bg-[#f1f5f9] !text-slate-700 !justify-start"
          />
          <Button
            icon="pi pi-folder"
            label="Ordner"
            severity="secondary"
            variant="text"
            class="w-full !text-slate-700 !justify-start"
          />
          <Button
            icon="pi pi-user"
            label="Konto"
            severity="secondary"
            variant="text"
            class="w-full !text-slate-700 !justify-start"
          />
        </div>
      </div>
      <div class="flex w-full flex-col">
        <Divider class="!border-slate-400" />
        <div class="mt-4 flex items-center justify-center gap-4">
          <Avatar label="B" size="large" shape="circle" class="!bg-[#64748b] !text-white" />
          <span class="text-base text-slate-800">Benutzername</span>
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