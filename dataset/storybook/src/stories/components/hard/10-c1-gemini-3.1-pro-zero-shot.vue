<template>
  <div class="p-8 bg-white font-sans">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" headerClass="text-slate-700 font-semibold pb-4 border-b border-slate-100 text-left" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium w-8 h-8 text-sm" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status" headerClass="text-slate-700 font-semibold pb-4 border-b border-slate-100 text-left" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" rounded class="px-3 py-1 text-xs font-semibold" />
        </template>
      </Column>

      <Column field="progressValue" header="Fortschritt" headerClass="text-slate-700 font-semibold pb-4 border-b border-slate-100 text-left" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-56">
            <div class="flex justify-between text-xs text-slate-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" style="height: 6px" class="bg-slate-200 [&>.p-progressbar-value]:bg-emerald-500 border-none" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" headerClass="text-slate-700 font-semibold pb-4 border-b border-slate-100 text-left" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="overlay_menu" @click="toggleMenu($event)" class="text-slate-500 hover:bg-slate-100 w-8 h-8 p-0" :class="{'bg-slate-100': data.id === 3}" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-56 p-2 border border-slate-200 shadow-sm rounded-xl bg-white">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center gap-3 p-2.5 mb-1.5 last:mb-0 border border-slate-100 rounded-lg hover:bg-slate-50 text-slate-600 text-sm cursor-pointer transition-colors">
          <span :class="item.icon" class="text-slate-400 text-base"></span>
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
  { id: 1, name: 'Max Mustermann', initials: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, name: 'Anna Schmidt', initials: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, name: 'Lisa Weber', initials: 'L', status: 'Inaktiv', statusSeverity: 'warning', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, name: 'Paul Müller', initials: 'P', status: 'Inaktiv', statusSeverity: 'warning', progressLabel: 'Onboarding', progressValue: 11 },
]);

const menuItems = ref([
  { label: 'Profil bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status ändern', icon: 'pi pi-flag' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Deaktiveren', icon: 'pi pi-trash' }
]);

const menu = ref();

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>