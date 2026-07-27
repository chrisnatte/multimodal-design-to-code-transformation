<template>
  <div class="bg-white w-[897px] h-[410px] p-6 relative">
    <DataTable :value="users" class="w-[728px]">
      <Column field="name" header="Nutzer" style="width: 256px">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar
              :label="slotProps.data.initials"
              shape="circle"
              class="bg-surface-200 text-surface-700"
            />
            <span class="text-sm font-normal font-sans">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" style="width: 108px">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :severity="slotProps.data.statusSeverity"
            :rounded="false"
            class="text-[12.25px] font-bold"
          />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" style="width: 256px">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-[240px]">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-normal font-sans">{{ slotProps.data.progressType }}</span>
              <span class="text-xs font-normal font-sans">{{ slotProps.data.progressValue }} %</span>
            </div>
            <ProgressBar
              :value="slotProps.data.progressValue"
              :showValue="false"
              style="height: 6px"
            />
          </div>
        </template>
      </Column>
      
      <Column header="Aktionen" style="width: 108px">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            severity="secondary"
            rounded
            @click="togglePopover($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[190px] p-2.5 bg-white rounded-md border border-surface-200">
        <Button
          variant="outlined"
          severity="secondary"
          class="w-full justify-start text-sm font-medium"
          icon="pi pi-pen-to-square"
          label="Profil bearbeiten"
        />
        <Button
          variant="outlined"
          severity="secondary"
          class="w-full justify-start text-sm font-medium"
          icon="pi pi-flag"
          label="Status ändern"
        />
        <Button
          variant="outlined"
          severity="secondary"
          class="w-full justify-start text-sm font-medium"
          icon="pi pi-clone"
          label="Duplizieren"
        />
        <Button
          variant="outlined"
          severity="secondary"
          class="w-full justify-start text-sm font-medium"
          icon="pi pi-trash"
          label="Deaktiveren"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';

const users = ref([
  {
    name: 'Max Mustermann',
    initials: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressType: 'Zertifizierung',
    progressValue: 45,
  },
  {
    name: 'Anna Schmidt',
    initials: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressType: 'Onboarding',
    progressValue: 87,
  },
  {
    name: 'Lisa Weber',
    initials: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressType: 'Onboarding',
    progressValue: 4,
  },
  {
    name: 'Paul Müller',
    initials: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressType: 'Onboarding',
    progressValue: 11,
  }
]);

const op = ref();
const selectedUser = ref();

const togglePopover = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>