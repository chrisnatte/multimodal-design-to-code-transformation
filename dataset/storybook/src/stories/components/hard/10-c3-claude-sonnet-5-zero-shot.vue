<template>
  <div class="p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-600" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" rounded />
        </template>
      </Column>

      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-56">
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column field="action" header="Aktion">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 w-56">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" text class="justify-start w-full" />
        <Button label="Status ändern" icon="pi pi-flag" text class="justify-start w-full" />
        <Button label="Duplizieren" icon="pi pi-copy" text class="justify-start w-full" />
        <Button label="Deaktiveren" icon="pi pi-trash" text severity="danger" class="justify-start w-full" />
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
import Avatar from 'primevue/avatar';
import Popover from 'primevue/popover';

const users = ref([
  { name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', progressLabel: 'Zertifizierung', progress: 45 },
  { name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', progressLabel: 'Onboarding', progress: 87 },
  { name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 4 },
  { name: 'Paul Müller', initial: 'P', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 11 }
]);

const op = ref();

const toggleMenu = (event, data) => {
  op.value.toggle(event);
};

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Aktiv':
      return 'success';
    case 'Inaktiv':
      return 'warn';
    case 'In Prüfung':
      return 'danger';
    default:
      return 'secondary';
  }
};
</script>