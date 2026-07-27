<template>
  <div class="flex flex-col w-[716px]">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-96">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatarLabel" shape="circle" />
            <span class="text-sm font-normal">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" class="w-56">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" class="w-[108px]">
        <template #body="{ data }">
          <div class="flex justify-center items-center">
            <Checkbox v-model="data.active" :binary="true" />
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
  { name: 'Max Mustermann', avatarLabel: 'M', role: 'Administrator', roleSeverity: 'danger', active: true },
  { name: 'Anna Schmidt', avatarLabel: 'A', role: 'Projektleiter', roleSeverity: 'info', active: true },
  { name: 'Lisa Weber', avatarLabel: 'L', role: 'Gast', roleSeverity: 'warn', active: false },
  { name: 'Paul Müller', avatarLabel: 'P', role: 'Gast', roleSeverity: 'warn', active: true }
]);
</script>