<template>
  <DataTable :value="projects">
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
      </template>
    </Column>
    <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
      <template #body>
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="actions-menu"
          @click="actionsMenu?.toggle"
        />
      </template>
    </Column>
  </DataTable>
  <Menu
    ref="actions-menu"
    id="actions-menu"
    :model="actionOptions"
    popup
    :pt="{
      list: 'flex flex-col !gap-2 !p-2.5',
    }"
  >
    <template #item="{ item }">
      <Button
        :label="item.label"
        :icon="item.icon"
        severity="secondary"
        outlined
        class="w-full !justify-start"
      />
    </template>
  </Menu>
  <Dialog
    v-model:visible="isEditProjektDialogVisible"
    header="Projekt bearbeiten"
    modal
    :pt="{
      root: 'w-full max-w-md',
      content: 'flex flex-col !gap-4',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name-input" class="text-sm">Name</label>
      <InputText v-model="name" type="text" input-id="name-input" />
    </div>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'
  import Dialog from 'primevue/dialog'
  import InputText from 'primevue/inputtext'

  const projects = ref([
    {
      name: 'Webseite Relaunch',
      status: 'Aktiv',
    },
  ])

  const isEditProjektDialogVisible = ref(true)
  const name = ref('Webseite Relaunch')

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    {
      label: 'Bearbeiten',
      icon: 'pi pi-pen-to-square',
      command: () => (isEditProjektDialogVisible.value = true),
    },
    {
      label: 'Löschen',
      icon: 'pi pi-trash',
    },
  ]

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'warn'
      case 'Abgeschlossen':
        return 'info'
      case 'Gestoppt':
        return 'danger'
    }
  }
</script>
