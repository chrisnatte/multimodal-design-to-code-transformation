<template>
  <div class="flex flex-col p-6 bg-white">
    <DataTable :value="users" class="w-full" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-slate-200 text-slate-700 w-7 h-7 text-sm" />
            <span class="text-sm">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between items-center">
              <span class="text-xs text-slate-600">{{ slotProps.data.progressLabel }}</span>
              <span class="text-xs text-slate-600">{{ slotProps.data.progressValue }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progressValue" :showValue="false" class="h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body>
          <div class="flex justify-center">
            <Button icon="pi pi-ellipsis-h" text @click="togglePopover" />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="popoverRef" class="w-48">
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col gap-2 p-2.5">
          <Button variant="outlined" severity="secondary" icon="pi pi-pencil" label="Profil bearbeiten" class="w-full" />
          <Button variant="outlined" severity="secondary" icon="pi pi-flag" label="Status ändern" class="w-full" />
          <Button variant="outlined" severity="secondary" icon="pi pi-copy" label="Duplizieren" class="w-full" />
          <Button variant="outlined" severity="secondary" icon="pi pi-trash" label="Deaktiveren" class="w-full" />
        </div>
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
import ProgressBar from 'primevue/progressbar';
import Avatar from 'primevue/avatar';

const popoverRef = ref();

const users = ref([
  { name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progressValue: 45 },
  { name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progressValue: 87 },
  { name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 4 },
  { name: 'Paul Müller', initial: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 11 }
]);

const togglePopover = (event) => {
  popoverRef.value.toggle(event);
};
</script>