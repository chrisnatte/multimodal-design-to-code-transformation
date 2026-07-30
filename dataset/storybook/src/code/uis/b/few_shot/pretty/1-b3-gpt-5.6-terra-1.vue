<template>
  <div class="flex min-h-screen bg-white text-surface-900">
    <aside class="flex w-64 shrink-0 flex-col bg-surface-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="relative flex min-w-0 flex-1 flex-col px-8 py-4 lg:px-20">
      <div class="flex max-w-[1008px] flex-col gap-6">
        <header class="flex flex-col gap-1">
          <h1 class="m-0 text-3xl font-bold">Dashboard</h1>
          <p class="m-0 text-base">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="flex flex-wrap gap-5">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            class="w-48 bg-surface-100"
            :pt="{ body: '!p-[17.5px]', content: '!p-0' }"
          >
            <template #content>
              <div class="flex flex-col gap-[7px]">
                <div class="flex flex-col gap-[7px]">
                  <span class="text-2xl font-medium">{{ metric.value }}</span>
                  <span class="text-sm">{{ metric.label }}</span>
                </div>
                <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
              </div>
            </template>
          </Card>
        </section>

        <section class="flex flex-wrap items-start gap-4">
          <Accordion
            value="0"
            class="w-full max-w-[693px]"
            :pt="{ root: 'bg-surface-100 rounded-lg overflow-hidden' }"
          >
            <AccordionPanel value="0">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex flex-wrap gap-5 pb-4">
                  <div class="flex w-[268px] flex-col gap-2">
                    <label for="period">Zeitraum</label>
                    <DatePicker
                      v-model="dateRange"
                      input-id="period"
                      selection-mode="range"
                      placeholder="Zeitraum wählen"
                      date-format="dd.mm.yy"
                      show-icon
                      class="w-[216px]"
                    />
                    <DatePicker v-model="dateRange" selection-mode="range" inline />
                  </div>

                  <div class="flex w-[216px] flex-col gap-2">
                    <label for="status">Status</label>
                    <Select
                      v-model="selectedStatus"
                      input-id="status"
                      :options="statuses"
                      placeholder="Status auswählen"
                      class="w-full"
                    />
                    <div class="flex flex-col rounded-md border border-surface-200 bg-white">
                      <div class="p-2">
                        <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                      </div>
                      <div class="flex flex-col gap-0.5 p-1">
                        <Button
                          v-for="status in filteredStatuses"
                          :key="status"
                          :label="status"
                          severity="secondary"
                          text
                          class="!justify-start"
                          @click="selectedStatus = status"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-2">
                    <span>Zustand</span>
                    <div class="flex items-center gap-3 py-3">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="activeOnly" input-id="active-only" binary />
                        <label for="active-only">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="archived" input-id="archived" binary />
                        <label for="archived">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="flex w-48 flex-col gap-[14px]">
            <Button
              label="Exportieren"
              icon="pi pi-file-export"
              icon-pos="right"
              severity="primary"
              class="w-fit"
            />
            <div class="flex flex-col gap-2 rounded-md border border-surface-200 bg-white p-2.5">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
            </div>
          </div>
        </section>

        <DataTable
          :value="orders"
          class="w-full"
          table-style="min-width: 1008px"
          :pt="{
            headerCell: '!px-3.5 !py-2.5 text-sm font-semibold',
            bodyCell: '!px-3.5 !py-2.5 text-sm',
          }"
        >
          <Column field="product" header="Produkt" header-style="width: 384px" />
          <Column field="status" header="Status" header-style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="orderDate" header="Bestelldatum" header-style="width: 124px" />
          <Column field="amount" header="Summe" header-style="width: 124px" />
          <Column field="quantity" header="Stück" header-style="width: 124px" />
          <Column header="Aktionen" header-style="width: 92px">
            <template #body>
              <div class="flex justify-center">
                <Button icon="pi pi-ellipsis-h" severity="secondary" text aria-label="Aktionen anzeigen" />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="absolute bottom-10 right-10 flex w-[200px] flex-col gap-2 rounded-md border border-surface-200 bg-white p-2.5">
        <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateRange = ref<Date[] | null>(null)
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)

const statuses = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const filteredStatuses = computed(() =>
  statuses.filter((status) => status.toLowerCase().includes(statusSearch.value.toLowerCase())),
)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const orders = ref([
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    orderDate: '15.04.2026',
    amount: '12.400 €',
    quantity: '312',
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    orderDate: '24.04.2026',
    amount: '8.920 €',
    quantity: '485',
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    orderDate: '09.05.2026',
    amount: '6.100 €',
    quantity: '150',
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    orderDate: '12.06.2026',
    amount: '10.250 €',
    quantity: '2',
  },
])
</script>