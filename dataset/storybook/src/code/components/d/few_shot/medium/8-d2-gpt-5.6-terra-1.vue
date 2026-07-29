<template>
  <div class="flex h-[560px] w-[288px] bg-white p-6">
    <aside class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6">
      <div class="flex flex-col items-center gap-6">
        <h1 class="m-0 text-2xl font-normal text-[#334155]">Emails</h1>

        <nav class="flex w-full flex-col gap-4" aria-label="E-Mail-Navigation">
          <Button
            v-for="item in navigationItems"
            :key="item.label"
            :label="item.label"
            :icon="item.icon"
            severity="secondary"
            variant="outlined"
            size="small"
            class="w-full !justify-start !border-transparent !px-3 !py-2 !text-sm"
            :class="activeSection === item.label ? '!border-[#f1f5f9] !bg-[#f1f5f9]' : '!bg-transparent'"
            @click="activeSection = item.label"
          />
        </nav>
      </div>

      <div class="flex w-full flex-col">
        <Divider class="!my-0" />
        <div class="flex items-center justify-center gap-4">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            aria-label="Benutzername"
            :dt="{
              background: '#64748b',
              color: '#ffffff',
            }"
          />
          <span class="text-base font-normal text-[#334155]">Benutzername</span>
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

const activeSection = ref('Postfach')

const navigationItems = [
  { label: 'Postfach', icon: 'pi pi-inbox' },
  { label: 'Ordner', icon: 'pi pi-folder' },
  { label: 'Konto', icon: 'pi pi-user' },
]
</script>