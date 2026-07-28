<template>
  <div class="p-8 bg-white min-h-screen">
    <DataTable :value="users" class="w-full max-w-4xl">
      <Column field="user" header="Nutzer" class="w-1/3">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="w-7 h-7 text-sm bg-slate-200 text-slate-700" />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status" class="w-32">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="text-xs font-semibold" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt" class="w-1/3">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between text-xs text-slate-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 !bg-slate-200 [&_.p-progressbar-value]:!bg-emerald-500 rounded-full overflow-hidden" />
          </div>
        </template>
      </Column>
      <Column field="action" header="Aktion" class="w-24">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" class="w-8 h-8" @click="togglePopover($event)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-48">
      <div class="flex flex-col gap-2 p-1">
        <Button icon="pi pi-pencil" label="Profil bearbeiten" variant="outlined" severity="secondary" class="w-full justify-start text-sm" @click="op.hide()" />
        <Button icon="pi pi-flag" label="Status ändern" variant="outlined" severity="secondary" class="w-full justify-start text-sm" @click="op.hide()" />
        <Button icon="pi pi-copy" label="Duplizieren" variant="outlined" severity="secondary" class="w-full justify-start text-sm" @click="op.hide()" />
        <Button icon="pi pi-trash" label="Deaktivieren" variant="outlined" severity="secondary" class="w-full justify-start text-sm" @click="op.hide()" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Popover from 'primevue/popover';

const op = ref();

const users = ref([
  {
    name: 'Max Mustermann',
    initials: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    name: 'Anna Schmidt',
    initials: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    name: 'Lisa Weber',
    initials: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    name: 'Paul Müller',
    initials: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>