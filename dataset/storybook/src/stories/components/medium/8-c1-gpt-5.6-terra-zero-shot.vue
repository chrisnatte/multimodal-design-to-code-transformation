<template>
  <aside class="ml-6 mt-6 flex h-[512px] w-60 flex-col bg-slate-200 px-6 py-5 text-slate-600">
    <h1 class="mb-6 text-center text-2xl font-normal text-slate-700">Emails</h1>

    <Menu :model="menuItems" class="w-full border-0 bg-transparent p-0">
      <template #item="{ item, props }">
        <a
          v-bind="props.action"
          class="flex h-[31px] w-full items-center gap-2 rounded-md px-2.5 text-[15px] text-slate-500"
          :class="{ 'bg-slate-50': item.active }"
        >
          <i :class="item.icon" class="text-sm"></i>
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Menu>

    <div class="mt-auto">
      <Divider class="my-3 before:border-slate-500" />
      <div class="flex items-center gap-4 pt-0.5">
        <Avatar
          label="B"
          shape="circle"
          class="!h-11 !w-11 !bg-slate-500 !text-xl !font-normal !text-white"
        />
        <span class="text-[15px] text-slate-700">Benutzername</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import Menu from 'primevue/menu'

const menuItems = ref([
  { label: 'Postfach', icon: 'pi pi-inbox', active: true },
  { label: 'Ordner', icon: 'pi pi-folder' },
  { label: 'Konto', icon: 'pi pi-user' }
])
</script>