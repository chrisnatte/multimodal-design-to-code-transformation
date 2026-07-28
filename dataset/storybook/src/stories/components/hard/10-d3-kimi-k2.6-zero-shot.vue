<template>
  <div class="bg-white p-6 min-h-screen">
    <DataTable :value="users" class="w-full max-w-[728px]" tableStyle="min-width: auto">
      <Column field="name" header="Nutzer" class="!w-64">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initials" shape="circle" class="!bg-slate-200 !text-slate-600 w-7 h-7 text-sm" />
            <span class="text-sm text-slate-800">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status" class="!w-28">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" class="text-xs font-bold" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt" class="!w-64">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full pr-4">
            <div class="flex justify-between items-end text-xs text-slate-600">
              <span>{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="!h-1.5 [&>*]:!bg-emerald-500" />
          </div>
        </template>
      </Column>
      <Column header="Aktion" class="!w-28">
        <template #body="slotProps">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              text
              plain
              :class="['!px-2 !py-1', { '!bg-slate-100': activeRow === slotProps.data.id }]"
              @click="togglePopover($event, slotProps.data.id)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-44">
        <Button variant="outlined" severity="secondary" icon="pi pi-pencil" label="Profil bearbeiten" class="w-full !justify-start text-sm" />
        <Button variant="outlined" severity="secondary" icon="pi pi-flag" label="Status ändern" class="w-full !justify-start text-sm" />
        <Button variant="outlined" severity="secondary" icon="pi pi-copy" label="Duplizieren" class="w-full !justify-start text-sm" />
        <Button variant="outlined" severity="secondary" icon="pi pi-trash" label="Deaktiveren" class="w-full !justify-start text-sm" />
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
const activeRow = ref(3);

const users = ref([
  {
    id: 1,
    name: 'Max Mustermann',
    initials: 'M',
    status: 'In Prüfung',
    severity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initials: 'A',
    status: 'Aktiv',
    severity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    id: 3,
    name: 'Lisa Weber',
    initials: 'L',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    id: 4,
    name: 'Paul Müller',
    initials: 'P',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const togglePopover = (event, id) => {
  activeRow.value = id;
  op.value.toggle(event);
};
</script>