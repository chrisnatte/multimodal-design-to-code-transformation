<template>
  <div class="p-4 bg-white">
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
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>

      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between text-xs">
              <span class="text-surface-500">{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" style="width: 5rem">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            rounded
            @click="togglePopover($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="popover">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          variant="outlined"
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          variant="outlined"
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          variant="outlined"
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          variant="outlined"
          severity="secondary"
          class="justify-start"
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

const popover = ref();

const users = ref([
  {
    name: 'Max Mustermann',
    initial: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    name: 'Anna Schmidt',
    initial: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    name: 'Lisa Weber',
    initial: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    name: 'Paul Müller',
    initial: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const togglePopover = (event) => {
  popover.value.toggle(event);
};
</script>