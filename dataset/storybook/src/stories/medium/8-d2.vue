<template>
  <aside class="w-[240px] h-[512px] bg-slate-200 flex flex-col justify-between p-6">
    <div class="flex flex-col items-center gap-6 w-full">
      <h1 class="text-[44px] leading-none font-normal text-slate-700">Emails</h1>

      <div class="flex flex-col gap-4 w-full">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          variant="outlined"
          class="w-full justify-start !text-slate-500 !border-slate-300 !bg-slate-100"
          @click="state.activeItem = 'Postfach'"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          variant="text"
          class="w-full justify-start !text-slate-500"
          @click="state.activeItem = 'Ordner'"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          variant="text"
          class="w-full justify-start !text-slate-500"
          @click="state.activeItem = 'Konto'"
        />
      </div>
    </div>

    <div class="flex flex-col w-full">
      <Divider class="!my-0 !border-slate-500" />
      <div class="flex items-center gap-4 pt-4">
        <Avatar label="B" size="large" shape="circle" class="!bg-slate-500 !text-slate-100" />
        <span class="text-[30px] text-slate-700 font-normal">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const state = reactive({
  activeItem: 'Postfach'
})
</script>