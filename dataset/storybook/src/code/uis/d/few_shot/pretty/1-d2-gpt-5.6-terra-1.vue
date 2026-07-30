<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            severity="success"
            variant="outlined"
            class="w-full !justify-start"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            variant="outlined"
            class="w-full !justify-start"
          />
        </nav>
      </div>
    </aside>

    <main class="w-full px-8 py-4">
      <div class="max-w-[1008px]">
        <header class="mb-5 flex flex-col gap-1">
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-6 flex gap-5">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            class="w-48 !bg-slate-100 !shadow-none"
            :pt="{ body: '!p-[18px]', content: '!p-0' }"
          >
            <template #content>
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium">{{ metric.value }}</span>
                <span class="text-sm text-slate-500">{{ metric.label }}</span>
                <Tag :value="metric.change" :severity="metric.severity" class="w-fit !text-xs" />
              </div>
            </template>
          </Card>
        </section>

        <section class="mb-6 flex items-start gap-4">
          <Accordion value="0" class="w-[693px]">
            <AccordionPanel value="0">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex gap-5 pb-4">
                  <div class="flex w-[268px] flex-col gap-2">
                    <label for="period">Zeitraum</label>
                    <InputText
                      id="period"
                      v-model="periodText"
                      placeholder="Zeitraum wählen"
                      class="w-[216px]"
                    />
                    <DatePicker v-model="selectedDate" inline />
                  </div>

                  <div class="flex w-[216px] flex-col gap-2">
                    <label for="status">Status</label>
                    <Select
                      id="status"
                      v-model="selectedStatus"
                      :options="statuses"
                      placeholder="Status auswählen"
                      class="w-[216px]"
                    />
                    <div class="rounded-md border border-slate-200 bg-white p-1 shadow-md">
                      <div class="relative mb-1">
                        <InputText
                          v-model="statusSearch"
                          placeholder="Suche..."
                          class="w-full pr-8"
                        />
                        <i class="pi pi-search absolute right-3 top-3 text-sm text-slate-400" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <Button
                          v-for="status in filteredStatuses"
                          :key="status"
                          :label="status"
                          severity="secondary"
                          variant="text"
                          class="w-full !justify-start !px-2 !py-2 !font-normal"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-2">
                    <label>Zustand</label>
                    <div class="flex items-center gap-3 pt-2">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="activeOnly" input-id="active" binary />
                        <label for="active">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="archived" input-id="archive" binary />
                        <label for="archive">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="flex flex-col gap-[14px]">
            <Button
              ref="exportButton"
              label="Exportieren"
              icon="pi pi-file-export"
              icon-pos="right"
              severity="success"
              @click="toggleExport"
            />
            <div class="w-48 rounded-md border border-slate-200 bg-white p-3 shadow-md">
              <div class="flex flex-col gap-2">
                <Button
                  label="Als CSV exportieren"
                  severity="secondary"
                  variant="outlined"
                  class="w-full !justify-start"
                />
                <Button
                  label="Als PDF exportieren"
                  severity="secondary"
                  variant="outlined"
                  class="w-full !justify-start"
                />
              </div>
            </div>
          </div>
        </section>

        <DataTable
          :value="orders"
          table-class="w-full"
          :pt="{
            headerCell: '!bg-white !px-[14px] !py-[10px] !text-sm',
            bodyCell: '!bg-white !px-[14px] !py-[10px] !text-sm',
          }"
        >
          <Column field="product" header="Produkt" style="width: 384px" />
          <Column header="Status" style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" style="width: 124px" />
          <Column field="total" header="Summe" style="width: 124px" />
          <Column field="quantity" header="Stück" style="width: 124px" />
          <Column header="Aktionen" style="width: 92px">
            <template #body="{ data }">
              <div class="flex justify-center">
                <Button
                  :ref="data.product === 'System V5' ? 'actionButton' : undefined"
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  variant="text"
                  aria-label="Aktionen"
                  @click="toggleActions"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <div class="ml-auto mt-[-52px] w-[200px] rounded-md border border-slate-200 bg-white p-3 shadow-md">
          <div class="flex flex-col gap-2">
            <Button
              label="Bearbeiten"
              icon="pi pi-pen-to-square"
              severity="secondary"
              variant="outlined"
              class="w-full !justify-start"
            />
            <Button
              label="Status aktualisieren"
              icon="pi pi-list-check"
              severity="secondary"
              variant="outlined"
              class="w-full !justify-start"
            />
            <Button
              label="Löschen"
              icon="pi pi-trash"
              severity="secondary"
              variant="outlined"
              class="w-full !justify-start"
            />
          </div>
        </div>
      </div>

      <Popover ref="exportPopover">
        <div class="flex flex-col gap-2">
          <Button label="Als CSV exportieren" severity="secondary" variant="outlined" />
          <Button label="Als PDF exportieren" severity="secondary" variant="outlined" />
        </div>
      </Popover>

      <Popover ref="actionsPopover">
        <div class="flex flex-col gap-2">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" variant="outlined" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="outlined" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" />
        </div>
      </Popover>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
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
import InputText from 'primevue/inputtext'
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const periodText = ref('')
const selectedDate = ref(new Date(2024, 0, 1))
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)
const exportPopover = ref<InstanceType<typeof Popover> | null>(null)
const actionsPopover = ref<InstanceType<typeof Popover> | null>(null)

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
])

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const filteredStatuses = computed(() =>
  statuses.value.filter((status) =>
    status.toLowerCase().includes(statusSearch.value.toLowerCase()),
  ),
)

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' },
])

const toggleExport = (event: Event) => {
  exportPopover.value?.toggle(event)
}

const toggleActions = (event: Event) => {
  actionsPopover.value?.toggle(event)
}
</script>