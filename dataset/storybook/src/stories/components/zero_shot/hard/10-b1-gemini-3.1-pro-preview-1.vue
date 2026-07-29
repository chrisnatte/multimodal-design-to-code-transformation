<template>
  <div class="bg-white w-full min-h-[410px] p-6 relative font-['Inter']">
    <DataTable :value="users" class="w-[728px]">
      <Column field="name" header="Nutzer" style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" class="bg-[#e2e8f0] text-sm" />
            <span class="text-sm font-normal">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" style="width: 108px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" :rounded="false" class="text-[12.25px] font-bold" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" style="width: 256px">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-[240px]">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-normal">{{ data.type }}</span>
              <span class="text-xs font-normal">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktionen" style="width: 108px">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text plain @click="togglePopover" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px] p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start text-sm font-medium" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="w-full justify-start text-sm font-medium" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="w-full justify-start text-sm font-medium" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start text-sm font-medium" />
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
  { name: 'Max Mustermann', avatar: 'M', status: 'In Prüfung', severity: 'danger', type: 'Zertifizierung', progress: 45 },
  { name: 'Anna Schmidt', avatar: 'A', status: 'Aktiv', severity: 'success', type: 'Onboarding', progress: 87 },
  { name: 'Lisa Weber', avatar: 'L', status: 'Inaktiv', severity: 'warn', type: 'Onboarding', progress: 4 },
  { name: 'Paul Müller', avatar: 'P', status: 'Inaktiv', severity: 'warn', type: 'Onboarding', progress: 11 }
]);

const op = ref();

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>