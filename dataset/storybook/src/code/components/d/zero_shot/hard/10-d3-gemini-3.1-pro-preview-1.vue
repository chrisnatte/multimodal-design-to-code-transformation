<template>
  <div class="bg-white p-6 rounded-lg w-full max-w-4xl">
    <DataTable :value="users" class="w-full text-sm">
      <Column header="Nutzer" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-surface-100 text-surface-700 font-normal" />
            <span class="text-surface-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" :rounded="false" class="text-xs font-bold px-2 py-1" />
        </template>
      </Column>
      
      <Column header="Fortschritt" class="py-3 border-b border-surface-200">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between items-center text-xs text-surface-700">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" :pt="{ value: { class: 'bg-emerald-500' }, root: { class: 'bg-surface-100' } }" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="py-3 border-b border-surface-200">
        <template #body>
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" @click="togglePopover" class="w-8 h-8 p-0 text-surface-500 hover:bg-surface-100" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionPopover" class="w-48">
      <div class="flex flex-col gap-2 p-1">
        <Button variant="outlined" severity="secondary" icon="pi pi-pencil" label="Profil bearbeiten" class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50 text-sm font-medium" />
        <Button variant="outlined" severity="secondary" icon="pi pi-flag" label="Status ändern" class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50 text-sm font-medium" />
        <Button variant="outlined" severity="secondary" icon="pi pi-copy" label="Duplizieren" class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50 text-sm font-medium" />
        <Button variant="outlined" severity="secondary" icon="pi pi-trash" label="Deaktiveren" class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50 text-sm font-medium" />
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
  { id: 1, name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
  { id: 2, name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
  { id: 3, name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
  { id: 4, name: 'Paul Müller', initial: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 },
]);

const actionPopover = ref();

const togglePopover = (event) => {
  actionPopover.value.toggle(event);
};
</script>