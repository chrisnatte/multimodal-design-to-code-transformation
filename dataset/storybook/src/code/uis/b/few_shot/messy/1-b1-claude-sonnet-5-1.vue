<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <h2 class="mb-4 text-base font-normal text-gray-700">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          text
          :class="[
            'w-full !justify-start',
            item.active ? '!bg-emerald-100 !text-emerald-700 !border !border-emerald-200' : '!text-slate-600',
          ]"
        />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="mb-6 flex gap-4">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          :pt="{ body: '!p-4', content: '!p-0' }"
          class="w-48 !rounded-xl bg-slate-50"
        >
          <template #content>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col">
                <span class="text-2xl font-medium">{{ stat.value }}</span>
                <span class="text-sm text-gray-600">{{ stat.label }}</span>
              </div>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit !rounded-md" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-4">
        <!-- Filter Panel -->
        <div class="w-[692px] rounded-lg bg-slate-50">
          <div class="flex items-center justify-between border-b border-slate-200 rounded-t-lg px-4 py-3">
            <span class="text-sm font-semibold">Filter</span>
            <i class="pi pi-chevron-up text-sm" />
          </div>
          <div class="flex gap-4 p-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                class="w-full"
                input-class="!border-emerald-500"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                class="w-full"
                input-class="!border-emerald-500"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zustand</label>
              <div class="flex gap-2">
                <ToggleButton
                  v-model="isActive"
                  on-label="Aktiv"
                  off-label="Aktiv"
                  on-icon="pi pi-check"
                />
                <ToggleButton
                  v-model="isArchived"
                  on-label="Archiv"
                  off-label="Archiv"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Export -->
        <div class="w-48">
          <Button
            label="Exportieren"
            icon="pi pi-download"
            icon-pos="right"
            severity="success"
            class="w-full !rounded-md"
            @click="exportMenu?.toggle"
          />
          <Menu
            ref="export-menu"
            :model="exportOptions"
            popup
            class="mt-2 w-full"
          />
        </div>
      </div>

      <!-- Data Table -->
      <div class="mt-6">
        <DataTable :value="projects">
          <Column field="name" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" class="!rounded-md" />
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
                @click="(e) => toggleRowMenu(e, data)"
              />
            </template>
          </Column>
        </DataTable>
      </div>

      <!-- Row Actions Menu -->
      <Menu
        ref="row-actions-menu"
        id="row-actions-menu"
        :model="rowActionOptions"
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
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import ToggleButton from 'primevue/togglebutton'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

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

  const dateRange = ref<Date[]>([])
  const selectedStatus = ref(null)
  const statusOptions = ref(['Angekommen', 'In Bearbeitung', 'Versendet', 'Bezahlt'])
  const isActive = ref(true)
  const isArchived = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [
    { label: 'Als CSV exportieren', icon: 'pi pi-file' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ]

  const projects = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2' },
  ])

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleRowMenu(event: Event, data: unknown) {
    rowActionsMenu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Bezahlt':
        return 'success'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'info'
      case 'Angekommen':
        return 'success'
      default:
        return 'secondary'
    }
  }
</script>