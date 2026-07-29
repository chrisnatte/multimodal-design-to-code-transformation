<template>
  <main class="w-full bg-white px-6 pt-7 pb-6">
    <DataTable
      :value="users"
      size="small"
      class="w-full"
      tableStyle="min-width: 100%"
      :pt="{
        headerCell: { class: 'px-3.5 py-2.5 text-sm font-semibold text-slate-700' },
        bodyCell: { class: 'px-3.5 py-2.5 text-sm text-slate-700' }
      }"
    >
      <Column header="Nutzer" style="width: 53.6%">
        <template #body="{ data }">
          <div class="flex items-center gap-3.5">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" style="width: 34.8%">
        <template #body="{ data }">
          <Tag
            :value="data.role"
            :severity="data.severity"
            class="rounded-md text-xs font-semibold"
          />
        </template>
      </Column>

      <Column header="Aktiv" style="width: 11.6%">
        <template #body="{ data }">
          <Checkbox
            v-model="activeStates[data.key]"
            binary
            :aria-label="`${data.name} aktiv`"
            :pt="{
              box: {
                class: activeStates[data.key]
                  ? 'border-emerald-500 bg-emerald-500'
                  : 'border-slate-300'
              }
            }"
          />
        </template>
      </Column>
    </DataTable>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = [
  { key: 'max', initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger' },
  { key: 'anna', initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info' },
  { key: 'lisa', initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn' },
  { key: 'paul', initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn' }
]

const activeStates = ref({
  max: true,
  anna: true,
  lisa: false,
  paul: true
})
</script>