<template>
  <div class="w-full max-w-[716px]">
    <DataTable :value="users" class="w-full table-auto">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="data.initials" 
              shape="circle" 
              class="bg-slate-200 text-slate-800 font-normal w-7 h-7 text-sm" 
            />
            <span class="text-sm font-normal text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 224px">
        <template #body="{ data }">
          <Tag 
            :value="data.role" 
            :severity="data.severity" 
            class="text-[12.25px] font-bold px-2 py-0.5 rounded" 
          />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 108px">
        <template #body="{ data }">
          <div class="flex items-center justify-center pl-2">
            <Checkbox 
              v-model="data.active" 
              :binary="true" 
              readonly 
              class="pointer-events-none" 
            />
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
    initials: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
]);
</script>