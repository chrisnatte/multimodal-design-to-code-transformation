<template>
  <div class="p-8 max-w-4xl">
    <DataTable :value="projects" class="w-full">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body="{ index }">
          <Button
            :ref="el => setActionRef(el, index, 'button')"
            icon="pi pi-ellipsis-h"
            text
            rounded
            @click="toggleMenu($event, index)"
          />
          <Menu
            :ref="el => setActionRef(el, index, 'menu')"
            :model="menuItems"
            popup
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const projects = ref([
  { name: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', due: '15.04.2026' },
  { name: 'Mobile App', status: 'In Prüfung', severity: 'warning', due: '24.04.2026' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', due: '09.05.2026' },
  { name: 'API Migration', status: 'Gestoppt', severity: 'danger', due: '12.06.2026' }
])

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const actionRefs = ref([])

const setActionRef = (el, index, type) => {
  if (el) {
    if (!actionRefs.value[index]) {
      actionRefs.value[index] = {}
    }
    actionRefs.value[index][type] = el
  }
}

const toggleMenu = (event, index) => {
  actionRefs.value[index]?.menu?.toggle(event)
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      const row = actionRefs.value[1]
      if (row?.button) {
        row.button.$el.click()
      }
    }, 0)
  })
})
</script>