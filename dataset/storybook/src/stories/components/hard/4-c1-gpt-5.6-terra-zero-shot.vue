<template>
  <div class="w-full p-6">
    <DataTable
      :value="projects"
      class="w-[600px] text-sm"
      :pt="{
        table: { class: 'w-full' },
        headerCell: { class: 'bg-transparent px-4 py-2 text-left font-semibold text-slate-700' },
        bodyCell: { class: 'px-4 py-3 text-slate-700' },
        bodyRow: { class: 'border-b border-slate-200' }
      }"
    >
      <Column field="project" header="Projekt" class="w-[235px]" />
      <Column header="Status" class="w-[160px]">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="text-xs font-semibold"
          />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="w-[130px]" />
      <Column header="Aktionen" class="w-[75px]">
        <template #body="{ data }">
          <div class="relative flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              size="small"
              class="h-7 w-8 text-slate-600"
              :class="{ 'bg-slate-100': data.id === activeProjectId }"
              @click="activeProjectId = data.id"
            />
            <div
              v-if="data.id === activeProjectId"
              class="absolute right-0 top-9 z-10 w-[192px] rounded-md border border-slate-200 bg-white p-2 shadow-md"
            >
              <div class="flex flex-col gap-2">
                <Button
                  label="Bearbeiten"
                  icon="pi pi-pencil"
                  outlined
                  severity="secondary"
                  size="small"
                  class="w-full justify-start"
                />
                <Button
                  label="Duplizieren"
                  icon="pi pi-clone"
                  outlined
                  severity="secondary"
                  size="small"
                  class="w-full justify-start"
                />
                <Button
                  label="Löschen"
                  icon="pi pi-trash"
                  outlined
                  severity="secondary"
                  size="small"
                  class="w-full justify-start"
                />
              </div>
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const activeProjectId = ref(2)

const projects = ref([
  { id: 1, project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
  { id: 2, project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
  { id: 3, project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
  { id: 4, project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
])
</script>