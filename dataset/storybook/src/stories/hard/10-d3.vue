<template>
  <div class="p-6 bg-white min-h-screen">
    <DataTable :value="state.users" tableClass="min-w-[720px]" class="text-sm">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-1">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-700" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-[240px]">
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-slate-600">{{ data.step }}</span>
              <span class="text-xs text-slate-700">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5" />
          </div>
        </template>
      </Column>

      <Column header="Aktion">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, data.id)"
            :class="state.activeRowId === data.id ? 'bg-slate-100' : ''"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menuRef">
      <div class="flex flex-col gap-2 w-[170px] p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Deaktivieren" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';

const menuRef = ref();

const state = reactive({
  activeRowId: 3,
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', severity: 'danger', step: 'Zertifizierung', progress: 45 },
    { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', severity: 'success', step: 'Onboarding', progress: 87 },
    { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', severity: 'warn', step: 'Onboarding', progress: 4 },
    { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', severity: 'warn', step: 'Onboarding', progress: 11 }
  ]
});

const toggleMenu = (event, rowId) => {
  state.activeRowId = rowId;
  menuRef.value.toggle(event);
};
</script>