<template>
  <div class="p-8">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-600" style="width: 2rem; height: 2rem" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="getRoleSeverity(slotProps.data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <Checkbox v-model="slotProps.data.active" :binary="true" />
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
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', active: true },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', active: false },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', active: true },
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
      return null;
  }
};
</script>