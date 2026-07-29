<template>
  <div class="flex flex-col bg-white p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" style="width: 50%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.avatar"
              shape="circle"
              class="bg-slate-200 text-slate-800"
            />
            <span class="text-sm text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 35%">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 15%">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="data.active" binary />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
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
      active: true,
    },
    {
      name: 'Anna Schmidt',
      avatar: 'A',
      role: 'Projektleiter',
      active: true,
    },
    {
      name: 'Lisa Weber',
      avatar: 'L',
      role: 'Gast',
      active: false,
    },
    {
      name: 'Paul Müller',
      avatar: 'P',
      role: 'Gast',
      active: true,
    },
  ])

  function getRoleSeverity(role: string) {
    switch (role) {
      case 'Administrator':
        return 'danger'
      case 'Projektleiter':
        return 'info'
      case 'Gast':
        return 'warn'
      default:
        return 'secondary'
    }
  }
</script>