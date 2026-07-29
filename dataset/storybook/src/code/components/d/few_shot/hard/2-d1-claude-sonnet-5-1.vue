<template>
  <div class="p-6">
    <DataTable :value="users">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
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
    { initial: 'M', name: 'Max Mustermann', role: 'Administrator', active: true },
    { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', active: true },
    { initial: 'L', name: 'Lisa Weber', role: 'Gast', active: false },
    { initial: 'P', name: 'Paul Müller', role: 'Gast', active: true },
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
        return undefined
    }
  }
</script>