<template>
  <div class="p-6 bg-white rounded-lg">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer" headerStyle="min-width: 16rem">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="data.initials" 
              shape="circle" 
              class="w-7 h-7 !bg-surface-100 !text-surface-600 !text-sm" 
            />
            <span class="text-sm text-surface-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status">
        <template #body="{ data }">
          <Tag 
            :value="data.status" 
            :severity="data.statusSeverity" 
            :rounded="false" 
            class="text-xs px-2 py-1 font-bold" 
          />
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between items-center w-full">
              <span class="text-[10px] text-surface-500 whitespace-nowrap">{{ data.task }}</span>
              <span class="text-xs text-surface-900">{{ data.progress }} %</span>
            </div>
            <div class="h-1.5 w-full bg-surface-200 rounded-full overflow-hidden flex">
              <div 
                class="bg-emerald-500 h-full rounded-full" 
                :style="{ width: data.progress + '%' }"
              ></div>
            </div>
          </div>
        </template>
      </Column>

      <Column header="Aktion" headerStyle="width: 6rem" bodyStyle="text-align: center">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            class="!text-surface-500" 
            @click="toggleOptions($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-48">
        <Button 
          label="Profil bearbeiten" 
          icon="pi pi-file-edit" 
          variant="outlined" 
          severity="secondary" 
          size="small" 
          class="w-full justify-start !text-surface-700 bg-white" 
        />
        <Button 
          label="Status ändern" 
          icon="pi pi-flag" 
          variant="outlined" 
          severity="secondary" 
          size="small" 
          class="w-full justify-start !text-surface-700 bg-white" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-copy" 
          variant="outlined" 
          severity="secondary" 
          size="small" 
          class="w-full justify-start !text-surface-700 bg-white" 
        />
        <Button 
          label="Deaktiveren" 
          icon="pi pi-trash" 
          variant="outlined" 
          severity="secondary" 
          size="small" 
          class="w-full justify-start !text-surface-700 bg-white" 
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
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const op = ref();
const selectedUser = ref(null);

const users = ref([
  { 
    name: 'Max Mustermann', 
    initials: 'M', 
    status: 'In Prüfung', 
    statusSeverity: 'danger', 
    task: 'Zertifizierung', 
    progress: 45 
  },
  { 
    name: 'Anna Schmidt', 
    initials: 'A', 
    status: 'Aktiv', 
    statusSeverity: 'success', 
    task: 'Onboarding', 
    progress: 87 
  },
  { 
    name: 'Lisa Weber', 
    initials: 'L', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    task: 'Onboarding', 
    progress: 4 
  },
  { 
    name: 'Paul Müller', 
    initials: 'P', 
    status: 'Inaktiv', 
    statusSeverity: 'warn', 
    task: 'Onboarding', 
    progress: 11 
  }
]);

const toggleOptions = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>