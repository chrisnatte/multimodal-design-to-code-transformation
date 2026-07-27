<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.avatarLabel" shape="circle" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>

      <Column field="progressLabel" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between text-sm">
              <span>{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progressValue }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progressValue" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen" style="width: 108px">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            @click="toggleActions($event, slotProps.data)"
            aria-label="Aktionen"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-44">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="w-full justify-start" @click="hidePopover" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" class="w-full justify-start" @click="hidePopover" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" variant="outlined" class="w-full justify-start" @click="hidePopover" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full justify-start" @click="hidePopover" />
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
  {
    name: 'Max Mustermann',
    avatarLabel: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progressValue: 45
  },
  {
    name: 'Anna Schmidt',
    avatarLabel: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progressValue: 87
  },
  {
    name: 'Lisa Weber',
    avatarLabel: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 4
  },
  {
    name: 'Paul Müller',
    avatarLabel: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 11
  }
]);

const toggleActions = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};

const hidePopover = () => {
  op.value.hide();
};
</script>