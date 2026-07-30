<template>
  <div class="flex min-h-screen bg-white">
    <div class="w-64 p-6 border-r border-surface-200">
      <h2 class="text-base font-semibold mb-4">Navigation</h2>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-th-large" severity="success" outlined class="!justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" class="!justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="outlined" class="!justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" class="!justify-start" />
      </div>
    </div>

    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold mb-1">Dashboard</h1>
      <p class="text-surface-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold mb-1">42.8 Tsd.</div>
            <div class="text-surface-500 text-sm mb-2">Umsatz in €</div>
            <Tag value="+12 %" severity="success" />
          </template>
        </Card>
        <Card :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold mb-1">1.247</div>
            <div class="text-surface-500 text-sm mb-2">Bestellungen</div>
            <Tag value="+8 %" severity="success" />
          </template>
        </Card>
        <Card :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold mb-1">3.891</div>
            <div class="text-surface-500 text-sm mb-2">Nutzer</div>
            <Tag value="+2 %" severity="danger" />
          </template>
        </Card>
        <Card :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold mb-1">89</div>
            <div class="text-surface-500 text-sm mb-2">Retouren</div>
            <Tag value="+23 %" severity="danger" />
          </template>
        </Card>
      </div>

      <div class="flex gap-4 mb-6 items-start">
        <Card class="flex-1" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="flex items-center justify-between mb-4">
              <span class="font-medium">Filter</span>
              <i class="pi pi-chevron-down"></i>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" inline />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Status</label>
                <Select
                  v-model="status"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  filter
                  class="w-full"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zustand</label>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="aktiv" input-id="aktiv" binary />
                    <label for="aktiv">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiv" input-id="archiv" binary />
                    <label for="archiv">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-4">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="success" />
          <Card :pt="{ body: '!p-3', content: '!p-0' }">
            <template #content>
              <div class="flex flex-col gap-2 w-48">
                <Button label="Als CSV exportieren" severity="secondary" outlined />
                <Button label="Als PDF exportieren" severity="secondary" outlined />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <DataTable :value="orders">
        <Column field="product" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              @click="toggleMenu($event, data)"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsMenu">
        <div class="flex flex-col gap-2 w-52">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list" severity="secondary" outlined class="!justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Popover from 'primevue/popover'

  const dateRange = ref(null)
  const status = ref(null)
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const aktiv = ref(true)
  const archiv = ref(false)

  const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
    { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
    { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
    { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 },
  ])

  const actionsMenu = ref()
  function toggleMenu(event) {
    actionsMenu.value.toggle(event)
  }

  function getStatusSeverity(status) {
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
        return null
    }
  }
</script>