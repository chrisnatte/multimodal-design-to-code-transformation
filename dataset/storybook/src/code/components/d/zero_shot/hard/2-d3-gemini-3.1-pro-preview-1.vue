<template>
  <div class="bg-white p-6 flex flex-col gap-2.5 w-full max-w-4xl">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" style="width: 50%">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="getInitials(slotProps.data.name)" 
              shape="circle" 
              class="bg-slate-100 text-slate-700 font-normal" 
            />
            <span class="text-sm text-slate-800">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 30%">
        <template #body="slotProps">
          <Tag 
            :value="slotProps.data.role" 
            :severity="getRoleSeverity(slotProps.data.role)" 
            :rounded="false"
          />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 20%">
        <template #body="slotProps">
          <Checkbox 
            v-model="slotProps.data.active" 
            :binary="true" 
            readonly 
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

const getInitials = (name) => {
  return name ? name.charAt(0) : '';
};

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