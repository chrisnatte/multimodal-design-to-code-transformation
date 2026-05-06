<template>
  <DataTable :value="users">
    <Column field="name" header="Name" body-class="flex items-center gap-3">
      <template #body="{ data }">
        <Avatar :label="getAbbrevation(data.name)" size="normal" shape="circle" />
        <span>{{ data.name }}</span>
      </template>
    </Column>
    <Column field="role" header="Rolle">
      <template #body="{ data }">
        <Tag :value="data.role" :severity="getRoleTagSeverity(data.role)" />
      </template>
    </Column>
    <Column field="isActive" header="Ist aktiv">
      <template #body="{ data }">
        <Checkbox :model-value="data.isActive" binary />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Checkbox from 'primevue/checkbox'
  import DataTable from 'primevue/datatable'

  const users = ref([
    {
      name: 'Max Mustermann',
      role: 'Administrator',
      isActive: true,
    },
    {
      name: 'Anna Schmidt',
      role: 'Projektleiter',
      isActive: true,
    },
    {
      name: 'Lisa Weber',
      role: 'Gast',
      isActive: false,
    },
    {
      name: 'Paul Müller',
      role: 'Gast',
      isActive: true,
    },
  ])

  function getAbbrevation(name: string) {
    return name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('')
  }

  function getRoleTagSeverity(role: string) {
    switch (role) {
      case 'Administrator':
        return 'danger'
      case 'Projektleiter':
        return 'info'
      case 'Gast':
        return 'warn'
    }
  }
</script>
