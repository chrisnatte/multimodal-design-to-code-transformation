<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-surface-900">
    <!-- Sidebar -->
    <div class="flex w-64 shrink-0 flex-col gap-6 bg-surface-50 p-6">
      <div class="text-base text-surface-900">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-objects-column"
          severity="primary"
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
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-10 overflow-y-auto p-16">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold">Dashboard</h1>
        <p class="m-0 text-surface-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Summary Cards -->
      <div class="flex gap-5">
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-surface-50 p-4">
          <div class="text-2xl font-medium">42.8 Tsd.</div>
          <div class="text-sm text-surface-600">Umsatz in €</div>
          <Tag value="+12 %" severity="success" class="mt-2 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-surface-50 p-4">
          <div class="text-2xl font-medium">1.247</div>
          <div class="text-sm text-surface-600">Bestellungen</div>
          <Tag value="+8 %" severity="success" class="mt-2 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-surface-50 p-4">
          <div class="text-2xl font-medium">3.891</div>
          <div class="text-sm text-surface-600">Nutzer</div>
          <Tag value="+2 %" severity="warn" class="mt-2 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-surface-50 p-4">
          <div class="text-2xl font-medium">89</div>
          <div class="text-sm text-surface-600">Retouren</div>
          <Tag value="+23 %" severity="danger" class="mt-2 w-fit" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex items-start gap-5">
        <Accordion value="0" class="flex-1 max-w-3xl">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5">
                <div class="flex flex-1 flex-col gap-2">
                  <label class="text-sm">Zeitraum</label>
                  <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
                </div>
                <div class="flex flex-1 flex-col gap-2">
                  <label class="text-sm">Status</label>
                  <Select
                    v-model="status"
                    :options="statuses"
                    placeholder="Status auswählen"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-1 flex-col gap-2">
                  <label class="text-sm">Zustand</label>
                  <div class="flex h-10 items-center gap-4">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="active" inputId="aktiv" binary />
                      <label for="aktiv" class="text-sm">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archive" inputId="archiv" binary />
                      <label for="archiv" class="text-sm">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div>
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            @click="toggleExportMenu"
            aria-haspopup="true"
            aria-controls="export_menu"
          />
          <Menu ref="exportMenu" id="export_menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full">
        <Column field="product" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="total" header="Summe"></Column>
        <Column field="pieces" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              rounded
              @click="toggleActionMenu"
              aria-haspopup="true"
              aria-controls="action_menu"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionOptions" popup />
    </div>
  </div>
</template>

<script setup>
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
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Menu from 'primevue/menu'

  const date = ref()
  const status = ref()
  const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const active = ref(true)
  const archive = ref(false)

  const exportMenu = useTemplateRef('exportMenu')
  const exportOptions = ref([
    { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ])
  const toggleExportMenu = (event) => {
    exportMenu.value.toggle(event)
  }

  const actionMenu = useTemplateRef('actionMenu')
  const actionOptions = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])
  const toggleActionMenu = (event) => {
    actionMenu.value.toggle(event)
  }

  const products = ref([
    {
      product: 'Widget Pro',
      status: 'Angekommen',
      date: '15.04.2026',
      total: '12.400 €',
      pieces: 312,
    },
    {
      product: 'Gadget Mini',
      status: 'In Bearbeitung',
      date: '24.04.2026',
      total: '8.920 €',
      pieces: 485,
    },
    { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: 150 },
    { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: 2 },
  ])

  const getStatusSeverity = (status) => {
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
        return 'info'
    }
  }
</script>