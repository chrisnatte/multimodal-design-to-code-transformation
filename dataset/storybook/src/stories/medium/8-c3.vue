<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="w-[240px] h-[720px] bg-slate-200 flex flex-col px-6 py-8">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-5xl font-medium text-slate-700 leading-none">Emails</h1>

        <div class="w-full flex flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            class="w-full justify-start !bg-slate-100 !border-slate-100 !text-slate-500"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            text
            class="w-full justify-start !text-slate-500"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            text
            class="w-full justify-start !text-slate-500"
          />
        </div>
      </div>

      <div class="mt-auto flex flex-col gap-4">
        <Divider class="!m-0 !border-slate-400" />
        <div class="flex items-center gap-4">
          <Avatar label="B" shape="circle" size="large" class="!bg-slate-500 !text-white" />
          <span class="text-3xl text-slate-700">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'

const state = reactive({
  selectedMenu: 'Postfach'
})
</script>