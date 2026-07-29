<template>
  <div class="relative h-[323px] w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px]"
      :pt="{
        table: 'border-collapse',
        headerCell: 'h-[39px] border-b border-slate-200 bg-white px-3.5 py-[10.5px] text-sm font-semibold',
        bodyCell: 'h-[50px] border-b border-slate-200 bg-white px-3.5 py-[10.5px] text-sm',
      }"
    >
      <Column field="project" header="Projekt" header-class="w-[224px]" body-class="w-[224px]" />
      <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" header-class="w-[124px]" body-class="w-[124px]" />
      <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px]">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              :severity="selectedProject.project === data.project ? 'secondary' : 'secondary'"
              :text="selectedProject.project !== data.project"
              aria-label="Aktionen anzeigen"
              class="!h-7 !w-[35px]"
              @click="selectedProject = data"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <div class="absolute left-[561px] top-[159px] flex w-48 flex-col rounded-md border border-slate-200 bg-white p-[10.5px]">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const projects = ref([
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    dueDate: '15.04.2026',
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    dueDate: '24.04.2026',
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    dueDate: '09.05.2026',
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    dueDate: '12.06.2026',
  },
])

const selectedProject = ref(projects.value[1])
</script>