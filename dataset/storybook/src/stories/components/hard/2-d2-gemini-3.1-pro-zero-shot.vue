<template>
  <div class="w-full max-w-[716px] font-sans">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer" style="width: 53.6%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-600" />
            <span class="text-sm text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Rolle" style="width: 31.3%">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" :rounded="false" class="!font-bold !text-[12.25px]" />
        </template>
      </Column>
      
      <Column header="Aktiv" style="width: 15.1%">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" :readonly="true" />
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