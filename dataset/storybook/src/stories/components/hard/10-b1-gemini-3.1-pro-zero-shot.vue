<template>
  <div class="bg-white p-6 w-full max-w-[897px]">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" class="bg-[#e2e8f0] text-[#1e293b] text-sm" />
            <span class="text-sm font-normal font-sans text-[#1e293b]">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" :rounded="false" class="text-[12.25px] font-bold font-sans" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-[240px]">
            <div class="flex justify-between items-center w-full">
              <span class="text-[10px] font-normal font-sans text-[#1e293b]">{{ data.process }}</span>
              <span class="text-xs font-normal font-sans text-[#1e293b]">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text plain @click="toggle" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="w-full justify-start text-sm font-medium font-sans" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="w-full justify-start text-sm font-medium font-sans" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="w-full justify-start text-sm font-medium font-sans" />
        <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="w-full justify-start text-sm font-medium font-sans" />
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
  { name: 'Max Mustermann', avatar: 'M', status: 'In Prüfung', severity: 'danger', process: 'Zertifizierung', progress: 45 },
  { name: 'Anna Schmidt', avatar: 'A', status: 'Aktiv', severity: 'success', process: 'Onboarding', progress: 87 },
  { name: 'Lisa Weber', avatar: 'L', status: 'Inaktiv', severity: 'warn', process: 'Onboarding', progress: 4 },
  { name: 'Paul Müller', avatar: 'P', status: 'Inaktiv', severity: 'warn', process: 'Onboarding', progress: 11 },
]);

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};
</script>