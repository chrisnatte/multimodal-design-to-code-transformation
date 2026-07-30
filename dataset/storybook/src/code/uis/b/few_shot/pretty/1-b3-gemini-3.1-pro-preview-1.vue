<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="flex w-64 flex-shrink-0 flex-col gap-6 bg-slate-100 p-6">
      <div class="text-base text-slate-600">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-objects-column" severity="success" class="w-full justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="text" class="w-full justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="text" class="w-full justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="text" class="w-full justify-start" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-8">
      <!-- Header -->
      <div class="flex w-full items-start justify-between">
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-3xl font-bold">Dashboard</h1>
          <p class="m-0 text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
        <Popover ref="exportPopover">
          <div class="flex flex-col gap-2 p-1">
            <Button label="Als CSV exportieren" icon="pi pi-file-excel" severity="secondary" variant="outlined" class="w-full justify-start" />
            <Button label="Als PDF exportieren" icon="pi pi-file-pdf" severity="secondary" variant="outlined" class="w-full justify-start" />
          </div>
        </Popover>
      </div>

      <!-- Cards -->
      <div class="flex w-full gap-5">
        <Card class="flex-1 bg-slate-100 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium">42.8 Tsd.</div>
              <div class="text-sm text-slate-600">Umsatz in €</div>
              <Tag value="+12 %" severity="success" class="mt-2 w-fit" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-slate-100 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium">1.247</div>
              <div class="text-sm text-slate-600">Bestellungen</div>
              <Tag value="+8 %" severity="success" class="mt-2 w-fit" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-slate-100 shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium">89</div>
              <div class="text-sm text-slate-600">Retouren</div>
              <Tag value="+23 %" severity="danger" class="mt-2 w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter Accordion -->
      <Accordion value="0" class="w-full">
        <AccordionPanel value="0" class="overflow-hidden rounded-xl border-none bg-slate-100">
          <AccordionHeader class="bg-transparent hover:bg-slate-200">Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex gap-8 pt-2">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium">Zeitraum</label>
                <DatePicker v-model="date" selectionMode="range" placeholder="Zeitraum wählen" class="w-56" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium">Status</label>
                <Select v-model="status" :options="statuses" placeholder="Status auswählen" class="w-56" />
              </div>
              <div class="flex flex-col gap-3">
                <label class="text-sm font-medium">Zustand</label>
                <div class="flex h-[33px] items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" inputId="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" inputId="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full">
        <Column field="product" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="total" header="Summe"></Column>
        <Column field="quantity" header="Stück"></Column>
        <Column header="Aktionen" bodyStyle="text-align: center">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="toggleActions($event, data)" />
          </template>
        </Column>
      </DataTable>

      <!-- Row Actions Popover -->
      <Popover ref="actionsPopover">