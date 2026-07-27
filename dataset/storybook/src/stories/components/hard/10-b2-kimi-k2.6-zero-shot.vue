<template>
  <div class="bg-white p-8 flex flex-col gap-4">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer" :style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-700" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" :style="{ width: '108px' }">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>
      <Column header="Fortschritt" :style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" class="h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen" :style="{ width: '108px' }">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" variant="text" @click="toggle($event)" aria-label="Aktionen" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-2.5 w-48">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
import Avatar from 'primevue/avatar';

const op = ref();
const users = ref([
  { id: 1, name: 'Max Mustermann', initials: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, name: 'Anna Schmidt', initials: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, name: 'Lisa Weber', initials: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, name: 'Paul Müller', initials: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 11 }
]);

const toggle = (event) => {
  op.value.toggle(event);
};
</script>