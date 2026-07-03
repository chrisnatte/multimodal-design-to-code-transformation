<template>
  <div class="p-6 bg-white relative w-[780px]">
    <DataTable :value="state.projects" class="text-sm" tableClass="w-full">
      <Column field="name" header="Projekt" class="w-[38%]">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.name }}</span>
        </template>
      </Column>

      <Column field="status" header="Status" class="w-[26%]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>

      <Column field="due" header="Fällig" class="w-[22%]">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.due }}</span>
        </template>
      </Column>

      <Column header="Aktionen" class="w-[14%]">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menuRef">
      <div class="flex flex-col gap-2 p-1 min-w-[170px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const menuRef = ref(null)

const state = reactive({
  selectedRowId: 2,
  projects: [
    { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', due: '15.04.2026' },
    { id: 2, name: 'Mobile App', status: 'In Prüfung', severity: 'warn', due: '24.04.2026' },
    { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', due: '09.05.2026' },
    { id: 4, name: 'API Migration', status: 'Gestoppt', severity: 'danger', due: '12.06.2026' }
  ]
})

const toggleMenu = (event, id) => {
  state.selectedRowId = id
  menuRef.value.toggle(event)
}
</script>