<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-100 p-6">
      <span class="text-base text-slate-700">Navigation</span>
      <nav class="mt-6 flex flex-col gap-2">
        <Button
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          text
          :class="[
            'w-full !justify-start',
            item.active ? '!bg-emerald-100 !text-emerald-700 !border !border-emerald-300' : '!text-slate-600',
          ]"
        />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <!-- Stat Cards -->
      <div class="mt-6 flex gap-4">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          :pt="{ root: 'w-48 !bg-slate-100 !shadow-none', body: '!p-4', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col">
                <span class="text-2xl font-medium">{{ stat.value }}</span>
                <span class="text-sm text-slate-600">{{ stat.label }}</span>
              </div>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit" rounded />
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-6 flex gap-4">
        <!-- Filter Panel -->
        <Panel header="Filter" class="w-[692px]" :pt="{ content: '!p-4' }">
          <div class="flex gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                input-class="border-emerald-500"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                option-label="label"
                placeholder="Status auswählen"
                filter
                class="w-56"
                input-class="border-emerald-500"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zustand</label>
              <SelectButton v-model="selectedCondition" :options="conditionOptions" option-label="label" />
            </div>
          </div>
        </Panel>

        <!-- Export -->
        <div class="flex flex-col gap-2">
          <SplitButton
            label="Exportieren"
            :model="exportOptions"
            severity="success"
            @click="exportData('csv')"
          />
        </div>
      </div>

      <!-- Data table -->
      <div class="relative mt-6 w-[1008px]">
        <DataTable :value="projects">
          <Column field="name" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" rounded />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" />
          <Column field="total" header="Summe" />
          <Column field="quantity" header="Stück" />
          <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                aria-haspopup="true"
                aria-controls="row-actions-menu"
                @click="toggleActionsMenu($event, data)"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          id="row-actions-menu"
          ref="actionsMenuRef"
          :model="rowActionOptions"
          popup
          :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
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
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Panel from 'primevue/panel'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import SelectButton from 'primevue/selectbutton'
  import SplitButton from 'primevue/splitbutton'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'
  import Menu from 'primevue/menu'

  const navItems = ref([
    { label: 'Dashboard', icon: 'pi pi-home', active: true },
    { label: 'Kunden', icon: 'pi pi-users', active: false },
    { label: 'Berichte', icon: 'pi pi-chart-bar', active: false },
    { label: 'Einstellungen', icon: 'pi pi-cog', active: false },
  ])

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const selectedStatus = ref()
  const statusOptions = ref([
    { label: 'Bezahlt' },
    { label: 'In Bearbeitung' },
    { label: 'Versendet' },
    { label: 'Angekommen' },
  ])

  const selectedCondition = ref('Aktiv')
  const conditionOptions = ref([{ label: 'Aktiv' }, { label: 'Archiv' }])

  const exportOptions = ref([
    { label: 'Als CSV exportieren', command: () => exportData('csv') },
    { label: 'Als PDF exportieren', command: () => exportData('pdf') },
  ])

  function exportData(type: string) {
    console.log('export', type)
  }

  const projects = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 },
  ])

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Bezahlt':
        return 'info'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Angekommen':
        return 'success'
      default:
        return 'secondary'
    }
  }

  const actionsMenuRef = useTemplateRef('actionsMenuRef')
  const selectedRow = ref()

  function toggleActionsMenu(event: Event, data: any) {
    selectedRow.value = data
    actionsMenuRef.value?.toggle(event)
  }

  const rowActionOptions = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])
</script>