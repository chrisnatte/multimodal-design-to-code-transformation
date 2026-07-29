<template>
  <div class="p-6">
    <DataTable
      :value="projects"
      class="w-[600px] text-sm"
      :pt="{
        table: 'border-collapse',
        thead: 'border-b border-slate-200',
        headerCell: 'bg-white px-3.5 py-2.5 text-left font-semibold text-slate-700',
        bodyRow: 'border-b border-slate-200',
        bodyCell: 'px-3.5 py-2.5 text-slate-700'
      }"
    >
      <Column field="project" header="Projekt" :style="{ width: '224px' }" />
      <Column header="Status" :style="{ width: '160px' }">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" :style="{ width: '124px' }" />
      <Column header="Aktionen" :style="{ width: '92px' }">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              v-if="data.project === 'Mobile App'"
              ref="mobileActionButton"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              size="small"
              aria-label="Aktionen für Mobile App"
              @click="showActions($event, data)"
            />
            <Button
              v-else
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              size="small"
              :aria-label="`Aktionen für ${data.project}`"
              @click="showActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :dismissable="false"
      :pt="{
        root: 'w-48 border border-slate-200 shadow-md',
        content: 'p-2.5'
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
          @click="editProject"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
          @click="duplicateProject"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
          @click="deleteProject"
        />
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
  { project: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026', severity: 'success' },
  { project: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026', severity: 'warn' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026', severity: 'secondary' },
  { project: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026', severity: 'danger' }
])

const selectedProject = ref(projects.value[1])
const actionsPopover = ref()
const mobileActionButton = ref()

function showActions(event: Event, project: (typeof projects.value)[number]) {
  selectedProject.value = project
  actionsPopover.value?.toggle(event)
}

function editProject() {
  actionsPopover.value?.hide()
}

function duplicateProject() {
  actionsPopover.value?.hide()
}

function deleteProject() {
  actionsPopover.value?.hide()
}

onMounted(async () => {
  await nextTick()

  const target = mobileActionButton.value?.$el

  if (target) {
    actionsPopover.value?.show({ currentTarget: target }, target)
  }
})
</script>