<template>
  <aside class="box-border h-[560px] w-[288px] bg-white p-6">
    <div class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex w-full flex-col items-center gap-6">
        <h1 class="m-0 text-2xl font-normal leading-[29px] text-[#334155]">Emails</h1>

        <nav class="flex w-full flex-col gap-4" aria-label="E-Mail-Navigation">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            text
            :class="[
              menuSelection === 'postfach'
                ? '!bg-[#f1f5f9]'
                : '!bg-transparent',
              '!h-[33px] !w-full !justify-start !border-0 !px-3 !py-0 !text-sm !font-medium !text-[#64748b] !shadow-none'
            ]"
            @click="menuSelection = 'postfach'"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            text
            :class="[
              menuSelection === 'ordner'
                ? '!bg-[#f1f5f9]'
                : '!bg-transparent',
              '!h-[33px] !w-full !justify-start !border-0 !px-3 !py-0 !text-sm !font-medium !text-[#64748b] !shadow-none'
            ]"
            @click="menuSelection = 'ordner'"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            text
            :class="[
              menuSelection === 'konto'
                ? '!bg-[#f1f5f9]'
                : '!bg-transparent',
              '!h-[33px] !w-full !justify-start !border-0 !px-3 !py-0 !text-sm !font-medium !text-[#64748b] !shadow-none'
            ]"
            @click="menuSelection = 'konto'"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col items-center">
        <Divider class="!my-0 !h-[29px] !w-full [&:before]:!border-[#64748b]" />
        <div class="flex items-center gap-4">
          <Avatar
            label="B"
            shape="circle"
            class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px] !font-normal !text-white"
          />
          <span class="text-base font-normal text-[#334155]">Benutzername</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const menuSelection = ref('postfach')
</script>