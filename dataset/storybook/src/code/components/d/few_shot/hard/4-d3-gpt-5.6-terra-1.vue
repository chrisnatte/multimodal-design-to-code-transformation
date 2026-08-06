<template>
  <div class="bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px]"
      table-style="min-width: 600px"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-b border-slate-200 px-3.5 py-2.5 text-left text-sm font-semibold',
        bodyCell: 'border-b border-slate-200 px-3.5 py-2.5 text-sm',
      }"
    >
      <Column field="name" header="Projekt" header-style="width: 224px" body-style="width: 224px" />
      <Column header="Status" header-style="width: 160px" body-style="width: 160px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="text-xs font-bold" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" header-style="width: 124px" body-style="width: 124px" />
      <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              :ref="data.name === 'Mobile App' ? setActiveTrigger : undefined"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-label="Aktionen anzeigen"
              :class="{ 'bg-slate-100': activeProject?.name === data.name }"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :pt="{
        root: 'w-48 shadow-md',
        content: '!p-2.5',
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const projects = ref([
  { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026', severity: 'success' },
  { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026', severity: 'warn' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026', severity: 'secondary' },
  { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026', severity: 'danger' },
])

const activeProject = ref(projects.value[1])
const actionsPopover = ref()
const activeTrigger = ref<HTMLElement | null>(null)

const setActiveTrigger = (element: unknown) => {
  activeTrigger.value = element as HTMLElement | null
}

const toggleActions = (event: Event, project: (typeof projects.value)[number]) => {
  activeProject.value = project
  actionsPopover.value?.toggle(event)
}
</script>