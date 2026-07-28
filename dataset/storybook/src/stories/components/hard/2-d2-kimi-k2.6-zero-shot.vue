<template>
  <div class="p-8">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" bodyClass="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary />
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
  { name: 'Max Mustermann', initials: 'M', role: 'Administrator', active: true },
  { name: 'Anna Schmidt', initials: 'A', role: 'Projektleiter', active: true },
  { name: 'Lisa Weber', initials: 'L', role: 'Gast', active: false },
  { name: 'Paul Müller', initials: 'P', role: 'Gast', active: true }
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