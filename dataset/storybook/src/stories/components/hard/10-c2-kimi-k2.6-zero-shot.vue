<template>
  <div class="p-8 max-w-5xl mx-auto">
    <DataTable :value="users" class="w-full" tableStyle="min-width: 40rem">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full max-w-xs">
            <div class="flex justify-between text-xs text-slate-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" class="h-2" :pt="{ value: { class: 'bg-emerald-500' } }" />
          </div>
        </template>
      </Column>
      <Column field="action" header="Aktion">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" variant="text" rounded @click="(e) => togglePopover(e, data)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 w-48">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" variant="text" class="w-full justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" variant="text" class="w-full justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="text" class="w-full justify-start" />
        <Button label="Deaktivieren" icon="pi pi-trash" variant="text" class="w-full justify-start" />
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

const op = ref();
const selectedUser = ref(null);

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
]);

const togglePopover = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>