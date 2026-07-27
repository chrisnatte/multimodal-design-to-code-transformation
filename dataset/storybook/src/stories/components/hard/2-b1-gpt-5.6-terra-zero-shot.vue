<template>
  <DataTable
    :value="users"
    class="w-[716px] text-sm"
    table-class="w-[716px]"
    :table-style="{ width: '716px' }"
  >
    <Column
      field="name"
      header="Nutzer"
      header-class="!h-[39px] !px-3.5 !py-0 !text-sm !font-semibold"
      body-class="!h-[50px] !px-3.5 !py-0"
      :style="{ width: '384px' }"
    >
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <Avatar
            :label="data.initial"
            shape="circle"
            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
          />
          <span class="text-sm font-normal">{{ data.name }}</span>
        </div>
      </template>
    </Column>

    <Column
      field="role"
      header="Rolle"
      header-class="!h-[39px] !px-3.5 !py-0 !text-sm !font-semibold"
      body-class="!h-[50px] !px-3.5 !py-0"
      :style="{ width: '224px' }"
    >
      <template #body="{ data }">
        <Tag
          :value="data.role"
          :severity="data.severity"
          class="!rounded-none !text-[12.25px] !font-bold"
        />
      </template>
    </Column>

    <Column
      field="active"
      header="Aktiv"
      header-class="!h-[39px] !px-3.5 !py-0 !text-center !text-sm !font-semibold"
      body-class="!h-[50px] !px-3.5 !py-0 !text-center"
      :style="{ width: '108px' }"
    >
      <template #body="{ data }">
        <div class="flex items-center justify-center">
          <Checkbox v-model="data.active" :binary="true" />
        </div>
      </template>
    </Column>
  </DataTable>
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
    severity: 'danger',
    active: true
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
])
</script>