<template>
  <div class="p-8 bg-white w-full max-w-5xl">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" class="py-4 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium" />
            <span class="text-surface-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" class="py-4 border-b border-surface-200">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="font-bold text-xs px-2 py-1" :rounded="false" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" class="py-4 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-60">
            <div class="flex justify-between items-center text-[10px] text-surface-500">
              <span>{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-1.5 flex overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full" :style="{ width: data.progress + '%' }"></div>
            </div>
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="py-4 border-b border-surface-200">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            class="text-surface-500 hover:bg-surface-100 w-8 h-8 p-0" 
            @click="togglePopover($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-48">
      <div class="flex flex-col gap-2 p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" variant="outlined" severity="secondary" class="w-full justify-start text-sm border-surface-200 text-surface-600 hover:bg-surface-50" />
        <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="w-full justify-start text-sm border-surface-200 text-surface-600 hover:bg-surface-50" />
        <Button label="Duplizieren" icon="pi pi-clone" variant="outlined" severity="secondary" class="w-full justify-start text-sm border-surface-200 text-surface-600 hover:bg-surface-50" />
        <Button label="Deaktiveren" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start text-sm border-surface-200 text-surface-600 hover:bg-surface-50" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  { 
    id: 1, 
    name: 'Max Mustermann', 
    initials: 'M', 
    status: 'In Prüfung', 
    statusSeverity: 'danger', 
    progressLabel: 'Zertifizierung', 
    progress: 45 
  },
  { 
    id: 2, 
    name: 'Anna Schmidt', 
    initials: 'A', 
    status: 'Aktiv', 
    statusSeverity: 'success', 
    progressLabel: 'Onboarding', 
    progress: 87 
  },
  { 
    id: 3, 
    name: 'Lisa Weber', 
    initials: 'L', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressLabel: 'Onboarding', 
    progress: 4 
  },
  { 
    id: 4, 
    name: 'Paul Müller', 
    initials: 'P', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressLabel: 'Onboarding', 
    progress: 11 
  }
]);

const op = ref();
const selectedUser = ref(null);

const togglePopover = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>