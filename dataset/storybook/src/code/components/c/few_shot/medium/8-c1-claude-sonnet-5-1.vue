<template>
  <div class="flex h-screen w-64 flex-col justify-between bg-slate-100 p-4">
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-xl text-slate-700">Emails</h2>
      <Menu
        :model="menuItems"
        :pt="{
          root: '!border-none !bg-transparent w-full',
          list: 'flex flex-col gap-1',
        }"
      >
        <template #item="{ item }">
          <a
            class="flex items-center gap-2 rounded-md px-3 py-2 text-slate-600"
            :class="{ 'bg-slate-200': item.active }"
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </template>
      </Menu>
    </div>
    <div>
      <Divider />
      <div class="flex items-center gap-2 px-2 py-2">
        <Avatar label="B" shape="circle" style="background-color: #64748b; color: #fff" />
        <span class="text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Menu from 'primevue/menu'
  import Divider from 'primevue/divider'
  import Avatar from 'primevue/avatar'

  const menuItems = ref([
    { label: 'Postfach', icon: 'pi pi-inbox', active: true },
    { label: 'Ordner', icon: 'pi pi-folder', active: false },
    { label: 'Konto', icon: 'pi pi-user', active: false },
  ])
</script>