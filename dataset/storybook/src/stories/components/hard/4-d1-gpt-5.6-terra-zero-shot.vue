<template>
  <div class="min-h-[323px] w-full bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px] text-sm"
      table-style="min-width: 600px"
    >
      <Column field="project" header="Projekt" header-class="w-[224px]" body-class="w-[224px]" />
      <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" header-class="w-[124px]" body-class="w-[124px]" />
      <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px]">
        <template #body="{ data, index }">
          <div class="flex justify-center">
            <Button
              :ref="index === activeMenu ? setActiveButton : undefined"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              size="small"
              aria-label="Aktionen anzeigen"
              @click="toggleActions($event, index)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" class="w-[192px]">
      <div class="flex flex-col gap-2 p-1">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          size="small"
          class="w-full justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          size="small"
          class="w-full justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          size="small"
          class="w-full justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const actionsPopover = ref()
const activeButton = ref()
const activeMenu = ref(1)

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
])

const setActiveButton = (element) => {
  activeButton.value = element?.$el ?? element
}

const toggleActions = (event, index) => {
  activeMenu.value = index
  actionsPopover.value.toggle(event)
}

onMounted(async () => {
  await nextTick()
  if (activeButton.value) {
    actionsPopover.value.show({ currentTarget: activeButton.value })
  }
})
</script>