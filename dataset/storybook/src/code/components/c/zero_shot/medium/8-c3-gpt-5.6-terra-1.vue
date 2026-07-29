<template>
  <main class="min-h-screen bg-white p-6">
    <aside class="flex h-[32rem] w-60 flex-col bg-slate-200 px-6 py-5">
      <h1 class="mb-5 text-center text-2xl font-medium text-slate-700">Emails</h1>

      <nav class="flex flex-col gap-3" aria-label="E-Mail Navigation">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          size="small"
          fluid
          :class="[
            '!justify-start !border-0 !px-3 !py-2 !text-sm !font-normal',
            activeSection === 'Postfach'
              ? '!bg-slate-50 !text-slate-500'
              : '!bg-transparent !text-slate-500'
          ]"
          @click="activeSection = 'Postfach'"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          size="small"
          variant="text"
          fluid
          :class="[
            '!justify-start !px-3 !py-2 !text-sm !font-normal !text-slate-500',
            activeSection === 'Ordner' ? '!bg-slate-50' : ''
          ]"
          @click="activeSection = 'Ordner'"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          size="small"
          variant="text"
          fluid
          :class="[
            '!justify-start !px-3 !py-2 !text-sm !font-normal !text-slate-500',
            activeSection === 'Konto' ? '!bg-slate-50' : ''
          ]"
          @click="activeSection = 'Konto'"
        />
      </nav>

      <div class="mt-auto">
        <Divider class="!my-0" />
        <div class="mt-3 flex items-center gap-3">
          <Avatar
            label="B"
            shape="circle"
            class="!h-11 !w-11 !bg-slate-500 !text-xl !text-white"
            aria-label="Benutzername"
          />
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

const activeSection = ref('Postfach')
</script>