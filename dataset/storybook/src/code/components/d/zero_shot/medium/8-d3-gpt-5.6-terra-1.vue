<template>
  <div class="flex h-[560px] w-[288px] bg-white p-6 font-sans text-[#34445d]">
    <aside
      class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6"
      aria-label="E-Mail Navigation"
    >
      <div class="flex w-full flex-col items-center gap-6">
        <h1 class="m-0 text-2xl font-normal leading-[29px]">Emails</h1>

        <nav class="flex w-full flex-col gap-4" aria-label="Hauptnavigation">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="outlined"
            :class="[
              'h-[33px] w-full justify-start !border-0 !px-3 !py-2 !text-sm !font-medium !shadow-none',
              selectedNav === 'Postfach'
                ? '!bg-[#f1f5f9] !text-[#62748d]'
                : '!bg-transparent !text-[#62748d]'
            ]"
            @click="selectedNav = 'Postfach'"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            variant="outlined"
            :class="[
              'h-[33px] w-full justify-start !border-0 !px-3 !py-2 !text-sm !font-medium !shadow-none',
              selectedNav === 'Ordner'
                ? '!bg-[#f1f5f9] !text-[#62748d]'
                : '!bg-transparent !text-[#62748d]'
            ]"
            @click="selectedNav = 'Ordner'"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            variant="outlined"
            :class="[
              'h-[33px] w-full justify-start !border-0 !px-3 !py-2 !text-sm !font-medium !shadow-none',
              selectedNav === 'Konto'
                ? '!bg-[#f1f5f9] !text-[#62748d]'
                : '!bg-transparent !text-[#62748d]'
            ]"
            @click="selectedNav = 'Konto'"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col">
        <Divider class="!my-0 !h-[29px]" />

        <div class="flex items-center gap-4 px-3">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px] !font-normal !text-white"
            aria-label="Benutzername"
          />
          <span class="text-base font-normal leading-[19px]">Benutzername</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const selectedNav = ref('Postfach')
</script>