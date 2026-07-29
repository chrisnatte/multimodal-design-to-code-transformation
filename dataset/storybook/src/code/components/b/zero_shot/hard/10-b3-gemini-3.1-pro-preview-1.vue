<template>
  <div class="bg-white p-8 flex flex-col gap-8 w-full min-h-screen font-['Inter']">
    <DataTable :value="users" class="w-[728px] border border-slate-200 rounded-lg overflow-hidden">
      <Column header="Nutzer" class="py-2.5 px-3.5 border-b border-slate-200">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-slate-200 text-slate-700 w-7 h-7 text-sm" />
            <span class="text-sm font-normal text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status" class="py-2.5 px-3.5 border-b border-slate-200">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" :rounded="false" class="text-[12.25px] font-bold px-2 py-1" />
        </template>
      </Column>
      
      <Column header="Fortschritt" class="py-2.5 px-3.5 border-b border-slate-200">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-[240px]">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-normal text-slate-700">{{ data.progressLabel }}</span>
              <span class="text-xs font-normal text-slate-900">{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressPercent" :showValue="false" class="h-[6px] bg-slate-200" :pt="{ value: { class: 'bg-emerald-500' } }" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktionen" class="py-2.5 px-3.5 border-b border-slate-200">
        <template #body="{ data, event }">
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="togglePopover($event, data)" class="w-8 h-8 p-0 text-slate-500 hover:bg-slate-100" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-[192px] rounded-md border border-slate-200 bg-white shadow-sm">
      <div class="flex flex-col gap-2 p-2.5">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium border-slate-200 text-slate-700 hover:bg-slate-50" />
        <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium border-slate-200 text-slate-700 hover:bg-slate-50" />
        <Button label="Duplizieren" icon="pi pi-clone" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium border-slate-200 text-slate-700 hover:bg-slate-50" />
        <Button label="Deaktiveren" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium border-slate-200 text-slate-700 hover:bg-slate-50" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';

const op = ref();
const selectedUser = ref(null);

const users = ref([
  { 
    name: 'Max Mustermann', 
    initial: 'M', 
    status: 'In Prüfung', 
    statusSeverity: 'danger', 
    progressLabel: 'Zertifizierung', 
    progressValue: 45, 
    progressPercent: 50 
  },
  { 
    name: 'Anna Schmidt', 
    initial: 'A', 
    status: 'Aktiv', 
    statusSeverity: 'success', 
    progressLabel: 'Onboarding', 
    progressValue: 87, 
    progressPercent: 50 
  },
  { 
    name: 'Lisa Weber', 
    initial: 'L', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressLabel: 'Onboarding', 
    progressValue: 4, 
    progressPercent: 50 
  },
  { 
    name: 'Paul Müller', 
    initial: 'P', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressLabel: 'Onboarding', 
    progressValue: 11, 
    progressPercent: 50 
  }
]);

const togglePopover = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>