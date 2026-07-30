<template>
  <div class="flex min-h-screen bg-white">
    <aside class="flex w-64 flex-col gap-6 bg-slate-100 p-6">
      <span class="text-base">Navigation</span>
      <nav class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          severity="primary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </nav>
    </aside>

    <main class="relative flex-1 p-8">
      <div class="flex max-w-5xl flex-col gap-6">
        <header class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <p class="text-base">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="flex flex-wrap items-center gap-5">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            class="w-48 bg-slate-100"
            :pt="{ body: 'p-4', content: 'p-0' }"
          >
            <template #content>
              <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-1">
                  <span class="text-2xl font-medium">{{ metric.value }}</span>
                  <span class="text-sm">{{ metric.label }}</span>
                </div>
                <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
              </div>
            </template>
          </Card>
        </section>

        <section class="flex items-start gap-4">
          <Accordion v-model:value="openFilter" class="w-[693px]">
            <AccordionPanel value="filter">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex items-start gap-5">
                  <div class="flex w-[268px] flex-col gap-2">
                    <label for="period">Zeitraum</label>
                    <DatePicker
                      v-model="period"
                      input-id="period"
                      selection-mode="range"
                      placeholder="Zeitraum wählen"
                      show-icon
                    />
                    <DatePicker v-model="period" selection-mode="range" inline />
                  </div>

                  <div class="flex w-[216px] flex-col gap-2">
                    <label for="status">Status</label>
                    <Select
                      v-model="selectedStatus"
                      input-id="status"
                      :options="statusOptions"
                      option-label="label"
                      placeholder="Status auswählen"
                    />
                    <Listbox
                      v-model="selectedStatus"
                      :options="statusOptions"
                      option-label="label"
                      filter
                      filter-placeholder="Suche..."
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="mb-1">Zustand</label>
                    <div class="flex items-center gap-3 py-3">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="activeOnly" input-id="active" binary />
                        <label for="active">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="includeArchive" input-id="archive" binary />
                        <label for="archive">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="flex w-48 flex-col gap-4">
            <Button
              label="Exportieren"
              icon="pi pi-file-export"
              icon-pos="right"
              class="w-fit"
            />
            <Card :pt="{ body: 'p-2.5', content: 'p-0' }">
              <template #content>
                <div class="flex flex-col gap-2">
                  <Button
                    label="Als CSV exportieren"
                    severity="secondary"
                    outlined
                    class="w-full"
                  />
                  <Button
                    label="Als PDF exportieren"
                    severity="secondary"
                    outlined
                    class="w-full"
                  />
                </div>
              </template>
            </Card>
          </div>
        </section>

        <section class="relative pt-0">
          <DataTable :value="orders" class="w-[1008px]">
            <Column field="product" header="Produkt" header-class="w-[384px]" />
            <Column header="Status" header-class="w-40">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" />
              </template>
            </Column>
            <Column field="orderDate" header="Bestelldatum" header-class="w-[124px]" />
            <Column field="amount" header="Summe" header-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]">
              <template #body="{ index }">
                <Button
                  icon="pi pi-ellipsis-h"
                  :severity="index === 0 ? 'primary' : 'secondary'"
                  text
                  aria-label="Aktionen"
                />
              </template>
            </Column>
          </DataTable>

          <Card class="absolute -right-36 -bottom-24 w-50" :pt="{ body: 'p-2.5', content: 'p-0' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button
                  label="Bearbeiten"
                  icon="pi pi-pencil"
                  severity="secondary"
                  outlined
                  class="w-full !justify-start"
                />
                <Button
                  label="Status aktualisieren"
                  icon="pi pi-list-check"
                  severity="secondary"
                  outlined
                  class="w-full !justify-start"
                />
                <Button
                  label="Löschen"
                  icon="pi pi-trash"
                  severity="secondary"
                  outlined
                  class="w-full !justify-start"
                />
              </div>
            </template>
          </Card>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const openFilter = ref('filter')
const period = ref<Date[] | null>(null)
const selectedStatus = ref<{ label: string } | null>(null)
const activeOnly = ref(true)
const includeArchive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const orders = [
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    orderDate: '15.04.2026',
    amount: '12.400 €',
    quantity: '312'
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    orderDate: '24.04.2026',
    amount: '8.920 €',
    quantity: '485'
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    orderDate: '09.05.2026',
    amount: '6.100 €',
    quantity: '150'
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    orderDate: '12.06.2026',
    amount: '10.250 €',
    quantity: '2'
  }
]
</script>