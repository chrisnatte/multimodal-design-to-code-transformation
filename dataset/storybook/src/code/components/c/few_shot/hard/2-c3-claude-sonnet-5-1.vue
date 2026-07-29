<template>
  <DataTable :value="users" table-style="min-width: 40rem">
    <Column field="name" header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-2">
          <Avatar :label="data.name.charAt(0)" shape="circle" />
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
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Checkbox from 'primevue/checkbox'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'

  const users = ref([
    { name: 'Max Mustermann', role: 'Administrator', active: true },
    { name: 'Anna Schmidt', role: 'Projektleiter', active: true },
    { name: 'Lisa Weber', role: 'Gast', active: false },
    { name: 'Paul Müller', role: 'Gast', active: true },
  ])

  function getRoleSeverity(role: string) {
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