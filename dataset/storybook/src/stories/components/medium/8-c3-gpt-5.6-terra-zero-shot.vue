<template>
  <main class="min-h-screen bg-white p-6">
    <aside class="flex h-[512px] w-[240px] flex-col bg-slate-200 px-6 py-6 text-slate-600">
      <h1 class="mb-6 text-center text-2xl font-normal text-slate-700">Emails</h1>

      <nav class="flex flex-col gap-3" aria-label="E-Mail Navigation">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          text
          class="!h-8 !justify-start !rounded-md !bg-slate-50 !px-3 !text-sm !font-normal !text-slate-500"
          @click="selectedNav = 'Postfach'"
        />
        <Button
          label="Order"
          icon="pi pi-folder"
          text
          class="!h-8 !justify-start !px-3 !text-sm !font-normal !text-slate-500"
          @click="selectedNav = 'Order'"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          text
          class="!h-8 !justify-start !px-3 !text-sm !font-normal !text-slate-500"
          @click="selectedNav = 'Konto'"
        />
      </nav>

      <div class="mt-auto">
        <Divider class="!my-3" />
        <div class="flex items-center gap-3 px-3">
          <Avatar label="B" shape="circle" size="large" class="!bg-slate-500 !text-white" />
          <span class="text-base text-slate-700">Benutzername</span>
        </div>
      </div>
    </aside>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const selectedNav = ref('Postfach')
</script>