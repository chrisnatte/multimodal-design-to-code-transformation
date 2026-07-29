<template>
  <div class="flex w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      dataKey="name"
      showGridlines
      class="w-[716px]"
      tableClass="w-full"
    >
      <Column header="Nutzer" headerClass="font-semibold" bodyClass="w-[384px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="h-7 w-7 bg-slate-200 text-sm text-slate-700" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" headerClass="font-semibold" bodyClass="w-[224px]">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" :rounded="false" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        headerClass="text-center font-semibold"
        bodyClass="w-[108px] text-center"
      >
        <template #body="{ index }">
          <div class="flex justify-center">
            <Checkbox v-model="activeUsers[index]" :binary="true" />
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
    initials: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger'
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info'
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn'
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn'
  }
])

const activeUsers = ref([true, true, false, true])
</script>