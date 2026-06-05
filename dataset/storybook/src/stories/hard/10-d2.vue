<template>
  <div class="p-6 bg-white min-h-screen">
    <DataTable :value="state.users" tableStyle="min-width: 720px" class="text-sm">
      <Column field="name" header="Nutzer" class="w-[36%]">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-1">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-600" size="normal" />
            <span class="text-slate-700 text-[26px] leading-none scale-[0.54] origin-left">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status" class="w-[15%]">
        <template #body="{ data }">
          <Tag :value="data.statusLabel" :severity="data.statusSeverity" class="!text-[12px] !font-semibold" />
        </template>
      </Column>

      <Column header="Fortschritt" class="w-[37%]">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-full pr-6">
            <div class="flex items-center justify-between text-slate-500">
              <span class="text-[10px]">{{ data.step }}</span>
              <span class="text-[12px] text-slate-600">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" class="w-[12%]">
        <template #body="{ data }">
          <div class="flex justify-start">
            <Button
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              rounded
              aria-label="Aktionen"
              :class="{ '!bg-slate-100': state.activeUserId === data.id }"
              @click="toggleMenu($event, data.id)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="menuRef">
      <div class="flex flex-col gap-2 w-44 p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="justify-start !text-slate-600" />
        <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="justify-start !text-slate-600" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="justify-start !text-slate-600" />
        <Button label="Deaktiveren" icon="pi pi-trash" variant="outlined" severity="secondary" class="justify-start !text-slate-600" />
      </div>
    </Popover>
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

const menuRef = ref();

const state = reactive({
  activeUserId: 3,
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', statusLabel: 'In Prüfung', statusSeverity: 'danger', step: 'Zertifizierung', progress: 45 },
    { id: 2, initials: 'A', name: 'Anna Schmidt', statusLabel: 'Aktiv', statusSeverity: 'success', step: 'Onboarding', progress: 87 },
    { id: 3, initials: 'L', name: 'Lisa Weber', statusLabel: 'Inaktiv', statusSeverity: 'warn', step: 'Onboarding', progress: 4 },
    { id: 4, initials: 'P', name: 'Paul Müller', statusLabel: 'Inaktiv', statusSeverity: 'warn', step: 'Onboarding', progress: 11 }
  ]
});

const toggleMenu = (event, userId) => {
  state.activeUserId = userId;
  menuRef.value.toggle(event);
};
</script>