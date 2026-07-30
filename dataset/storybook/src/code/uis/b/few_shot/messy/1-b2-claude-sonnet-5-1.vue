<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <h2 class="text-base mb-4">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          text
          :class="[
            'w-full !justify-start',
            item.active ? '!bg-emerald-100 !text-emerald-700 !border !border-emerald-300' : '!text-slate-600 !border !border-slate-400',
          ]"
        />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8 flex flex-col gap-6">
      <div>
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-3">
        <Card v-for="stat in stats" :key="stat.label" class="w-48 !bg-slate-50 !rounded-xl">
          <template #content>
            <div class="flex flex-col gap-1">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm text-gray-600">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit !mt-2" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-4">
        <!-- Filter Panel -->
        <Panel header="Filter" class="w-full max-w-3xl">
          <div class="flex gap-4">
            <div class="flex flex-col gap-2">
              <label for="zeitraum" class="text-sm">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                input-id="zeitraum"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="status" class="text-sm">Status</label>
              <MultiSelect
                v-model="selectedStatus"
                input-id="status"
                :options="statusOptions"
                filter
                placeholder="Status auswählen"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zustand</label>
              <SelectButton
                v-model="zustand"
                :options="zustandOptions"
                option-label="label"
                option-value="value"
              />
            </div>
          </div>
        </Panel>

        <!-- Export SplitButton -->
        <div class="flex flex-col gap-2">
          <SplitButton label="Exportieren" :model="exportOptions" severity="success" />
        </div>
      </div>

      <!-- Data table -->
      <DataTable :value="products">
        <Column field="name" header="Projekt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="orderDate" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="count" header="Stück" />
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

      <Menu ref="rowMenu" id="row-actions-menu" :model="rowActionOptions" popup />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Panel from 'primevue/panel'
  import DatePicker from 'primevue/datepicker'
  import MultiSelect from 'primevue/multiselect'
  import SelectButton from 'primevue/selectbutton'
  import SplitButton from 'primevue/splitbutton'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
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

  const dateRange = ref(null)
  const selectedStatus = ref(null)
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

  const zustand = ref('active')
  const zustandOptions = ref([
    { label: 'Aktiv', value: 'active' },
    { label: 'Archiv', value: 'archived' },
  ])

  const exportOptions = ref([
    { label: 'Als CSV exportieren', icon: 'pi pi-file' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ])

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', orderDate: '15.04.2026', total: '12.400 €', count: '312' },
    { name: 'Gadget Mini', status: 'In Bearbeitung', orderDate: '24.04.2026', total: '8.920 €', count: '485' },
    { name: 'Sensor X1', status: 'Versendet', orderDate: '09.05.2026', total: '6.100 €', count: '150' },
    { name: 'System V5', status: 'Bezahlt', orderDate: '12.06.2026', total: '10.250 €', count: '2' },
  ])

  const rowMenu = ref()
  const selectedRow = ref(null)
  const rowActionOptions = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])

  function toggleRowMenu(event: Event, data: unknown) {
    selectedRow.value = data
    rowMenu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Bezahlt':
        return 'contrast'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Angekommen':
        return 'success'
      default:
        return 'info'
    }
  }
</script>