<template>
  <div class="relative min-h-[323px] w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      table-style="width: 600px"
      :pt="{
        table: 'text-sm',
      }"
    >
      <Column field="project" header="Projekt" style="width: 224px" />
      <Column header="Status" style="width: 160px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" style="width: 124px" />
      <Column header="Aktionen" style="width: 92px">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              variant="text"
              :aria-label="`Aktionen für ${data.project}`"
              aria-haspopup="dialog"
              :class="[
                '!h-[28px] !w-[35px]',
                selectedProject?.project === data.project ? '!bg-surface-100' : '',
              ]"
              @click="openActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      aria-label="Projektaktionen"
      append-to="self"
      :pt="{
        content: '!p-[10.5px]',
      }"
    >
      <div class="flex w-[169px] flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
          @click="actionsPopover?.hide()"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
          @click="actionsPopover?.hide()"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
          @click="actionsPopover?.hide()"
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

type Project = {
  project: string
  status: string
  dueDate: string
  severity?: 'secondary' | 'warn' | 'danger'
}

const projects = ref<Project[]>([
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    dueDate: '15.04.2026',
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    dueDate: '24.04.2026',
    severity: 'warn',
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    dueDate: '09.05.2026',
    severity: 'secondary',
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    dueDate: '12.06.2026',
    severity: 'danger',
  },
])

const actionsPopover = ref<InstanceType<typeof Popover> | null>(null)
const selectedProject = ref<Project | null>(projects.value[1])

const openActions = (event: Event, project: Project) => {
  selectedProject.value = project
  actionsPopover.value?.toggle(event)
}
</script>