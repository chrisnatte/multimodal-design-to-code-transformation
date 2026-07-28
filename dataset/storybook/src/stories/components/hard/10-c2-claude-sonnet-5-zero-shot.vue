<template>
  <div class="p-6 bg-white">
    <DataTable :value="users" tableClass="min-w-full">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-surface-200 text-surface-700" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" class="rounded-md" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-56">
            <div class="flex justify-between text-sm text-surface-500">
              <span>{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>
      <Column header="Aktion" style="width: 4rem">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col w-56">
        <button class="flex items-center gap-2 px-3 py-2 hover:bg-surface-100 rounded text-left">
          <i class="pi pi-pencil"></i>
          <span>Profil bearbeiten</span>
        </button>
        <button class="flex items-center gap-2 px-3 py-2 hover:bg-surface-100 rounded text-left">
          <i class="pi pi-flag"></i>
          <span>Status ändern</span>
        </button>
        <button class="flex items-center gap-2 px-3 py-2 hover:bg-surface-100 rounded text-left">
          <i class="pi pi-clone"></i>
          <span>Duplizieren</span>
        </button>
        <button class="flex items-center gap-2 px-3 py-2 hover:bg-surface-100 rounded text-left">
          <i class="pi pi-trash"></i>
          <span>Deaktiveren</span>
        </button>
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
  { name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', progressLabel: 'Zertifizierung', progress: 45 },
  { name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', progressLabel: 'Onboarding', progress: 87 },
  { name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 4 },
  { name: 'Paul Müller', initial: 'P', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 11 }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'Aktiv':
      return 'success';
    case 'In Prüfung':
      return 'danger';
    case 'Inaktiv':
      return 'warn';
    default:
      return 'secondary';
  }
};

const toggleMenu = (event, data) => {
  selectedUser.value = data;
  op.value.toggle(event);
};
</script>