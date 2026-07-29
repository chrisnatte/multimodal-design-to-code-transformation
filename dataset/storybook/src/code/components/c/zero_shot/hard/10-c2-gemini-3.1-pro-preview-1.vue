<template>
  <div class="p-8 bg-white rounded-xl max-w-4xl mx-auto font-sans">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-xs">
              {{ data.initials }}
            </div>
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <span :class="['px-2.5 py-1 rounded-md text-xs font-semibold', data.statusColor]">
            {{ data.status }}
          </span>
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" class="py-4 border-b border-slate-100">
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
      
      <Column header="Aktion" class="py-4 border-b border-slate-100 w-24">
        <template #body="{ data, event }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary"
            :class="['w-8 h-8 p-0 !text-slate-500', selectedUser?.id === data.id ? '!bg-slate-100' : '']"
            @click="toggleMenu($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-56 rounded-lg shadow-lg border border-slate-200 bg-white">
      <div class="flex flex-col gap-1.5 p-2">
        <Button label="Profil bearbeiten" icon="pi pi-file-edit" variant="outlined" severity="secondary" class="w-full justify-start !border-slate-200 !text-slate-600 hover:!bg-slate-50 text-sm py-2 px-3 font-normal" />
        <Button label="Status ändern" icon="pi pi-flag" variant="outlined" severity="secondary" class="w-full justify-start !border-slate-200 !text-slate-600 hover:!bg-slate-50 text-sm py-2 px-3 font-normal" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="w-full justify-start !border-slate-200 !text-slate-600 hover:!bg-slate-50 text-sm py-2 px-3 font-normal" />
        <Button label="Deaktiveren" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start !border-slate-200 !text-slate-600 hover:!bg-slate-50 text-sm py-2 px-3 font-normal" />
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
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusColor: 'bg-red-100 text-red-700', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusColor: 'bg-green-100 text-green-700', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusColor: 'bg-orange-100 text-orange-700', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusColor: 'bg-orange-100 text-orange-700', progressLabel: 'Onboarding', progressValue: 11 },
]);

const op = ref();
const selectedUser = ref(null);

const toggleMenu = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>