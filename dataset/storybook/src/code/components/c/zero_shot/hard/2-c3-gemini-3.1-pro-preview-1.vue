<template>
  <div class="p-6 bg-white rounded-lg">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-1/2">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <Avatar 
              :label="data.initials" 
              shape="circle" 
              class="bg-slate-100 text-slate-600 font-medium" 
            />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" class="w-1/4">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="getRoleSeverity(data.role)" 
            class="font-medium px-3 py-1"
          />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" class="w-1/4">
        <template #body="{ data }">
          <Checkbox 
            v-model="data.active" 
            :binary="true" 
            readonly 
            class="pointer-events-none"
          />
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
  { id: 1, initials: 'M', name: 'Max Mustermann', role: 'Administrator', active: true },
  { id: 2, initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { id: 3, initials: 'L', name: 'Lisa Weber', role: 'Gast', active: false },
  { id: 4, initials: 'P', name: 'Paul Müller', role: 'Gast', active: true }
]);

const getRoleSeverity = (role) => {
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