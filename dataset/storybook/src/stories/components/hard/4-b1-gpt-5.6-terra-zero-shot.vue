<template>
  <div class="h-[323px] w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px]"
      :pt="{ table: { class: 'w-[600px] table-fixed' } }"
    >
      <Column
        field="project"
        header="Projekt"
        :pt="{
          headerCell: { class: 'h-[39px] w-[224px] border-surface-200 px-3.5 py-[10.5px] text-sm font-semibold' },
          bodyCell: { class: 'h-[50px] w-[224px] border-surface-200 px-3.5 py-[10.5px] text-sm' }
        }"
      />
      <Column
        header="Status"
        :pt="{
          headerCell: { class: 'h-[39px] w-[160px] border-surface-200 px-3.5 py-[10.5px] text-sm font-semibold' },
          bodyCell: { class: 'h-[50px] w-[160px] border-surface-200 px-3.5 py-[10.5px] text-sm' }
        }"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column
        field="dueDate"
        header="Fällig"
        :pt="{
          headerCell: { class: 'h-[39px] w-[124px] border-surface-200 px-3.5 py-[10.5px] text-sm font-semibold' },
          bodyCell: { class: 'h-[50px] w-[124px] border-surface-200 px-3.5 py-[10.5px] text-sm' }
        }"
      />
      <Column
        header="Aktionen"
        :pt="{
          headerCell: { class: 'h-[39px] w-[92px] border-surface-200 px-3.5 py-[10.5px] text-sm font-semibold' },
          bodyCell: { class: 'h-[50px] w-[92px] border-surface-200 px-3.5 py-[10.5px] text-sm' }
        }"
      >
        <template #body="{ data }">
          <div class="flex items-center justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              :severity="data.project === 'Webseite Relaunch' ? 'primary' : 'secondary'"
              :text="data.project !== 'Mobile App'"
              aria-label="Aktionen anzeigen"
              class="h-7 w-[35px]"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionPopover">
      <div class="w-[192px] rounded-md border border-surface-200 bg-white p-[10.5px]">
        <div class="flex flex-col gap-2">
          <Button
            label="Bearbeiten"
            icon="pi pi-pencil"
            severity="secondary"
            outlined
            size="small"
            class="h-[33px] w-[169px] justify-start"
            @click="editProject"
          />
          <Button
            label="Duplizieren"
            icon="pi pi-copy"
            severity="secondary"
            outlined
            size="small"
            class="h-[33px] w-[169px] justify-start"
            @click="duplicateProject"
          />
          <Button
            label="Löschen"
            icon="pi pi-trash"
            severity="secondary"
            outlined
            size="small"
            class="h-[33px] w-[169px] justify-start"
            @click="deleteProject"
          />
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const actionPopover = ref()
const selectedProject = ref(null)

const projects = ref([
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'primary',
    dueDate: '15.04.2026'
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    dueDate: '24.04.2026'
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    dueDate: '09.05.2026'
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    dueDate: '12.06.2026'
  }
])

function toggleActions(event, project) {
  selectedProject.value = project
  actionPopover.value.toggle(event)
}

function editProject() {
  actionPopover.value.hide()
}

function duplicateProject() {
  actionPopover.value.hide()
}

function deleteProject() {
  actionPopover.value.hide()
}
</script>