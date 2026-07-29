<template>
  <div class="p-6 w-full max-w-4xl">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      
      <Column field="progressValue" header="Fortschritt" class="w-[300px]">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-full">
            <div class="flex justify-between items-center text-xs text-slate-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="w-24">
        <template #body>
          <Button 
            icon="pi pi-ellipsis-h" 
            text 
            severity="secondary" 
            @click="togglePopover($event)" 
            class="text-slate-500 hover:bg-slate-100"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-48">
        <Button label="Profil bearbeiten" icon="pi pi-file-edit" outlined severity="secondary" class="w-full !justify-start text-slate-600 border-slate-200" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="w-full !justify-start text-slate-600 border-slate-200" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="w-full !justify-start text-slate-600 border-slate-200" />
        <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="w-full !justify-start text-slate-600 border-slate-200" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 11 },
]);

const op = ref();

const togglePopover = (event: Event) => {
  op.value.toggle(event);
};

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'In Prüfung': return 'danger';
    case 'Aktiv': return 'success';
    case 'Inaktiv': return 'warn';
    default: return 'info';
  }
};
</script>