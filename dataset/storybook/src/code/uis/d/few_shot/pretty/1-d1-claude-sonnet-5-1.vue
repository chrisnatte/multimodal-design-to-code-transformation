<template>
  <div class="flex min-h-screen">
    <div class="flex w-64 flex-col gap-6 bg-slate-100 p-6">
      <div class="flex flex-col gap-4">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            severity="primary"
            outlined
            class="!justify-start"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="!justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            outlined
            class="!justify-start"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="!justify-start"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-6 p-8">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <div class="flex gap-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col gap-2 rounded-xl bg-slate-100 p-4"
        >
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">{{ stat.value }}</span>
            <span class="text-sm">{{ stat.label }}</span>
          </div>
          <Tag :value="stat.change" :severity="stat.severity" />
        </div>
      </div>

      <div class="flex gap-5">
        <Accordion value="0" class="flex-1">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5">
                <div class="flex flex-col gap-2">
                  <label for="date-range" class="text-sm">Zeitraum</label>
                  <DatePicker
                    v-model="dateRange"
                    input-id="date-range"
                    placeholder="Zeitraum wählen"
                    selection-mode="range"
                    show-icon
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="status-select" class="text-sm">Status</label>
                  <Select
                    v-model="status"
                    input-id="status-select"
                    :options="statusOptions"
                    filter
                    placeholder="Status auswählen"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <span class="text-sm">Zustand</span>
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="active" input-id="active" binary size="large" />
                      <label for="active">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archive" input-id="archive" binary size="large" />
                      <label for="archive">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col items-start gap-2">
          <Button
            label="Exportieren"
            icon-pos="right"
            icon="pi pi-file-export"
            severity="primary"
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
              <Button
                :label="item.label"
                severity="secondary"
                outlined
                class="w-full !justify-start"
              />
            </template>
          </Menu>
        </div>
      </div>

      <DataTable :value="products">
        <Column field="name" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="sum" header="Summe" />
        <Column field="qty" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              aria-controls="actions-menu"
              @click="actionsMenu?.toggle"
            />
          </template>
        </Column>
      </DataTable>
      <Menu
        ref="actions-menu"
        id="actions-menu"
        :model="actionOptions"
        popup
        :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
      >
        <template #item="{ item }">
          <Button
            :label="item.label"
            :icon="item.icon"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
        </template>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Tag from 'primevue/tag'
  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const status = ref()
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const active = ref(true)
  const archive = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', qty: 312 },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', qty: 485 },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', qty: 150 },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', qty: 2 },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function getStatusTagSeverity(status: string) {
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