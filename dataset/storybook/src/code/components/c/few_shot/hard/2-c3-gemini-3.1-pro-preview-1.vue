<template>
  <div class="p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <Avatar :label="data.initial" shape="circle" class="!bg-slate-100 !text-slate-600" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const users = ref([
  { id: 1, initial: 'M', name: 'Max Mustermann', role: 'Administrator', active: true },
  { id: 2, initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { id: 3, initial: 'L', name: 'Lisa Weber', role: 'Gast', active: false },
  { id: 4, initial: 'P', name: 'Paul Müller', role: 'Gast', active: true },
]);

const getRoleSeverity = (role: string) => {
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