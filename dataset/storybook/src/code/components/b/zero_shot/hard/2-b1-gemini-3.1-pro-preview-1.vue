<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-fit">
    <DataTable :value="users" class="w-[716px]">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" class="bg-[#e2e8f0] text-gray-800" />
            <span class="text-sm font-normal font-sans text-gray-900">{{ data.name }}</span>
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
          <div class="flex justify-center w-full">
            <Checkbox v-model="data.active" :binary="true" readonly />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = ref([
  { 
    id: 1, 
    name: 'Max Mustermann', 
    avatar: 'M', 
    role: 'Administrator', 
    roleSeverity: 'danger', 
    active: true 
  },
  { 
    id: 2, 
    name: 'Anna Schmidt', 
    avatar: 'A', 
    role: 'Projektleiter', 
    roleSeverity: 'info', 
    active: true 
  },
  { 
    id: 3, 
    name: 'Lisa Weber', 
    avatar: 'L', 
    role: 'Gast', 
    roleSeverity: 'warn', 
    active: false 
  },
  { 
    id: 4, 
    name: 'Paul Müller', 
    avatar: 'P', 
    role: 'Gast', 
    roleSeverity: 'warn', 
    active: true 
  }
])
</script>