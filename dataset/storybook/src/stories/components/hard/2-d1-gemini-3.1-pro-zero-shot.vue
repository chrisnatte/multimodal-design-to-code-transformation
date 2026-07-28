<template>
  <div class="w-full max-w-4xl mx-auto flex flex-col pt-4">
    <DataTable :value="users" class="w-full" :pt="{
        thead: { class: 'border-b border-gray-200' },
        tbody: { class: 'divide-y divide-gray-100' }
    }">
      <!-- Nutzer Column -->
      <Column field="name" header="Nutzer" style="width: 50%" :pt="{ headerCell: { class: 'text-left font-semibold text-gray-700 py-3 px-4' }, bodyCell: { class: 'py-3 px-4' } }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="data.initial" 
              shape="circle" 
              class="bg-slate-100 text-slate-600 font-medium w-7 h-7 text-sm flex items-center justify-center" 
            />
            <span class="text-sm text-gray-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <!-- Rolle Column -->
      <Column field="role" header="Rolle" style="width: 35%" :pt="{ headerCell: { class: 'text-left font-semibold text-gray-700 py-3 px-4' }, bodyCell: { class: 'py-3 px-4' } }">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="data.severity" 
            :rounded="false" 
            class="text-xs font-bold px-2 py-1"
          />
        </template>
      </Column>

      <!-- Aktiv Column -->
      <Column field="active" header="Aktiv" style="width: 15%" :pt="{ headerCell: { class: 'text-left font-semibold text-gray-700 py-3 px-4' }, bodyCell: { class: 'py-3 px-4' } }">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" />
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
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
]);
</script>