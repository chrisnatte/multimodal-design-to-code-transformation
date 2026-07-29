<template>
  <div class="w-[600px] p-6">
    <DataTable
      :value="projects"
      table-class="w-full"
      :pt="{
        headerCell: 'border-x-0 border-t-0 px-3 py-2 text-left text-sm font-semibold',
        bodyCell: 'border-x-0 px-3 py-3 text-sm',
      }"
    >
      <Column field="project" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="text-xs" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" body-class="text-center">
        <template #body="{ data }">
          <Button
            v-if="data.project === 'Mobile App'"
            ref="actionsButton"
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            aria-label="Aktionen für Mobile App"
            aria-haspopup="true"
            @click="toggleActions"
          />
          <Button
            v-else
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            :aria-label="`Aktionen für ${data.project}`"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" :pt="{ content: '!p-2' }">
      <div class="flex w-[180px] flex-col gap-2">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" variant="outlined" class="w-full !justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" variant="outlined" class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' },
])

const actionsPopover = ref()
const actionsButton = ref()

function toggleActions(event: Event) {
  actionsPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()
  actionsButton.value?.$el?.click()
})
</script>