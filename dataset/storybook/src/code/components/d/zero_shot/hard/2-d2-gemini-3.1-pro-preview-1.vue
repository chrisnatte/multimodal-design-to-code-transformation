<template>
  <div class="p-6 bg-white w-full max-w-4xl">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-1/2">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="data.initials" 
              shape="circle" 
              class="bg-slate-200 text-slate-700 font-normal" 
            />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" class="w-1/4">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="data.roleSeverity" 
            class="font-bold text-xs"
          />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" class="w-1/4">
        <template #body="{ data }">
          <div class="flex items-center">
            <Checkbox 
              v-model="data.active" 
              :binary="true" 
              readonly 
            />
          </div>
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
  {
    id: 1,
    name: 'Max Mustermann',
    initials: 'M',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initials: 'A',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true
  },
  {
    id: 3,
    name: 'Lisa Weber',
    initials: 'L',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false
  },
  {
    id: 4,
    name: 'Paul Müller',
    initials: 'P',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true
  }
]);
</script>