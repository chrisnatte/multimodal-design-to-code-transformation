<template>
  <div class="flex min-h-screen bg-gray-50">
    <aside class="w-64 bg-gray-50 p-6">
      <h2 class="mb-4 text-sm font-medium text-slate-700">Navigation</h2>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-th-large" severity="success" outlined class="!justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" text />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" text />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" text />
      </div>
    </aside>

    <main class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
      <p class="mt-1 text-slate-500">Bekomme eine Übersicht über die Projekte.</p>

      <div class="mt-6 grid grid-cols-4 gap-4">
        <Card v-for="stat in stats" :key="stat.label" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">{{ stat.value }}</div>
            <div class="mt-1 text-sm text-slate-500">{{ stat.label }}</div>
            <Tag :value="stat.change" :severity="stat.severity" class="mt-2" />
          </template>
        </Card>
      </div>

      <div class="mt-6 flex items-start gap-4">
        <Card class="flex-1" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="flex items-center justify-between">
              <span class="font-medium text-slate-700">Filter</span>
              <i class="pi pi-chevron-down text-slate-500"></i>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-600">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" inline />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-600">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  filter
                  filter-placeholder="Suche..."
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-600">Zustand</label>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="aktiv" binary input-id="aktiv" />
                    <label for="aktiv">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiv" binary input-id="archiv" />
                    <label for="archiv">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            severity="success"
            aria-haspopup="true"
            aria-controls="export-menu"
            @click="exportMenu?.toggle"
          />
          <Menu
            ref="export-menu"
            id="export-menu"
            :model="exportOptions"
            popup
            :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
          >
            <template #item="{ item }">
              <Button :label="item.label" severity="secondary" outlined class="w-full !justify-start" />
            </template>
          </Menu>
        </div>
      </div>

      <DataTable :value="products" class="mt-6">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen" header-class="w-20" body-class="w-20">
          <template #body="{ index }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              :aria-controls="`row-menu-${index}`"
              @click="(e) => toggleRowMenu(e, index)"
            />
          </template>
        </Column>
      </DataTable>
      <Menu
        ref="row-menu"
        :model="rowActionOptions"
        popup
        :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
      >
        <template #item="{ item }">
          <Button :label="item.label" :icon="item.icon" severity="secondary" outlined class="w-full !justify-start" />
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
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = [
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'danger' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ]

  const dateRange = ref(null)
  const selectedStatus = ref(null)
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const aktiv = ref(true)
  const archiv = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const products = ref([
    { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
    { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
    { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
    { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 },
  ])

  const rowMenu = useTemplateRef('row-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleRowMenu(event: Event, index: number) {
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
    }
  }
</script>