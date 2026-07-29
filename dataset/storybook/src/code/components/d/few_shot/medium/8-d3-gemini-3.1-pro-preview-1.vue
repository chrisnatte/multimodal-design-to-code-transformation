<template>
  <div class="flex h-[560px] w-[288px] bg-white p-6">
    <div class="flex h-full w-full flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex flex-col items-center gap-6">
        <h2 class="text-2xl font-normal text-slate-800">Emails</h2>
        
        <div class="flex w-full flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="text"
            class="w-full !justify-start !bg-[#f1f5f9] !font-medium !text-slate-800"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            variant="text"
            class="w-full !justify-start !font-medium !text-slate-600"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            variant="text"
            class="w-full !justify-start !font-medium !text-slate-600"
          />
        </div>
      </div>

      <div class="flex w-full flex-col gap-4">
        <Divider
          :pt="{
            root: 'before:border-slate-500 !m-0',
          }"
        />
        <div class="flex items-center justify-center gap-4">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="!bg-slate-500 !text-white"
          />
          <span class="text-base text-slate-800">Benutzername</span>
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