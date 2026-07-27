<template>
  <div class="p-6 bg-white">
    <DataTable :value="users" tableStyle="min-width: 45rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>

      <Column field="progressLabel" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between">
              <span class="text-xs text-gray-500">{{ slotProps.data.progressLabel }}</span>
              <span class="text-xs">{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
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
  {
    name: 'Max Mustermann',
    initial: 'M',
    status: 'In Prüfung',
    severity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    name: 'Anna Schmidt',
    initial: 'A',
    status: 'Aktiv',
    severity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    name: 'Lisa Weber',
    initial: 'L',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    name: 'Paul Müller',
    initial: 'P',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const op = ref();
const selectedUser = ref(null);

const toggleMenu = (event, data) => {
  selectedUser.value = data;
  op.value.toggle(event);
};
</script>