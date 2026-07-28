<template>
  <div class="p-4">
    <DataTable :value="users" tableStyle="min-width: 40rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-blue-100 text-gray-700" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
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
  { name: 'Max Mustermann', initial: 'M', role: 'Administrator', severity: 'danger', active: true },
  { name: 'Anna Schmidt', initial: 'A', role: 'Projektleiter', severity: 'info', active: true },
  { name: 'Lisa Weber', initial: 'L', role: 'Gast', severity: 'warn', active: false },
  { name: 'Paul Müller', initial: 'P', role: 'Gast', severity: 'warn', active: true }
]);
</script>