<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" tableStyle="min-width: 60rem">
        <Column field="name" header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3 py-2.5 px-3.5">
              <Avatar :label="data.avatar" shape="circle" />
              <span>{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="{ data }">
            <div class="py-2.5 px-3.5">
              <Tag :value="data.status" :severity="data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column header="Fortschritt">
          <template #body="{ data }">
            <div class="flex flex-col gap-1 py-2.5 px-3.5 w-56">
              <div class="flex justify-between items-start">
                <span class="text-xs">{{ data.progressLabel }}</span>
                <span class="text-sm">{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="flex justify-center py-2.5 px-3.5">
              <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" aria-label="Aktionen" @click="togglePopover($event, data)" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col mt-4">
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

const op = ref();

const state = reactive({
  selectedUser: null,
  users: [
    { name: 'Max Mustermann', avatar: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { name: 'Anna Schmidt', avatar: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { name: 'Lisa Weber', avatar: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { name: 'Paul Müller', avatar: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
});

const togglePopover = (event, user) => {
  state.selectedUser = user;
  op.value.toggle(event);
};
</script>