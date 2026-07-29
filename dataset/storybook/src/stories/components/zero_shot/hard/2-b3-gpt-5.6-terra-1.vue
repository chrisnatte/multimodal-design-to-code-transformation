<template>
  <div class="flex w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      dataKey="id"
      class="w-[716px]"
      tableStyle="width: 716px"
    >
      <Column
        field="name"
        header="Nutzer"
        headerClass="font-semibold text-sm"
        bodyClass="py-[10px]"
        style="width: 384px"
      >
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar
              :label="slotProps.data.initial"
              shape="circle"
              class="h-7 w-7 bg-slate-200 text-sm text-slate-700"
            />
            <span class="text-sm">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column
        field="role"
        header="Rolle"
        headerClass="font-semibold text-sm"
        bodyClass="py-[10px]"
        style="width: 224px"
      >
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.role"
            :severity="slotProps.data.severity"
            :rounded="false"
            class="text-xs font-bold"
          />
        </template>
      </Column>

      <Column
        field="active"
        header="Aktiv"
        headerClass="text-center font-semibold text-sm"
        bodyClass="py-[10px] text-center"
        style="width: 108px"
      >
        <template #body="slotProps">
          <div class="flex justify-center">
            <Checkbox
              v-model="activeStates[slotProps.index]"
              binary
              class="h-[18px] w-[18px]"
            />
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

const activeStates = ref([true, true, false, true])

const users = [
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger'
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info'
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn'
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn'
  }
]
</script>