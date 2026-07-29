<template>
  <aside class="h-[560px] w-[288px] bg-white p-6">
    <div class="flex h-full flex-col justify-between bg-slate-200 p-6">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-2xl font-normal text-slate-700">Emails</h1>

        <nav class="flex w-full flex-col gap-4" aria-label="E-Mail Navigation">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            text
            class="w-full !justify-start !border-0 !px-3 !py-2 !text-sm"
            :class="{ '!bg-slate-50': activeItem === 'Postfach' }"
            @click="activeItem = 'Postfach'"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            text
            class="w-full !justify-start !border-0 !px-3 !py-2 !text-sm"
            :class="{ '!bg-slate-50': activeItem === 'Ordner' }"
            @click="activeItem = 'Ordner'"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            text
            class="w-full !justify-start !border-0 !px-3 !py-2 !text-sm"
            :class="{ '!bg-slate-50': activeItem === 'Konto' }"
            @click="activeItem = 'Konto'"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col">
        <Divider class="!my-3" />
        <div class="flex items-center gap-4 px-3">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base text-slate-700">Benutzername</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const activeItem = ref('Postfach')
</script>