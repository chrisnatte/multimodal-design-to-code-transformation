<template>
  <div class="relative w-[600px] p-6">
    <DataTable
      :value="projects"
      class="text-sm"
      :pt="{
        table: 'w-full',
        headerCell: '!bg-transparent !px-3 !py-2 !text-left !font-semibold',
        bodyCell: '!px-3 !py-3',
      }"
    >
      <Column field="project" header="Projekt" class="w-[38%]" />
      <Column header="Status" class="w-[27%]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="w-[21%]" />
      <Column header="Aktionen" class="w-[14%]">
        <template #body="{ index }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            size="small"
            :aria-label="`Aktionen für ${projects[index].project}`"
            :class="{ '!bg-surface-100': index === 1 && menuVisible }"
            @click="menuVisible = !menuVisible"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      v-if="menuVisible"
      :model="actionItems"
      class="absolute right-0 top-[159px] z-10 w-[216px] shadow-md"
      :pt="{
        root: '!rounded-md !border !border-surface-200 !bg-white !p-2',
        list: '!flex !flex-col !gap-2 !p-0',
        itemLink: '!rounded-md !border !border-surface-200 !px-3 !py-2 !text-sm',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Menu from 'primevue/menu'
import Tag from 'primevue/tag'

const menuVisible = ref(true)

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026', severity: 'success' },
  { project: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026', severity: 'warn' },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    dueDate: '09.05.2026',
    severity: 'secondary',
  },
  { project: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026', severity: 'danger' },
])

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Duplizieren', icon: 'pi pi-clone' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]
</script>