<template>
  <div class="p-6">
    <DataTable
      :value="users"
      dataKey="name"
      class="w-full"
      :pt="{
        table: { class: 'w-full border-collapse' },
        headerCell: {
          class:
            'border-x-0 border-t-0 border-b border-slate-200 bg-transparent px-3 py-2 text-left text-sm font-semibold text-slate-700'
        },
        bodyRow: { class: 'border-b border-slate-200' },
        bodyCell: {
          class:
            'border-x-0 border-t-0 border-b border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700'
        }
      }"
    >
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 bg-slate-100 text-sm text-slate-600"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag
            :value="data.role"
            :severity="data.severity"
            class="rounded-md px-2 py-1 text-xs font-semibold"
          />
        </template>
      </Column>

      <Column header="Aktiv" headerClass="text-center" bodyClass="text-center" style="width: 88px">
        <template #body="{ data }">
          <Checkbox
            v-if="data.name === 'Max Mustermann'"
            v-model="maxActive"
            binary
            aria-label="Max Mustermann aktiv"
          />
          <Checkbox
            v-else-if="data.name === 'Anna Schmidt'"
            v-model="annaActive"
            binary
            aria-label="Anna Schmidt aktiv"
          />
          <Checkbox
            v-else-if="data.name === 'Lisa Weber'"
            v-model="lisaActive"
            binary
            aria-label="Lisa Weber aktiv"
          />
          <Checkbox
            v-else
            v-model="paulActive"
            binary
            aria-label="Paul Müller aktiv"
          />
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

const maxActive = ref(true)
const annaActive = ref(true)
const lisaActive = ref(false)
const paulActive = ref(true)

const users = ref([
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger' },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info' },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn' },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn' }
])
</script>