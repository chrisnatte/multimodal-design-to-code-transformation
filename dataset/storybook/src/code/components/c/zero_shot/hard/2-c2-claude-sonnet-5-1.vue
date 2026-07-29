<template>
  <div class="p-6">
    <DataTable :value="users" tableStyle="min-width: 40rem">
      <Column field="user" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-700" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="getSeverity(slotProps.data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <Checkbox v-model="slotProps.data.active" binary disabled />
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
  { name: 'Max Mustermann', initial: 'M', role: 'Administrator', active: true },
  { name: 'Anna Schmidt', initial: 'A', role: 'Projektleiter', active: true },
  { name: 'Lisa Weber', initial: 'L', role: 'Gast', active: false },
  { name: 'Paul Müller', initial: 'P', role: 'Gast', active: true }
]);

const getSeverity = (role) => {
  switch (role) {
    case 'Administrator':
      return 'danger';
    case 'Projektleiter':
      return 'info';
    case 'Gast':
      return 'warn';
    default:
      return null;
  }
};
</script>