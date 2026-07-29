<template>
  <div class="w-fit rounded-md bg-white p-6">
    <DataTable :value="users">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatarLabel" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleTagSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" header-class="justify-center" body-class="text-center">
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
    { name: 'Max Mustermann', avatarLabel: 'M', role: 'Administrator', active: true },
    { name: 'Anna Schmidt', avatarLabel: 'A', role: 'Projektleiter', active: true },
    { name: 'Lisa Weber', avatarLabel: 'L', role: 'Gast', active: false },
    { name: 'Paul Müller', avatarLabel: 'P', role: 'Gast', active: true },
  ])

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