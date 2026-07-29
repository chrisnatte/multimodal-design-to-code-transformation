<template>
  <div class="flex h-full w-full">
    <aside class="min-h-full w-64 shrink-0 bg-(--p-surface-100)">
      <div class="flex flex-col gap-8 p-6">
        <h2 class="text-(--p-text-color)">Navigation</h2>
        <nav class="flex flex-col gap-2">
          <Button
            v-for="item in navItems"
            :key="item.label"
            :label="item.label"
            :icon="item.icon"
            text
            :severity="item.active ? 'success' : 'secondary'"
            :outlined="!item.active"
            class="!justify-start"
            :class="{ '!bg-(--p-primary-50)': item.active }"
          />
        </nav>
      </div>
    </aside>

    <main class="flex-1 px-8 py-4">
      <header class="mb-5 flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-(--p-text-color)">Dashboard</h1>
        <p class="text-(--p-surface-500)">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <div class="mb-6 flex flex-wrap gap-5">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          :pt="{
            root: '!bg-(--p-surface-100) !w-[192px]',
            body: 'flex flex-col gap-2',
            content: 'flex flex-col gap-2',
          }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-bold text-(--p-content-color)">{{ stat.value }}</span>
              <span class="text-sm text-(--p-text-muted-color)">{{ stat.label }}</span>
            </div>
            <Tag :value="stat.change" :severity="stat.severity" class="w-fit !font-semibold" />
          </template>
        </Card>
      </div>

      <div class="mb-4.5 flex items-start gap-4">
        <Accordion :value="0" class="flex-1">
          <AccordionPanel
            value="0"
            :pt="{
              root: '!bg-(--p-surface-100)',
            }"
          >
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent
              :pt="{
                root: '!bg-(--p-surface-100)',
              }"
            >
              <div class="flex gap-8 pt-2">
                <div class="flex flex-col gap-2">
                  <label for="date-range" class="text-sm text-(--p-surface-700)">Zeitraum</label>
                  <DatePicker
                    v-model="dateRange"
                    placeholder="Zeitraum wählen"
                    show-icon
                    input-id="date-range"
                    class="w-56"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="status-filter" class="text-sm text-(--p-surface-700)">Status</label>
                  <Select
                    v-model="statusFilter"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    filter
                    show-clear
                    input-id="status-filter"
                    class="w-56"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-(--p-surface-700)">Zustand</span>
                  <div class="flex items-center gap-4 pt-2">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="state" input-id="state-aktiv" value="aktiv" />
                      <label for="state-aktiv">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="state" input-id="state-archiv" value="archiv" />
                      <label for="state-archiv">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col items-end gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            icon-pos="right"
            @click="exportMenu?.toggle"
          />

          <Popover ref="export-menu">
            <div class="flex w-52 flex-col gap-2">
              <Button
                label="Als CSV exportieren"
                severity="secondary"
                outlined
                class="w-full !justify-start"
              />
              <Button
                label="Als PDF exportieren"
                severity="secondary"
                outlined
                class="w-full !justify-start"
              />
            </div>
          </Popover>
        </div>
      </div>

      <DataTable :value="orders">
        <Column field="product" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="orderDate" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              aria-haspopup="true"
              aria-controls="row-actions-menu"
              @click="openRowActions($event, data)"
            />
          </template>
        </Column>
      </DataTable>

      <Menu
        ref="row-actions-menu"
        id="row-actions-menu"
        :model="rowActionItems"
        popup
        :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
      >
        <template #item="{ item }">
          <Button
            :label="item.label"
            :icon="item.icon"
            text
            severity="secondary"
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
  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Popover from 'primevue/popover'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Menu from 'primevue/menu'

  const navItems = [
    { label: 'Dashboard', icon: 'pi pi-th-large', active: true },
    { label: 'Kunden', icon: 'pi pi-users', active: false },
    { label: 'Berichte', icon: 'pi pi-file', active: false },
    { label: 'Einstellungen', icon: 'pi pi-cog', active: false },
  ]

  const stats = [
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ]

  const dateRange = ref()
  const statusFilter = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const state = ref(['aktiv'])

  const exportMenu = useTemplateRef('export-menu')

  const orders = ref([
    {
      product: 'Widget Pro',
      status: 'Angekommen',
      orderDate: '15.04.2026',
      total: '12.400 €',
      quantity: 312,
    },
    {
      product: 'Gadget Mini',
      status: 'In Bearbeitung',
      orderDate: '24.04.2026',
      total: '8.920 €',
      quantity: 485,
    },
    {
      product: 'Sensor X1',
      status: 'Versendet',
      orderDate: '09.05.2026',
      total: '6.100 €',
      quantity: 150,
    },
    {
      product: 'System V5',
      status: 'Bezahlt',
      orderDate: '12.06.2026',
      total: '10.250 €',
      quantity: 2,
    },
  ])

  function statusSeverity(status: string) {
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

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionItems = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])

  function openRowActions(event: Event, row: unknown) {
    rowActionsMenu.value?.toggle(event)
  }
</script>
