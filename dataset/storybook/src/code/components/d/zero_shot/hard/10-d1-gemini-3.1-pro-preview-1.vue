<template>
  <div class="p-8 bg-white w-full max-w-5xl">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-surface-100 text-surface-700 text-sm font-normal w-7 h-7" />
            <span class="text-sm text-surface-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="text-xs font-bold px-2 py-1" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between items-center">
              <span class="text-[10px] text-surface-600">{{ data.progressLabel }}</span>
              <span class="text-xs text-surface-900">{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" style="height: 6px" :pt="{ value: { class: 'bg-emerald-500' } }"></ProgressBar>
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="py-3 border-b border-surface-200">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text plain rounded aria-haspopup="true" aria-controls="overlay_menu" @click="toggleMenu" class="w-8 h-8 p-0 text-surface-500 hover:bg-surface-100" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48 p-2">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center gap-2 px-3 py-2 text-sm text-surface-700 hover:bg-surface-50 rounded-md border border-surface-200 mb-2 last:mb-0">
          <span :class="item.icon" class="text-surface-500 text-sm"></span>
          <span class="font-medium">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 11 },
]);

const getSeverity = (status) => {
  switch (status) {
    case 'In Prüfung': return 'danger';
    case 'Aktiv': return 'success';
    case 'Inaktiv': return 'warn';
    default: return 'info';
  }
};

const menu = ref();
const menuItems = ref([
  { label: 'Profil bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status ändern', icon: 'pi pi-flag' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Deaktiveren', icon: 'pi pi-trash' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>