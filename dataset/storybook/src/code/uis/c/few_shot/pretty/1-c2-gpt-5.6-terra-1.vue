<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="flex w-64 flex-col gap-5 bg-slate-100 p-6">
      <span class="text-sm font-medium">Navigation</span>

      <nav class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          severity="success"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
      </nav>
    </aside>

    <main class="w-full max-w-7xl px-14 py-5">
      <header class="mb-5">
        <h1 class="text-3xl font-bold text-slate-700">Dashboard</h1>
        <p class="mt-1 text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-4">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-slate-50"
          :pt="{ body: '!p-4', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-1">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm text-slate-500">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="mt-1 w-fit text-xs" />
            </div>
          </template>
        </Card>
      </section>

      <section class="relative mb-6 flex items-start gap-4">
        <Card
          class="w-[694px] bg-slate-50"
          :pt="{ body: '!p-4', content: '!p-0' }"
        >
          <template #content>
            <div class="flex items-start justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="mt-4 flex gap-18">
              <div class="relative flex w-72 flex-col gap-1">
                <label for="date-filter" class="text-sm">Zeitraum</label>
                <InputText
                  id="date-filter"
                  v-model="dateFilter"
                  placeholder="Zeitraum wählen"
                  class="w-full"
                />
                <DatePicker
                  v-model="selectedDate"
                  inline
                  class="absolute top-[56px] z-10 shadow-md"
                />
              </div>

              <div class="relative flex w-64 flex-col gap-1">
                <label for="status-filter" class="text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  input-id="status-filter"
                  :options="statuses"
                  placeholder="Status auswählen"
                  class="w-full"
                />
                <Listbox
                  v-model="selectedStatus"
                  :options="statuses"
                  filter
                  filter-placeholder="Suche..."
                  class="absolute top-[56px] z-10 w-full shadow-md"
                />
              </div>

              <div class="flex flex-col gap-3">
                <span class="text-sm">Zustand</span>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active-filter" binary />
                    <label for="active-filter" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archivedOnly" input-id="archived-filter" binary />
                    <label for="archived-filter" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div ref="exportAnchor" class="pt-0">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            icon-pos="right"
            severity="success"
            size="small"
            @click="exportPopover?.toggle($event)"
          />
        </div>

        <Popover ref="exportPopover" :dismissable="false">
          <div class="flex w-44 flex-col gap-2">
            <Button
              label="Als CSV exportieren"
              severity="secondary"
              variant="outlined"
              size="small"
              class="!justify-start"
            />
            <Button
              label="Als PDF exportieren"
              severity="secondary"
              variant="outlined"
              size="small"
              class="!justify-start"
            />
          </div>
        </Popover>
      </section>

      <section class="w-[1010px]">
        <DataTable
          :value="orders"
          table-style="min-width: 100%"
          :pt="{
            headerCell: '!bg-white !px-4 !py-3 text-sm',
            bodyCell: '!px-4 !py-3 text-sm',
          }"
        >
          <Column field="product" header="Produkt" class="w-[38%]" />
          <Column header="Status" class="w-[16%]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="text-xs" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="w-[12%]" />
          <Column field="amount" header="Summe" class="w-[12%]" />
          <Column field="quantity" header="Stück" class="w-[12%]" />
          <Column header="Aktionen" class="w-[10%]">
            <template #body="{ index }">
              <div
                v-if="index === 3"
                ref="actionAnchor"
                class="flex justify-center"
              >
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  variant="text"
                  size="small"
                  aria-label="Aktionen"
                  @click="actionPopover?.toggle($event)"
                />
              </div>
              <Button
                v-else
                icon="pi pi-ellipsis-h"
                :severity="index === 0 ? 'success' : 'secondary'"
                variant="text"
                size="small"
                aria-label="Aktionen"
              />
            </template>
          </Column>
        </DataTable>

        <Popover ref="actionPopover" :dismissable="false">
          <div class="flex w-44 flex-col gap-2">
            <Button
              label="Bearbeiten"
              icon="pi pi-pen-to-square"
              severity="secondary"
              variant="outlined"
              size="small"
              class="!justify-start"
            />
            <Button
              label="Status aktualisieren"
              icon="pi pi-list-check"
              severity="secondary"
              variant="outlined"
              size="small"
              class="!justify-start"
            />
            <Button
              label="Löschen"
              icon="pi pi-trash"
              severity="secondary"
              variant="outlined"
              size="small"
              class="!justify-start"
            />
          </div>
        </Popover>
      </section>
    </main>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateFilter = ref('')
const selectedDate = ref(null)
const selectedStatus = ref(null)
const activeOnly = ref(true)
const archivedOnly = ref(false)
const exportPopover = ref()
const actionPopover = ref()
const exportAnchor = ref()
const actionAnchor = ref()

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
])

const orders = ref([
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    date: '15.04.2026',
    amount: '12.400 €',
    quantity: '312',
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    date: '24.04.2026',
    amount: '8.920 €',
    quantity: '485',
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    date: '09.05.2026',
    amount: '6.100 €',
    quantity: '150',
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    date: '12.06.2026',
    amount: '10.250 €',
    quantity: '2',
  },
])

onMounted(async () => {
  await nextTick()

  if (exportAnchor.value) {
    exportPopover.value?.show({ currentTarget: exportAnchor.value, target: exportAnchor.value })
  }

  if (actionAnchor.value) {
    actionPopover.value?.show({ currentTarget: actionAnchor.value, target: actionAnchor.value })
  }
})
</script>