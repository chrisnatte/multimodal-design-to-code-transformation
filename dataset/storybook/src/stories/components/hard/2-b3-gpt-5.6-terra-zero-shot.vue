<template>
  <div class="flex w-[716px] flex-col">
    <DataTable
      :value="users"
      dataKey="name"
      tableStyle="width: 716px"
      class="w-[716px] text-sm"
    >
      <Column
        header="Nutzer"
        headerStyle="width: 384px; height: 39px; padding: 10px 14px;"
        bodyStyle="width: 384px; height: 50px; padding: 10.5px 14px;"
      >
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="h-7 w-7 shrink-0" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column
        header="Rolle"
        headerStyle="width: 224px; height: 39px; padding: 10px 14px;"
        bodyStyle="width: 224px; height: 50px; padding: 10.5px 14px;"
      >
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        headerStyle="width: 108px; height: 39px; padding: 10px 14px; text-align: center;"
        bodyStyle="width: 108px; height: 50px; padding: 10.5px 14px; text-align: center;"
      >
        <template #body="slotProps">
          <div class="flex justify-center">
            <Checkbox v-model="activeStates[slotProps.index]" binary />
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
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger'
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info'
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn'
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn'
  }
])

const activeStates = ref([true, true, false, true])
</script>