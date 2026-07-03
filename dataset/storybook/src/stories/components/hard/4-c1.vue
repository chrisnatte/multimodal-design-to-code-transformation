<template>
  <div class="p-8 bg-surface-0 min-h-screen flex items-start justify-center">
    <Card class="w-full max-w-4xl shadow-none border border-surface-200">
      <template #content>
        <div class="flex flex-col">
          <DataTable :value="state.projects" class="w-full" tableStyle="min-width: 100%">
            <Column field="name" header="Projekt">
              <template #body="{ data }">
                <span class="text-surface-700">{{ data.name }}</span>
              </template>
            </Column>

            <Column field="status" header="Status">
              <template #body="{ data }">
                <Tag
                  :value="data.status"
                  :severity="data.severity"
                  :pt="{
                    root: {
                      class: 'rounded-md px-3 py-1 text-sm font-semibold'
                    }
                  }"
                />
              </template>
            </Column>

            <Column field="dueDate" header="Fällig">
              <template #body="{ data }">
                <span class="text-surface-700">{{ data.dueDate }}</span>
              </template>
            </Column>

            <Column header="Aktionen" style="width: 90px">
              <template #body="{ data }">
                <div class="flex justify-center">
                  <Button
                    icon="pi pi-ellipsis-h"
                    text
                    rounded
                    aria-label="Aktionen"
                    @click="toggleMenu($event, data)"
                  />
                </div>
              </template>
            </Column>
          </DataTable>
        </div>

        <OverlayPanel ref="op" class="w-48">
          <div class="flex flex-col gap-2 p-1">
            <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined class="justify-start" />
            <Button label="Duplizieren" icon="pi pi-copy" outlined class="justify-start" />
            <Button label="Löschen" icon="pi pi-trash" outlined class="justify-start" />
          </div>
        </OverlayPanel>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import OverlayPanel from 'primevue/overlaypanel'

const op = ref()

const state = reactive({
  selectedProject: null,
  projects: [
    { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026', severity: 'success' },
    { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026', severity: 'warn' },
    { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026', severity: 'secondary' },
    { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026', severity: 'danger' }
  ]
})

const toggleMenu = (event, project) => {
  state.selectedProject = project
  op.value.toggle(event)
}
</script>