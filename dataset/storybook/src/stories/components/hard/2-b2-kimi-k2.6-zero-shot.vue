<template>
  <div class="flex flex-col">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 224px">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 108px">
        <template #body="slotProps">
          <div class="flex justify-center items-center">
            <Checkbox v-model="slotProps.data.active" :binary="true" />
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
  { name: 'Max Mustermann', initial: 'M', role: 'Administrator', severity: 'danger', active: true },
  { name: 'Anna Schmidt', initial: 'A', role: 'Projektleiter', severity: 'info', active: true },
  { name: 'Lisa Weber', initial: 'L', role: 'Gast', severity: 'warn', active: false },
  { name: 'Paul Müller', initial: 'P', role: 'Gast', severity: 'warn', active: true }
]);
</script>