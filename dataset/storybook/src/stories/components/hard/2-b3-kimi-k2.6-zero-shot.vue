<template>
  <div class="flex flex-col w-[716px]">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.avatar" shape="circle" class="bg-gray-200 text-gray-700" />
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

const products = ref([
  {
    name: 'Max Mustermann',
    avatar: 'M',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    name: 'Anna Schmidt',
    avatar: 'A',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    name: 'Lisa Weber',
    avatar: 'L',
    role: 'Gast',
    severity: 'warning',
    active: false
  },
  {
    name: 'Paul Müller',
    avatar: 'P',
    role: 'Gast',
    severity: 'warning',
    active: true
  }
]);
</script>