<template>
  <div class="p-6 bg-white">
    <DataTable :value="users" dataKey="id">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-slate-200" />
            <span class="text-sm text-gray-800">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" class="text-center">
        <template #body="slotProps">
          <Checkbox v-model="slotProps.data.active" :binary="true" disabled />
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
  { id: 1, initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
  { id: 2, initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
  { id: 3, initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
  { id: 4, initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
]);
</script>