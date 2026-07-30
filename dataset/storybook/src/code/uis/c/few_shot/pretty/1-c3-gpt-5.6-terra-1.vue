<template>
  <div class="min-h-screen bg-[#f3f7fb] p-6 text-[#34445e]">
    <div class="flex gap-14">
      <aside class="w-52 shrink-0">
        <div class="mb-6 text-sm">Navigation</div>
        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            severity="success"
            outlined
            class="!h-8 !justify-start !border-emerald-200 !bg-emerald-100 !px-2 !text-xs"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="!h-8 !justify-start !px-2 !text-xs"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            outlined
            class="!h-8 !justify-start !px-2 !text-xs"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="!h-8 !justify-start !px-2 !text-xs"
          />
        </nav>
      </aside>

      <main class="w-[1008px]">
        <header class="mb-5">
          <h1 class="m-0 text-[32px] font-semibold leading-9">Dashboard</h1>
          <p class="m-0 mt-1 text-base text-[#687b99]">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-6 flex gap-5">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            :pt="{ root: 'w-[193px] !bg-[#edf3f8] !shadow-sm', body: '!p-5', content: '!p-0' }"
          >
            <template #content>
              <div class="text-2xl font-medium">{{ metric.value }}</div>
              <div class="mt-1 text-sm text-[#687b99]">{{ metric.label }}</div>
              <Tag :value="metric.change" :severity="metric.severity" class="mt-2 !text-xs" />
            </template>
          </Card>
        </section>

        <section class="mb-6 flex items-start gap-4">
          <Card
            :pt="{
              root: 'h-[394px] w-[694px] !bg-[#edf3f8] !shadow-none',
              body: '!p-4',
              content: '!p-0',
            }"
          >
            <template #content>
              <div class="mb-4 text-sm font-semibold">Filter</div>
              <div class="flex gap-[72px]">
                <div class="w-[216px]">
                  <label class="mb-2 block text-sm">Zeitraum</label>
                  <DatePicker
                    v-model="selectedDate"
                    placeholder="Zeitraum wählen"
                    class="w-full"
                    input-class="!h-[34px] !text-sm"
                  />
                  <Card
                    :pt="{
                      root: 'absolute z-10 mt-0 w-[270px] !shadow-md',
                      body: '!p-3',
                      content: '!p-0',
                    }"
                  >
                    <template #content>
                      <DatePicker v-model="calendarDate" inline class="w-full" />
                    </template>
                  </Card>
                </div>

                <div class="w-[216px]">
                  <label class="mb-2 block text-sm">Status</label>
                  <Select
                    v-model="status"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    option-label="label"
                    class="w-full"
                    :pt="{ root: '!h-[34px]', label: '!py-1.5 !text-sm' }"
                  />
                  <Card
                    :pt="{
                      root: 'absolute z-10 mt-0 w-[216px] !shadow-md',
                      body: '!p-2.5',
                      content: '!p-0',
                    }"
                  >
                    <template #content>
                      <InputText placeholder="Suche..." class="mb-1 h-[32px] w-full !text-sm" />
                      <div
                        v-for="option in statusOptions"
                        :key="option.label"
                        class="rounded px-1 py-2 text-sm first:bg-[#edf3f8]"
                      >
                        {{ option.label }}
                      </div>
                    </template>
                  </Card>
                </div>

                <div class="w-[140px]">
                  <label class="mb-3 block text-sm">Zustand</label>
                  <div class="flex items-center gap-3 text-sm">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="activeOnly" input-id="aktiv" binary />
                      <label for="aktiv">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archived" input-id="archiv" binary />
                      <label for="archiv">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <div class="relative">
            <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" size="small" />
            <Card
              :pt="{
                root: 'absolute left-0 top-12 z-10 w-48 !shadow-md',
                body: '!p-2.5',
                content: '!p-0',
              }"
            >
              <template #content>
                <div class="flex flex-col gap-2">
                  <Button
                    label="Als CSV exportieren"
                    severity="secondary"
                    outlined
                    size="small"
                    class="!justify-start !text-xs"
                  />
                  <Button
                    label="Als PDF exportieren"
                    severity="secondary"
                    outlined
                    size="small"
                    class="!justify-start !text-xs"
                  />
                </div>
              </template>
            </Card>
          </div>
        </section>

        <section class="relative">
          <DataTable
            :value="orders"
            size="small"
            :pt="{
              root: '!bg-transparent',
              table: '!text-sm',
              headerCell: '!bg-transparent !px-4 !py-3 !text-sm !font-semibold',
              bodyCell: '!bg-transparent !px-4 !py-3',
            }"
          >
            <Column field="product" header="Produkt" header-class="w-[38%]" />
            <Column header="Status" header-class="w-[16%]">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[13%]" />
            <Column field="amount" header="Summe" header-class="w-[12%]" />
            <Column field="quantity" header="Stück" header-class="w-[11%]" />
            <Column header="Aktionen" header-class="w-[10%]">
              <template #body="{ index }">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  size="small"
                  :class="index === 2 ? '!bg-[#edf3f8]' : ''"
                />
              </template>
            </Column>
          </DataTable>

          <Card
            :pt="{
              root: 'absolute right-[-136px] top-[173px] z-10 w-[200px] !shadow-md',
              body: '!p-3',
              content: '!p-0',
            }"
          >
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined size="small" class="!justify-start !text-xs" />
                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined size="small" class="!justify-start !text-xs" />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined size="small" class="!justify-start !text-xs" />
              </div>
            </template>
          </Card>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const selectedDate = ref<Date | null>(null)
const calendarDate = ref(new Date(2024, 6, 1))
const status = ref(null)
const activeOnly = ref(true)
const archived = ref(false)

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
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
]
</script>