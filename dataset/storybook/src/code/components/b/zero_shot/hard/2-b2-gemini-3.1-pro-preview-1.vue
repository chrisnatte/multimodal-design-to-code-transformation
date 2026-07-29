<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <DataTable :value="users" class="w-full max-w-[716px]">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="slotProps.data.initial" 
              shape="circle" 
              class="bg-surface-200 text-surface-700" 
            />
            <span class="text-sm font-normal font-sans text-surface-900">
              {{ slotProps.data.name }}
            </span>
          </div>
        </template>
      </Column>
      
      <Column field="role" header="Rolle" style="width: 224px">
        <template #body="slotProps">
          <Tag 
            :value="slotProps.data.role" 
            :severity="slotProps.data.roleSeverity" 
            :rounded="false"
          />
        </template>
      </Column>
      
      <Column field="active" header="Aktiv" style="width: 108px">
        <template #body="slotProps">
          <div class="flex items-center justify-center">
            <Checkbox 
              v-model="slotProps.data.active" 
              :binary="true" 
              readonly 
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
    name: 'Max Mustermann', 
    initial: 'M', 
    role: 'Administrator', 
    roleSeverity: 'danger', 
    active: true 
  },
  { 
    name: 'Anna Schmidt', 
    initial: 'A', 
    role: 'Projektleiter', 
    roleSeverity: 'info', 
    active: true 
  },
  { 
    name: 'Lisa Weber', 
    initial: 'L', 
    role: 'Gast', 
    roleSeverity: 'warn', 
    active: false 
  },
  { 
    name: 'Paul Müller', 
    initial: 'P', 
    role: 'Gast', 
    roleSeverity: 'warn', 
    active: true 
  }
]);
</script>