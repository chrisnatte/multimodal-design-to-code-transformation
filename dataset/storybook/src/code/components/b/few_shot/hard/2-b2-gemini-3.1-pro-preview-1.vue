<template>
  <div class="flex flex-col gap-2.5 bg-white p-6">
    <DataTable :value="users">
      <Column field="name" header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle" style="width: 224px">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv" style="width: 108px">
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
  import Tag from 'primevue/tag'
  import Avatar from 'primevue/avatar'
  import Column from 'primevue/column'
  import Checkbox from 'primevue/checkbox'
  import DataTable from 'primevue/datatable'

  const users = ref([
    { name: 'Max Mustermann', avatar: 'M', role: 'Administrator', active: true },
    { name: 'Anna Schmidt', avatar: 'A', role: 'Projektleiter', active: true },
    { name: 'Lisa Weber', avatar: 'L', role: 'Gast', active: false },
    { name: 'Paul Müller', avatar: 'P', role: 'Gast', active: true },
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