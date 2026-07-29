<template>
  <div class="flex w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      class="w-full"
      :pt="{
        table: 'w-full',
        headerCell: 'h-[39px] !px-3.5 !py-2.5 text-sm font-semibold',
        bodyCell: 'h-[50px] !border-slate-200 !px-3.5 !py-2.5 text-sm',
      }"
    >
      <Column header="Nutzer" header-class="w-[384px]" body-class="w-[384px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" header-class="w-[224px]" body-class="w-[224px]">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        header-class="w-[108px] text-center"
        body-class="w-[108px] text-center"
      >
        <template #body="{ index }">
          <div class="flex justify-center">
            <Checkbox
              v-if="index === 0"
              v-model="maxMustermannActive"
              binary
              :input-id="`active-${index}`"
            />
            <Checkbox
              v-else-if="index === 1"
              v-model="annaSchmidtActive"
              binary
              :input-id="`active-${index}`"
            />
            <Checkbox
              v-else-if="index === 2"
              v-model="lisaWeberActive"
              binary
              :input-id="`active-${index}`"
            />
            <Checkbox
              v-else
              v-model="paulMuellerActive"
              binary
              :input-id="`active-${index}`"
            />
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
    initials: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
  },
])

const maxMustermannActive = ref(true)
const annaSchmidtActive = ref(true)
const lisaWeberActive = ref(false)
const paulMuellerActive = ref(true)
</script>