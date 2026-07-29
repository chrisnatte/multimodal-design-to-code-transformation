<template>
  <div class="bg-white p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.name.charAt(0)" shape="circle" class="bg-slate-100 text-slate-600" />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" header-class="w-24" body-class="w-24">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary />
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
      role: 'Administrator',
      active: true,
    },
    {
      name: 'Anna Schmidt',
      role: 'Projektleiter',
      active: true,
    },
    {
      name: 'Lisa Weber',
      role: 'Gast',
      active: false,
    },
    {
      name: 'Paul Müller',
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