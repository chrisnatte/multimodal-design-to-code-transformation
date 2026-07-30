<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" rounded text class="!h-[50px] !w-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Projektaufgaben</h1>
        <span class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" class="w-fit">
      <template #item="{ item }">
        <span class="flex items-center gap-2">
          <i v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <div class="flex gap-4">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" placeholder="Suche..." input-id="search-input" />
      </IconField>
      <Select v-model="statusFilter" :options="statusOptions" option-label="label" option-value="value" placeholder="Status auswählen" input-id="status-select" class="w-[216px]" />
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="responsible" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.responsible.charAt(0)" shape="circle" />
            <span>{{ data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-full" />
            <span class="text-sm whitespace-nowrap">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            :aria-controls="'actions-menu-' + data.id"
            @click="(event) => toggleMenu(event, data.id)"
          />
          <Menu
            :ref="(el) => setMenuRef(el, data.id)"
            :id="'actions-menu-' + data.id"
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
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Breadcrumb from 'primevue/breadcrumb'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
  import Menu from 'primevue/menu'

  const search = ref('')
  const statusFilter = ref(null)
  const statusOptions = [
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ]

  const breadcrumbItems = ref([
    { icon: 'pi pi-home' },
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ])

  const selectedTasks = ref([])
  const tasks = ref([
    { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026' },
    { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
    { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026' },
    { id: 4, name: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026' },
  ])

  const menuRefs = ref<Record<number, any>>({})

  function setMenuRef(el: any, id: number) {
    if (el) menuRefs.value[id] = el
  }

  function toggleMenu(event: Event, id: number) {
    menuRefs.value[id]?.toggle(event)
  }

  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Fertig':
        return 'success'
      case 'In Arbeit':
        return 'warn'
      case 'Offen':
        return 'info'
      case 'Blockiert':
        return 'danger'
    }
  }
</script>