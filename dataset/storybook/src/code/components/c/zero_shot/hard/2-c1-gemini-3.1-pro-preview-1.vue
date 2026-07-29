<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" headerClass="text-slate-600 font-semibold pb-3 border-b border-slate-100" bodyClass="py-3 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 text-xs font-medium w-8 h-8" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" headerClass="text-slate-600 font-semibold pb-3 border-b border-slate-100" bodyClass="py-3 border-b border-slate-100">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getSeverity(data.role)" class="px-2 py-1 text-xs font-semibold rounded-md" />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" headerClass="text-slate-600 font-semibold pb-3 border-b border-slate-100" bodyClass="py-3 border-b border-slate-100">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" readonly />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const users = ref([
  { id: 1, name: 'Max Mustermann', initials: 'M', role: 'Administrator', active: true },
  { id: 2, name: 'Anna Schmidt', initials: 'A', role: 'Projektleiter', active: true },
  { id: 3, name: 'Lisa Weber', initials: 'L', role: 'Gast', active: false },
  { id: 4, name: 'Paul Müller', initials: 'P', role: 'Gast', active: true }
]);

const getSeverity = (role) => {
  switch (role) {
    case 'Administrator':
      return 'danger';
    case 'Projektleiter':
      return 'info';
    case 'Gast':
      return 'warning';
    default:
      return 'secondary';
  }
};
</script>