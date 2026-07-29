<template>
  <div class="w-[764px] bg-white p-6">
    <DataTable
      :value="users"
      dataKey="name"
      class="w-full"
      tableStyle="width: 100%; table-layout: fixed"
      :pt="{
        table: { class: 'border-collapse' },
        thead: { class: 'border-b border-slate-200' },
        headerCell: { class: 'bg-white px-3.5 py-[10px] text-left text-sm font-semibold text-slate-700' },
        bodyRow: { class: 'border-b border-slate-200' },
        bodyCell: { class: 'bg-white px-3.5 py-[10.5px] text-sm text-slate-700' }
      }"
    >
      <Column header="Nutzer" style="width: 53.63%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="!h-7 !w-7 !bg-slate-200 !text-sm !font-normal !text-slate-600"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" style="width: 31.28%">
        <template #body="{ data }">
          <Tag
            :value="data.role"
            :severity="data.severity"
            class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
          />
        </template>
      </Column>

      <Column header="Aktiv" style="width: 15.09%">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox
              v-model="data.active"
              :binary="true"
              :dt="{
                checkedBackground: '#10b981',
                checkedBorderColor: '#10b981',
                checkedHoverBackground: '#10b981',
                checkedHoverBorderColor: '#10b981'
              }"
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