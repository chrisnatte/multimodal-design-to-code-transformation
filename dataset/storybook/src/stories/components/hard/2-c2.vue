<template>
  <div class="w-full bg-gray-100 p-6">
    <Card class="shadow-none border border-gray-200 rounded-xl">
      <template #content>
        <DataTable :value="state.users" tableStyle="min-width: 44rem" class="w-full">
          <Column field="name" header="Nutzer">
            <template #body="{ data }">
              <div class="flex items-center gap-3 py-1">
                <Avatar :label="data.initial" shape="circle" class="bg-slate-200 text-slate-600" />
                <span class="text-slate-700">{{ data.name }}</span>
              </div>
            </template>
          </Column>

          <Column field="role" header="Rolle">
            <template #body="{ data }">
              <Tag :value="data.role" :severity="data.roleSeverity" />
            </template>
          </Column>

          <Column header="Aktiv" headerClass="text-center" bodyClass="text-center">
            <template #body="{ data }">
              <Checkbox v-model="data.active" binary />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const state = reactive({
  users: [
    { id: 1, initial: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
    { id: 2, initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { id: 3, initial: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
    { id: 4, initial: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
});
</script>