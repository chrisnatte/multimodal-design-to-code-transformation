<template>
  <aside class="flex h-[512px] w-60 flex-col bg-slate-200 px-6 py-5 text-slate-700">
    <h1 class="mb-5 text-center text-lg font-medium">Emails</h1>

    <nav class="flex flex-col gap-3">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        :severity="selectedFolder === 'Postfach' ? 'secondary' : undefined"
        :text="selectedFolder !== 'Postfach'"
        class="!h-8 !justify-start !px-3 !text-sm"
        @click="selectedFolder = 'Postfach'"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        :text="selectedFolder !== 'Ordner'"
        class="!h-8 !justify-start !px-3 !text-sm"
        @click="selectedFolder = 'Ordner'"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        :text="selectedFolder !== 'Konto'"
        class="!h-8 !justify-start !px-3 !text-sm"
        @click="selectedFolder = 'Konto'"
      />
    </nav>

    <div class="mt-auto">
      <Divider class="!my-3" />
      <div class="flex items-center gap-3 px-3">
        <Avatar label="B" shape="circle" />
        <span class="text-sm">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const selectedFolder = ref('Postfach')
</script>