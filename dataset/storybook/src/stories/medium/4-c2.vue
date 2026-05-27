<template>
  <div class="min-h-[176px] bg-[#f5f6f7] flex items-start px-10 py-10">
    <div class="flex items-center gap-3">
      <Breadcrumb :home="home" :model="items" class="text-slate-500">
        <template #item="{ item, props }">
          <a v-bind="props.action" class="flex items-center gap-2 text-slate-500 hover:text-slate-700">
            <i v-if="item.icon" :class="item.icon" class="text-sm"></i>
            <span class="text-[28px] leading-none text-slate-300" v-if="item.separator">›</span>
            <span v-if="item.label && !item.separator" class="text-2xl">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>

      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          class="!bg-slate-200 !border-slate-200 !text-slate-700 !px-4 !py-2"
          @click="state.menuVisible = !state.menuVisible"
          aria-haspopup="true"
          aria-controls="dashboard_menu"
        />
        <Menu
          id="dashboard_menu"
          :model="dashboardItems"
          :popup="false"
          class="absolute left-0 top-[calc(100%+2px)] w-44"
          v-if="state.menuVisible"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const state = reactive({
  menuVisible: true
});

const home = reactive({
  icon: 'pi pi-home',
  url: '#'
});

const items = reactive([
  { separator: true },
  { label: 'Projekt1', url: '#' },
  { separator: true },
  { icon: 'pi pi-table', label: 'Gruppe1', url: '#' },
  { separator: true }
]);

const dashboardItems = reactive([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);
</script>