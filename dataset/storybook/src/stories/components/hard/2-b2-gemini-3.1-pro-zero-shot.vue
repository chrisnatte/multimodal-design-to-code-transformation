<template>
  <div class="flex flex-col w-full max-w-[716px]">
    <DataTable :value="users" dataKey="id" class="w-full">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-slate-200 text-slate-700" />
            <span class="text-sm font-normal font-sans text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 224px">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" :rounded="false" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 108px">
        <template #body="{ data }">
          <div class="flex items-center">
            <Checkbox v-model="data.active" :binary="true" readonly />
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
    initial: 'M',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initial: 'A',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true
  },
  {
    id: 3,
    name: 'Lisa Weber',
    initial: 'L',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false
  },
  {
    id: 4,
    name: 'Paul Müller',
    initial: 'P',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true
  }
]);
</script>