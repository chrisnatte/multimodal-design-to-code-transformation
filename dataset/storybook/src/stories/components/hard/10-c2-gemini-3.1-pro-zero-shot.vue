<template>
  <div class="p-8 bg-white rounded-lg w-full max-w-4xl font-sans">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" headerClass="text-slate-500 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-xs">
              {{ data.initials }}
            </div>
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status" headerClass="text-slate-500 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <span :class="['px-2.5 py-1 rounded text-xs font-semibold', data.statusColor]">
            {{ data.status }}
          </span>
        </template>
      </Column>

      <Column field="progress" header="Fortschritt" headerClass="text-slate-500 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-48">
            <div class="flex justify-between text-xs text-slate-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 rounded-full" :style="{ width: data.progressValue + '%' }"></div>
            </div>
          </div>
        </template>
      </Column>

      <Column header="Aktion" headerClass="text-slate-500 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            rounded 
            :class="['w-8 h-8 p-0', { 'bg-slate-100': selectedUser?.id === data.id }]"
            @click="toggleMenu($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="!p-2 !rounded-lg !shadow-lg !border !border-slate-200">
      <div class="flex flex-col gap-1.5 w-48">
        <Button variant="outlined" severity="secondary" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 !py-2 !px-3 !text-sm" icon="pi pi-user-edit" label="Profil bearbeiten" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 !py-2 !px-3 !text-sm" icon="pi pi-flag" label="Status ändern" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 !py-2 !px-3 !text-sm" icon="pi pi-copy" label="Duplizieren" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 !py-2 !px-3 !text-sm" icon="pi pi-trash" label="Deaktiveren" />
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

const users = ref([
  { 
    id: 1, 
    initials: 'M', 
    name: 'Max Mustermann', 
    status: 'In Prüfung', 
    statusColor: 'bg-red-100 text-red-600', 
    progressLabel: 'Zertifizierung', 
    progressValue: 45 
  },
  { 
    id: 2, 
    initials: 'A', 
    name: 'Anna Schmidt', 
    status: 'Aktiv', 
    statusColor: 'bg-green-100 text-green-600', 
    progressLabel: 'Onboarding', 
    progressValue: 87 
  },
  { 
    id: 3, 
    initials: 'L', 
    name: 'Lisa Weber', 
    status: 'Inaktiv', 
    statusColor: 'bg-orange-100 text-orange-600', 
    progressLabel: 'Onboarding', 
    progressValue: 4 
  },
  { 
    id: 4, 
    initials: 'P', 
    name: 'Paul Müller', 
    status: 'Inaktiv', 
    statusColor: 'bg-orange-100 text-orange-600', 
    progressLabel: 'Onboarding', 
    progressValue: 11 
  },
]);

const op = ref();
const selectedUser = ref(null);

const toggleMenu = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>