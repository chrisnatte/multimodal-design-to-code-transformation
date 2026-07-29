<template>
  <div class="w-[600px] p-6">
    <DataTable
      :value="projects"
      size="small"
      table-class="w-full"
      :pt="{
        root: 'border-0',
        tableContainer: 'overflow-visible',
        thead: 'border-b border-slate-200',
        headerRow: 'border-0',
        bodyRow: 'border-b border-slate-200',
      }"
    >
      <Column
        field="project"
        header="Projekt"
        header-class="!bg-white !px-3 !py-2.5 text-sm"
        body-class="!bg-white !px-3 !py-3 text-sm"
        class="w-[38%]"
      />
      <Column
        header="Status"
        header-class="!bg-white !px-3 !py-2.5 text-sm"
        body-class="!bg-white !px-3 !py-3 text-sm"
        class="w-[27%]"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column
        field="dueDate"
        header="Fällig"
        header-class="!bg-white !px-3 !py-2.5 text-sm"
        body-class="!bg-white !px-3 !py-3 text-sm"
        class="w-[21%]"
      />
      <Column
        header="Aktionen"
        header-class="!bg-white !px-3 !py-2.5 text-sm"
        body-class="!bg-white !px-3 !py-2 text-sm"
        class="w-[14%]"
      >
        <template #body="{ data }">
          <Button
            v-if="data.id === selectedProjectId"
            ref="action-button"
            icon="pi pi-ellipsis-h"
            severity="secondary"
            variant="text"
            aria-label="Aktionen für Mobile App"
            :class="[
              'h-7 w-8 !p-0',
              data.id === selectedProjectId ? '!bg-slate-100' : '',
            ]"
            @click="toggleActions"
          />
          <Button
            v-else
            icon="pi pi-ellipsis-h"
            severity="secondary"
            variant="text"
            :aria-label="`Aktionen für ${data.project}`"
            class="h-7 w-8 !p-0"
            @click="toggleActions"
          />
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actions-popover"
      append-to="self"
      aria-label="Projektaktionen"
      :pt="{
        root: '!mt-2 w-48',
        content: '!p-2',
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
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
  {
    id: 1,
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    dueDate: '15.04.2026',
  },
  {
    id: 2,
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    dueDate: '24.04.2026',
  },
  {
    id: 3,
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    dueDate: '09.05.2026',
  },
  {
    id: 4,
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    dueDate: '12.06.2026',
  },
])

const selectedProjectId = ref(2)
const actionsPopover = ref()
const actionButton = ref()

const toggleActions = (event: Event) => {
  actionsPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()

  const target = actionButton.value?.$el

  if (target) {
    actionsPopover.value?.show({ currentTarget: target })
  }
})
</script>