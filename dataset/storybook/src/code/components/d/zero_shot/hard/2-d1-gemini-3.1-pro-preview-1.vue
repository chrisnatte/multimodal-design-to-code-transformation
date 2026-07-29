<template>
  <div class="p-6 bg-white">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" style="width: 55%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.name.charAt(0)" shape="circle" class="bg-slate-200 text-slate-700" />
            <span class="text-sm text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 30%">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 15%">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" readonly />
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
  { name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
  { name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
  { name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
  { name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
]);
</script>