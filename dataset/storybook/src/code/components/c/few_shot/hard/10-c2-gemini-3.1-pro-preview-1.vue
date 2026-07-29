<template>
  <div class="p-8 bg-white w-full max-w-4xl">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-100 !text-slate-600 font-medium" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      
      <Column field="progressValue" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-64">
            <div class="flex justify-between text-xs text-slate-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" headerClass="w-24">
        <template #body="{ data, event }">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            severity="secondary"
            rounded
            @click="togglePopover($event, data)"
            :class="{ 'bg-slate-100': selectedUser?.id === data.id }"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-48">
        <Button label="Profil bearbeiten" icon="pi pi-file-edit" variant="outlined" severity="secondary" class="!justify-start !text-slate-600 !border-slate-200 !font-normal" />
        <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="!justify-start !text-slate-600 !border-slate-200 !font-normal" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="!justify-start !text-slate-600 !border-slate-200 !font-normal" />
        <Button label="Deaktiveren" icon="pi pi-trash" variant="outlined" severity="secondary" class="!justify-start !text-slate-600 !border-slate-200 !font-normal" />
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
const selectedUser = ref(null);

const togglePopover = (event: Event, user: any) => {
  selectedUser.value = user;
  op.value.toggle(event);
};

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'In Prüfung':
      return 'danger';
    case 'Aktiv':
      return 'success';
    case 'Inaktiv':
      return 'warn';
    default:
      return 'info';
  }
};
</script>