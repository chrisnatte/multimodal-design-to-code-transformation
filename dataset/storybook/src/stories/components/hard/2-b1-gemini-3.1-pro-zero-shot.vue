<template>
  <div class="flex flex-col w-[716px]">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer" style="width: 384px">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.avatar" shape="circle" class="bg-[#e2e8f0] text-gray-800" />
            <span class="font-normal text-[14px] font-['Inter']">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Rolle" style="width: 224px">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.roleSeverity" :rounded="false" />
        </template>
      </Column>
      <Column header="Aktiv" style="width: 108px">
        <template #body="slotProps">
          <div class="flex items-center justify-center">
            <Checkbox v-model="slotProps.data.active" :binary="true" readonly />
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
    name: 'Max Mustermann',
    avatar: 'M',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true
  },
  {
    name: 'Anna Schmidt',
    avatar: 'A',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true
  },
  {
    name: 'Lisa Weber',
    avatar: 'L',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false
  },
  {
    name: 'Paul Müller',
    avatar: 'P',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true
  }
])
</script>