<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" tableStyle="min-width: 60rem">
        <Column field="name" header="Nutzer">
          <template #body="slotProps">
            <div class="flex items-center gap-3 px-3.5 py-2.5">
              <Avatar :label="slotProps.data.initials" shape="circle" />
              <span>{{ slotProps.data.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="slotProps">
            <div class="px-3.5 py-2.5">
              <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column field="progress" header="Fortschritt">
          <template #body="slotProps">
            <div class="flex flex-col gap-1 px-3.5 py-2.5 w-56">
              <div class="flex justify-between items-start">
                <span class="text-xs">{{ slotProps.data.progressLabel }}</span>
                <span class="text-sm">{{ slotProps.data.progress }} %</span>
              </div>
              <ProgressBar :value="slotProps.data.progress" :showValue="false" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body="slotProps">
            <div class="flex justify-center px-3.5 py-2.5">
              <Button
                icon="pi pi-ellipsis-h"
                variant="text"
                severity="secondary"
                aria-label="Aktionen"
                @click="toggleMenu($event, slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col mt-4">
      <div class="flex flex-col gap-3.5">
        <Popover ref="op">
          <div class="flex flex-col gap-2 p-2.5">
            <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" />
            <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" />
            <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" />
            <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" />
          </div>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const op = ref();

const state = reactive({
  selectedUser: null,
  users: [
    { name: 'Max Mustermann', initials: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { name: 'Anna Schmidt', initials: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { name: 'Lisa Weber', initials: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { name: 'Paul Müller', initials: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
});

const toggleMenu = (event, user) => {
  state.selectedUser = user;
  op.value.toggle(event);
};
</script>