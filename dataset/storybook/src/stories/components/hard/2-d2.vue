<template>
  <div class="w-full max-w-[760px] p-6">
    <DataTable :value="state.users" tableStyle="min-width: 100%" class="text-sm" :pt="{ headerCell: { class: '!font-semibold' } }">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-1">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-600" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" class="!rounded-md !font-bold" />
        </template>
      </Column>

      <Column field="active" header="Aktiv" headerClass="text-center" bodyClass="text-center">
        <template #body="{ data, index }">
          <Checkbox v-model="state.users[index].active" binary />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const state = reactive({
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
    { id: 2, initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { id: 3, initials: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
    { id: 4, initials: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
});
</script>