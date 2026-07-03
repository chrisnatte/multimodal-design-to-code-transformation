<template>
  <div class="flex flex-col gap-2.5 p-6">
    <DataTable :value="items">
      <Column header="Nutzer">
        <template #body>
          <Avatar label="M" shape="circle" />
          <span class="text-sm">Max Mustermann</span>
        </template>
      </Column>
      <Column header="Rolle">
        <template #body>
          <Tag value="Administrator" severity="danger" />
        </template>
      </Column>
      <Column header="Aktiv">
        <template #body>
          <Checkbox v-model="_state.n27_2044" binary />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const _state = reactive({ n27_2044: null })
</script>
