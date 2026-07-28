<template>
  <div class="p-6 bg-white rounded-lg">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <Avatar 
              :label="data.name.charAt(0)" 
              shape="circle" 
              class="!bg-slate-100 !text-slate-600 font-medium"
            />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="getRoleSeverity(data.role)" 
            class="font-medium px-3 py-1"
          />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" class="py-4 border-b border-slate-100">
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