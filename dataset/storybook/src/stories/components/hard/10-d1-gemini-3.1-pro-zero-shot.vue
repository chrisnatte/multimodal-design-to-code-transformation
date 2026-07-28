<template>
  <div class="bg-white rounded-lg inline-block pt-1 pb-4 pr-4">
    <DataTable :value="users" class="w-[728px]">
      <Column header="Nutzer" style="width: 256px">
        <template #body="{ data }">
          <div class="flex flex-row items-center gap-3 py-2.5 px-3.5 border-b border-slate-100">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-700 font-normal w-7 h-7 text-sm flex-shrink-0" />
            <span class="text-sm font-normal text-slate-900 truncate">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" style="width: 108px">
        <template #body="{ data }">
          <div class="flex items-center py-2.5 px-3.5 border-b border-slate-100 h-[50px]">
             <Tag :value="data.status" :severity="data.statusSeverity" class="font-bold text-[12px] px-2 py-0.5 rounded-sm" />
          </div>
        </template>
      </Column>
      <Column header="Fortschritt" style="width: 256px">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-[240px] py-2.5 px-3.5 border-b border-slate-100 h-[50px] justify-center">
            <div class="flex justify-between items-end w-full">
              <span class="text-[10px] font-normal text-slate-600 leading-none">{{ data.progressStep }}</span>
              <span class="text-xs font-normal text-slate-900 leading-none">{{ data.progressPercentage }} %</span>
            </div>
            <ProgressBar :value="data.progressPercentage" :showValue="false" style="height: 6px" class="w-full bg-slate-200" />
          </div>
        </template>
      </Column>
      <Column header="Aktion" style="width: 108px">
        <template #body="slotProps">
          <div class="flex items-center py-2.5 px-3.5 border-b border-slate-100 h-[50px]">
            <Button icon="pi pi-ellipsis-h" text plain :class="['w-9 h-7 p-0', { 'bg-slate-100': slotProps.index === 2 }]" @click="toggleMenu($event)" />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col stretch w-[170px] gap-2 p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start text-sm border-slate-200 text-slate-600 px-3 py-1.5 font-medium" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start text-sm border-slate-200 text-slate-600 px-3 py-1.5 font-medium" />
        <Button label="Duplizieren" icon="pi pi-clone" outlined severity="secondary" class="justify-start text-sm border-slate-200 text-slate-600 px-3 py-1.5 font-medium" />
        <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="justify-start text-sm border-slate-200 text-slate-600 px-3 py-1.5 font-medium" />
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
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  { 
    id: 1, 
    name: 'Max Mustermann', 
    initials: 'M', 
    status: 'In Prüfung', 
    statusSeverity: 'danger', 
    progressStep: 'Zertifizierung', 
    progressPercentage: 45 
  },
  { 
    id: 2, 
    name: 'Anna Schmidt', 
    initials: 'A', 
    status: 'Aktiv', 
    statusSeverity: 'success', 
    progressStep: 'Onboarding', 
    progressPercentage: 87 
  },
  { 
    id: 3, 
    name: 'Lisa Weber', 
    initials: 'L', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressStep: 'Onboarding', 
    progressPercentage: 4 
  },
  { 
    id: 4, 
    name: 'Paul Müller', 
    initials: 'P', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    progressStep: 'Onboarding', 
    progressPercentage: 11 
  },
]);

const op = ref(null);

const toggleMenu = (event) => {
  op.value.toggle(event);
};
</script>