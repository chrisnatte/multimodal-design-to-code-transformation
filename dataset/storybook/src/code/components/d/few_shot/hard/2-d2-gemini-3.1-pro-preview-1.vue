<template>
  <div class="p-6 bg-white">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-1/2">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="data.name.charAt(0)" 
              shape="circle" 
              class="bg-slate-100 text-slate-600 font-normal" 
            />
            <span class="text-sm text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" class="w-1/4">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="getRoleSeverity(data.role)" 
            :pt="{ root: 'font-bold text-xs' }"
          />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" class="w-1/4">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary readonly />
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
  { name: 'Max Mustermann', role: 'Administrator', active: true },
  { name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { name: 'Lisa Weber', role: 'Gast', active: false },
  { name: 'Paul Müller', role: 'Gast', active: true }
]);

const getRoleSeverity = (role) => {
  switch (role) {
    case 'Administrator':
      return 'danger';
    case 'Projektleiter':
      return 'info';
    case 'Gast':
      return 'warn';
    default:
      return 'secondary';
  }
};
</script>