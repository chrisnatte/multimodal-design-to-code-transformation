<template>
  <div class="p-6 bg-white inline-block">
    <div class="w-60 flex flex-col justify-between p-6 gap-6 bg-slate-100 items-center" style="min-height: 512px;">
      <div class="w-full flex flex-col gap-6 items-center">
        <span class="text-2xl font-normal text-gray-800">Emails</span>

        <div class="w-full flex flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="w-full justify-start bg-slate-200"
            @click="activeMenu = 'postfach'"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            outlined
            class="w-full justify-start"
            @click="activeMenu = 'ordner'"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            outlined
            class="w-full justify-start"
            @click="activeMenu = 'konto'"
          />
        </div>
      </div>

      <div class="w-full flex flex-col items-center">
        <Divider class="w-full" />
        <div class="w-full flex items-center gap-4 px-3">
          <Avatar :label="userInitial" size="large" shape="circle" style="background-color: #64748c; color: #ffffff;" />
          <span class="text-base font-normal text-gray-800">{{ username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const activeMenu = ref('postfach')
const username = ref('Benutzername')
const userInitial = ref('B')
</script>