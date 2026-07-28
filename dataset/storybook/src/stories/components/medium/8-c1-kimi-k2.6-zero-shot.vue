<template>
  <Panel class="w-72 h-screen bg-slate-200 border-none shadow-none">
    <div class="flex flex-col h-full p-6">
      <div class="text-center text-xl text-slate-700 pt-2 mb-6">Emails</div>

      <Menu :model="items" class="w-full border-none bg-transparent">
        <template #item="{ item, props }">
          <a
            v-bind="props.action"
            @click="activeItem = item.key"
            :class="[
              'flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer mb-1 text-sm font-medium transition-colors',
              activeItem === item.key ? 'bg-white text-slate-700' : 'text-slate-500 hover:text-slate-700'
            ]"
          >
            <i :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </template>
      </Menu>

      <div class="flex-grow" />

      <Divider class="my-4" />

      <div class="flex items-center gap-3 px-2 pb-2">
        <Avatar label="B" shape="circle" class="bg-slate-500 text-white" />
        <span class="text-sm text-slate-700">Benutzername</span>
      </div>
    </div>
  </Panel>
</template>

<script setup>
import { ref } from 'vue';
import Panel from 'primevue/panel';
import Menu from 'primevue/menu';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const activeItem = ref('postfach');

const items = ref([
  { label: 'Postfach', icon: 'pi pi-inbox', key: 'postfach' },
  { label: 'Ordner', icon: 'pi pi-folder', key: 'ordner' },
  { label: 'Konto', icon: 'pi pi-user', key: 'konto' }
]);
</script>