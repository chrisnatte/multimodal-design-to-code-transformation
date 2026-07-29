<template>
  <div class="min-h-[323px] w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      table-style="width: 600px"
      class="text-sm"
    >
      <Column
        field="project"
        header="Projekt"
        header-class="!h-[39px] !w-[224px] !border-surface-200 !px-3.5 !py-2.5 !text-sm !font-semibold"
        body-class="!h-[50px] !w-[224px] !border-surface-200 !px-3.5 !py-2.5"
      />
      <Column
        header="Status"
        header-class="!h-[39px] !w-[160px] !border-surface-200 !px-3.5 !py-2.5 !text-sm !font-semibold"
        body-class="!h-[50px] !w-[160px] !border-surface-200 !px-3.5 !py-2.5"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column
        field="dueDate"
        header="Fällig"
        header-class="!h-[39px] !w-[124px] !border-surface-200 !px-3.5 !py-2.5 !text-sm !font-semibold"
        body-class="!h-[50px] !w-[124px] !border-surface-200 !px-3.5 !py-2.5"
      />
      <Column
        header="Aktionen"
        header-class="!h-[39px] !w-[92px] !border-surface-200 !px-3.5 !py-2.5 !text-sm !font-semibold"
        body-class="!h-[50px] !w-[92px] !border-surface-200 !px-3.5 !py-2.5"
      >
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              text
              size="small"
              aria-label="Aktionen anzeigen"
              aria-haspopup="menu"
              aria-controls="project-actions"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :pt="{
        content: '!p-2.5',
      }"
    >
      <div id="project-actions" class="flex w-[169px] flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
          @click="editProject"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
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

const actionsPopover = ref()
const activeProject = ref<{
  project: string
  status: string
  severity?: 'warn' | 'secondary' | 'danger'
  dueDate: string
} | null>(null)

const projects = ref([
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    dueDate: '15.04.2026',
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn' as const,
    dueDate: '24.04.2026',
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary' as const,
    dueDate: '09.05.2026',
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger' as const,
    dueDate: '12.06.2026',
  },
])

function toggleActions(event: Event, project: (typeof projects.value)[number]) {
  activeProject.value = project
  actionsPopover.value?.toggle(event)
}

function editProject() {
  actionsPopover.value?.hide()
}
</script>