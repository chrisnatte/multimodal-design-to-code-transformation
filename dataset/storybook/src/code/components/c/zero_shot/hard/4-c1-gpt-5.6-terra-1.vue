<template>
  <div class="min-h-screen bg-white px-6 py-6">
    <DataTable
      :value="projects"
      size="small"
      class="w-[600px] text-sm"
      tableStyle="min-width: 600px"
    >
      <Column field="project" header="Projekt" class="w-[224px]">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.project }}</span>
        </template>
      </Column>

      <Column field="status" header="Status" class="w-[160px]">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="text-xs font-semibold"
          />
        </template>
      </Column>

      <Column field="dueDate" header="Fällig" class="w-[124px]">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.dueDate }}</span>
        </template>
      </Column>

      <Column header="Aktionen" class="w-[92px]">
        <template #body="{ data }">
          <div class="relative flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              size="small"
              severity="secondary"
              aria-label="Aktionen"
              @click="selectedAction = selectedAction === data.id ? null : data.id"
            />
            <Menu
              v-if="selectedAction === data.id"
              :model="actionItems"
              class="absolute right-0 top-9 z-10 w-48 shadow-md"
            />
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
import Menu from 'primevue/menu'
import Tag from 'primevue/tag'

const selectedAction = ref(2)

const projects = ref([
  {
    id: 1,
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    dueDate: '15.04.2026'
  },
  {
    id: 2,
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    dueDate: '24.04.2026'
  },
  {
    id: 3,
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    dueDate: '09.05.2026'
  },
  {
    id: 4,
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    dueDate: '12.06.2026'
  }
])

const actionItems = [
  {
    label: 'Bearbeiten',
    icon: 'pi pi-pencil'
  },
  {
    label: 'Duplizieren',
    icon: 'pi pi-clone'
  },
  {
    label: 'Löschen',
    icon: 'pi pi-trash'
  }
]
</script>