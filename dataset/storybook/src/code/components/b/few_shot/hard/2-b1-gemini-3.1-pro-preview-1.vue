<template>
  <div class="bg-white p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" header-class="text-center" body-class="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary readonly />
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
      roleSeverity: 'danger',
      active: true,
    },
    {
      name: 'Anna Schmidt',
      avatar: 'A',
      role: 'Projektleiter',
      roleSeverity: 'info',
      active: true,
    },
    {
      name: 'Lisa Weber',
      avatar: 'L',
      role: 'Gast',
      roleSeverity: 'warn',
      active: false,
    },
    {
      name: 'Paul Müller',
      avatar: 'P',
      role: 'Gast',
      roleSeverity: 'warn',
      active: true,
    },
  ])
</script>