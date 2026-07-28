<template>
  <DataTable :value="users" tableStyle="min-width: 50rem">
    <Column header="Nutzer">
      <template #body="slotProps">
        <div class="flex items-center gap-3">
          <Avatar :label="slotProps.data.initials" shape="circle" />
          <span>{{ slotProps.data.name }}</span>
        </div>
      </template>
    </Column>
    <Column header="Rolle">
      <template #body="slotProps">
        <Tag :value="slotProps.data.role" :severity="getSeverity(slotProps.data.role)" />
      </template>
    </Column>
    <Column header="Aktiv">
      <template #body="slotProps">
        <Checkbox v-model="slotProps.data.active" :binary="true" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const users = ref([
  { initials: 'M', name: 'Max Mustermann', role: 'Administrator', active: true },
  { initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { initials: 'L', name: 'Lisa Weber', role: 'Gast', active: false },
  { initials: 'P', name: 'Paul Müller', role: 'Gast', active: true }
]);

const getSeverity = (role) => {
  switch (role) {
    case 'Administrator':
      return 'danger';
    case 'Projektleiter':
      return 'info';
    case 'Gast':
      return 'warning';
    default:
      return null;
  }
};
</script>