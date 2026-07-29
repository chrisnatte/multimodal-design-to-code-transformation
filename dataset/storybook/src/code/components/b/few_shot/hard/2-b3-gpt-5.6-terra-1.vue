<template>
  <div class="flex w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      table-style="width: 44.75rem"
      :pt="{
        headerCell: 'px-3.5 py-2.5 text-sm font-semibold',
        bodyCell: 'px-3.5 py-2.5',
      }"
    >
      <Column header="Nutzer" :header-style="{ width: '384px' }" :body-style="{ width: '384px' }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column
        field="role"
        header="Rolle"
        :header-style="{ width: '224px' }"
        :body-style="{ width: '224px' }"
      >
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        :header-style="{ width: '108px', textAlign: 'center' }"
        :body-style="{ width: '108px', textAlign: 'center' }"
      >
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="data.active" :input-id="`active-${data.id}`" binary />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const users = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true,
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true,
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false,
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true,
  },
])
</script>