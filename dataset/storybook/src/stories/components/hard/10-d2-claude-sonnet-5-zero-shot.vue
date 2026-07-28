<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" tableStyle="min-width: 50rem">
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
            rounded
            severity="secondary"
            aria-label="Aktionen"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="popover">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="justify-start"
          @click="closePopover"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          class="justify-start"
          @click="closePopover"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="justify-start"
          @click="closePopover"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="justify-start"
          @click="closePopover"
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
const selectedUser = ref(null);

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const toggleMenu = (event, user) => {
  selectedUser.value = user;
  popover.value.toggle(event);
};

const closePopover = () => {
  popover.value.hide();
};
</script>