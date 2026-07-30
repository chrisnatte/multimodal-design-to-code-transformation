<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-6 bg-slate-50 p-6">
      <span class="text-base text-slate-900">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-objects-column"
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
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-12 p-16">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Cards -->
      <div class="flex gap-5">
        <Card class="w-48 bg-slate-50 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-900">42.8 Tsd.</span>
              <span class="text-sm text-slate-600">Umsatz in €</span>
              <Tag value="+12 %" severity="primary" class="mt-4 w-fit" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-slate-50 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-900">1.247</span>
              <span class="text-sm text-slate-600">Bestellungen</span>
              <Tag value="+8 %" severity="primary" class="mt-4 w-fit" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-slate-50 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-900">89</span>
              <span class="text-sm text-slate-600">Retouren</span>
              <Tag value="+23 %" severity="danger" class="mt-4 w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Controls -->
      <div class="flex items-start justify-between">
        <Accordion value="0" class="w-[692px]">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 pt-4">
                <div class="flex w-[216px] flex-col gap-2">
                  <label class="text-sm">Zeitraum</label>
                  <DatePicker
                    v-model="date"
                    selection-mode="range"
                    placeholder="Zeitraum wählen"
                    class="w-full"
                  />
                </div>
                <div class="flex w-[216px] flex-col gap-2">
                  <label class="text-sm">Status</label>
                  <Select
                    v-model="status"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-col gap-3">
                  <label class="text-sm">Zustand</label>
                  <div class="flex h-[33px] items-center gap-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="active" input-id="active" binary />
                      <label for="active" class="text-sm">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archive" input-id="archive" binary />
                      <label for="archive" class="text-sm">Archiv</label>
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
            icon-pos="right"
            @click="toggleExportMenu"
          />
          <Menu ref="exportMenu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- DataTable -->
      <div class="w-[1008px]">
        <DataTable :value="products" class="w-full overflow-hidden rounded-lg border border-slate-200">
          <Column field="produkt" header="Produkt" style="width: 384px"></Column>
          <Column field="status" header="Status" style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum" style="width: 124px"></Column>
          <Column field="summe" header="Summe" style="width: 124px"></Column>
          <Column field="stueck" header="Stück" style="width: 124px"></Column>
          <Column header="Aktionen" style="width: 92px">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text rounded @click="toggleActionMenu" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" :model="actionOptions" popup />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const date = ref()
  const status = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const active = ref(true)
  const archive = ref(false)

  const exportMenu = ref()
  const exportOptions = [
    { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ]

  const toggleExportMenu = (event: Event) => {
    exportMenu.value.toggle(event)
  }

  const actionMenu = ref()
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  const toggleActionMenu = (event: Event) => {
    actionMenu.value.toggle(event)
  }

  const products = ref([
    {
      produkt: 'Widget Pro',
      status: 'Angekommen',
      bestelldatum: '15.04.2026',
      summe: '12.400 €',
      stueck: '312',
    },
    {
      produkt: 'Gadget Mini',
      status: 'In Bearbeitung',
      bestelldatum: '24.04.2026',
      summe: '8.920 €',
      stueck: '485',
    },
    {
      produkt: 'Sensor X1',
      status: 'Versendet',
      bestelldatum: '09.05.2026',
      summe: '6.100 €',
      stueck: '150',
    },
    {
      produkt: 'System V5',
      status: 'Bezahlt',
      bestelldatum: '12.06.2026',
      summe: '10.250 €',
      stueck: '2',
    },
  ])

  const getSeverity = (status: string) => {
    switch (status) {
      case 'Angekommen':
        return 'primary'
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