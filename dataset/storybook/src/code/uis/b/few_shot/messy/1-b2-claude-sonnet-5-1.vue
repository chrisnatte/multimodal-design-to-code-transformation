<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-100 p-6">
      <h2 class="mb-6 text-base">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-home" severity="success" class="w-full !justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" text class="w-full !justify-start" />
        <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" text class="w-full !justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" text class="w-full !justify-start" />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <div class="mb-6 flex items-start justify-between">
        <div>
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <p class="mt-2 text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div class="relative">
          <Button label="Exportieren" icon="pi pi-download" severity="success" @click="exportMenu?.toggle" />
          <Menu ref="export-menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Stat cards -->
      <div class="mb-6 flex gap-4">
        <div v-for="stat in stats" :key="stat.label" class="w-48 rounded-xl bg-slate-100 p-4">
          <div class="mb-2">
            <p class="text-2xl font-medium">{{ stat.value }}</p>
            <p class="text-sm text-gray-600">{{ stat.label }}</p>
          </div>
          <Tag :value="stat.change" severity="success" />
        </div>
      </div>

      <!-- Filter panel -->
      <div class="mb-6 w-full max-w-3xl rounded-lg bg-slate-100">
        <div class="rounded-t-lg border-b border-slate-200 px-4 py-3">
          <span class="text-sm font-semibold">Filter</span>
        </div>
        <div class="flex flex-wrap gap-6 p-4">
          <div class="flex w-56 flex-col gap-2">
            <label class="text-sm">Zeitraum</label>
            <Calendar v-model="dateRange" placeholder="Zeitraum wählen" selection-mode="range" show-icon class="w-full" />
          </div>
          <div class="flex w-56 flex-col gap-2">
            <label class="text-sm">Status</label>
            <MultiSelect v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" filter class="w-full" />
          </div>
          <div class="flex w-36 flex-col gap-2">
            <label class="text-sm">Zustand</label>
            <SelectButton v-model="selectedZustand" :options="zustandOptions" option-label="label" option-value="value" />
          </div>
        </div>
      </div>

      <!-- Data table -->
      <DataTable :value="projects" class="max-w-4xl">
        <Column field="product" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="orderDate" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="relative">
              <Button icon="pi pi-ellipsis-h" severity="secondary" rounded text @click="(e) => toggleRowMenu(e, data)" />
            </div>
          </template>
        </Column>
      </DataTable>

      <Menu ref="row-menu" :model="rowActionOptions" popup>
        <template #item="{ item }">
          <div class="flex items-center gap-2 px-2 py-1">
            <i :class="item.icon" />
            <span>{{ item.label }}</span>
          </div>
        </template>
      </Menu>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'
  import Tag from 'primevue/tag'
  import Calendar from 'primevue/calendar'
  import MultiSelect from 'primevue/multiselect'
  import SelectButton from 'primevue/selectbutton'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [
    { label: 'Als CSV exportieren', icon: 'pi pi-file' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ]

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %' },
    { label: 'Nutzer', value: '3.891', change: '+2 %' },
    { label: 'Retouren', value: '89', change: '+23 %' },
  ])

  const dateRange = ref()
  const selectedStatus = ref([])
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const selectedZustand = ref('active')
  const zustandOptions = ref([
    { label: 'Aktiv', value: 'active' },
    { label: 'Archiv', value: 'archive' },
  ])

  const projects = ref([
    { product: 'Widget Pro', status: 'Angekommen', orderDate: '15.04.2026', total: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', orderDate: '24.04.2026', total: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', orderDate: '09.05.2026', total: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', orderDate: '12.06.2026', total: '10.250 €', quantity: '2' },
  ])

  const rowMenu = useTemplateRef('row-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleRowMenu(event: Event, data: any) {
    rowMenu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Angekommen':
        return 'success'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Bezahlt':
        return 'info'
      default:
        return 'secondary'
    }
  }
</script>