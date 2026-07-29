<template>
  <div class="w-[288px] bg-white p-6">
    <aside class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <span class="text-2xl font-normal text-slate-700">Emails</span>

        <nav class="flex w-full flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start !border-0 !bg-[#f1f5f9] !px-3 !py-2 !text-sm !text-slate-500"
            :class="{ '!text-sky-700': activeItem === 'Postfach' }"
            @click="activeItem = 'Postfach'"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start !border-0 !bg-transparent !px-3 !py-2 !text-sm !text-slate-500"
            :class="{ '!bg-[#f1f5f9] !text-sky-700': activeItem === 'Ordner' }"
            @click="activeItem = 'Ordner'"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start !border-0 !bg-transparent !px-3 !py-2 !text-sm !text-slate-500"
            :class="{ '!bg-[#f1f5f9] !text-sky-700': activeItem === 'Konto' }"
            @click="activeItem = 'Konto'"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col">
        <Divider class="!my-0" />
        <div class="flex items-center justify-center gap-4 pt-2">
          <Avatar label="B" size="large" shape="circle" class="!bg-slate-500 !text-white" />
          <span class="text-base text-slate-700">Benutzername</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const activeItem = ref('Postfach')
</script>