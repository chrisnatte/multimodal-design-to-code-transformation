<template>
  <div class="w-full min-h-screen bg-surface-100 p-6">
    <div class="max-w-4xl">
      <DataTable :value="state.users" tableStyle="min-width: 100%" class="rounded-xl overflow-hidden">
        <Column header="Nutzer" style="width: 36%">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="bg-surface-300 text-surface-700" />
              <span class="text-surface-700 text-xl">{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" style="width: 15%">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!rounded-md !font-semibold" />
          </template>
        </Column>

        <Column header="Fortschritt" style="width: 37%">
          <template #body="{ data }">
            <div class="flex flex-col gap-1 w-full">
              <div class="flex items-center justify-between text-sm text-surface-600">
                <span>{{ data.stage }}</span>
                <span>{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" class="h-2" />
            </div>
          </template>
        </Column>

        <Column header="Aktion" style="width: 12%">
          <template #body="{ data, index }">
            <div class="flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                rounded
                text
                severity="secondary"
                aria-label="Aktionen"
                @click="toggleMenu($event, data, index)"
              />
            </div>
          </template>
        </Column>
      </DataTable>

      <Popover ref="menuRef">
        <div class="flex flex-col gap-2 w-64">
          <Button label="Profil bearbeiten" icon="pi pi-pencil" variant="outlined" severity="secondary" class="justify-start" />
          <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="justify-start" />
          <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="justify-start" />
          <Button label="Deaktivieren" icon="pi pi-trash" variant="outlined" severity="secondary" class="justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const menuRef = ref();

const state = reactive({
  selectedUser: null,
  selectedIndex: null,
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', stage: 'Zertifizierung', progress: 45 },
    { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', stage: 'Onboarding', progress: 87 },
    { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', stage: 'Onboarding', progress: 4 },
    { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', stage: 'Onboarding', progress: 11 }
  ]
});

const toggleMenu = (event, user, index) => {
  state.selectedUser = user;
  state.selectedIndex = index;
  menuRef.value.toggle(event);
};

const statusSeverity = (status) => {
  if (status === 'Aktiv') return 'success';
  if (status === 'In Prüfung') return 'danger';
  if (status === 'Inaktiv') return 'warn';
  return 'secondary';
};
</script>