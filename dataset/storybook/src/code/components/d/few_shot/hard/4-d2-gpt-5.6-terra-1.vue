<template>
  <div class="w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px]"
      table-class="w-[600px]"
      :pt="{
        headerCell: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-2.5',
        bodyCell: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-2.5',
      }"
    >
      <Column field="name" header="Projekt" class="w-[224px]" />
      <Column header="Status" class="w-[160px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="w-[124px]" />
      <Column header="Aktionen" class="w-[92px]">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              v-if="data.name === 'Mobile App'"
              ref="activeActionButton"
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              aria-label="Aktionen für Mobile App"
              :class="{ '!bg-slate-100': selectedProject?.name === data.name }"
              @click="toggleActions($event, data)"
            />
            <Button
              v-else
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              :aria-label="`Aktionen für ${data.name}`"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :pt="{
        root: 'w-48',
        content: '!p-2.5',
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
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

const actionsPopover = ref()
const activeActionButton = ref()
const selectedProject = ref(projects.value[1])

const toggleActions = (event, project) => {
  selectedProject.value = project
  actionsPopover.value?.toggle(event)
}

onMounted(() => {
  if (activeActionButton.value) {
    actionsPopover.value?.show({ currentTarget: activeActionButton.value.$el })
  }
})
</script>