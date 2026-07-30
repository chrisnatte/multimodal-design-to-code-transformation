<template>
  <div class="flex w-full min-h-screen bg-surface-50 font-sans">
    <!-- Sidebar -->
    <div class="w-64 flex flex-col gap-4 p-6 bg-surface-50 border-r border-surface-200">
      <span class="text-lg font-normal text-surface-900">Navigation</span>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-home" class="w-full justify-start" severity="success" variant="text" />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start text-surface-600" severity="secondary" variant="text" />
        <Button label="Berichte" icon="pi pi-chart-bar" class="w-full justify-start text-surface-600" severity="secondary" variant="text" />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start text-surface-600" severity="secondary" variant="text" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col p-8 gap-8 bg-white">
      <!-- Header -->
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold text-surface-900 m-0">Dashboard</h1>
          <p class="text-base font-normal text-surface-600 m-0">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        
        <!-- Export Button -->
        <div>
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="flex gap-6">
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex justify-between items-start">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
                <span class="text-sm font-normal text-surface-600">Umsatz in €</span>
              </div>
              <Tag value="+ 12 %" severity="success" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex justify-between items-start">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium text-surface-900">1.247</span>
                <span class="text-sm font-normal text-surface-600">Bestellungen</span>
              </div>
              <Tag value="+ 8 %" severity="success" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex justify-between items-start">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium text-surface-900">3.891</span>
                <span class="text-sm font-normal text-surface-600">Nutzer</span>
              </div>
              <Tag value="+ 2 %" severity="warn" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex justify-between items-start">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium text-surface-900">89</span>
                <span class="text-sm font-normal text-surface-600">Retouren</span>
              </div>
              <Tag value="+ 23 %" severity="danger" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter Panel -->
      <div class="flex flex-col bg-surface-50 rounded-lg border border-surface-200">
        <div class="flex justify-between items-center p-4 border-b border-surface-200">
          <span class="text-sm font-semibold text-surface-900">Filter</span>
          <i class="pi pi-filter text-surface-600"></i>
        </div>
        <div class="flex gap-6 p-4">
          <!-- Zeitraum -->
          <div class="flex flex-col gap-2 w-64">
            <span class="text-sm font-normal text-surface-900">Zeitraum</span>
            <Button label="Zeitraum wählen" variant="outlined" class="w-full justify-start text-surface-600 border-green-500" />
            <DatePicker v-model="date" inline class="w-full" />
          </div>
          
          <!-- Status -->
          <div class="flex flex-col gap-2 w-52">
            <span class="text-sm font-normal text-surface-900">Status</span>
            <Button label="Status auswählen" icon="pi pi-chevron-down" iconPos="right" variant="outlined" class="w-full justify-between text-surface-600 border-green-500" />
            <div class="flex flex-col gap-1 p-2 border border-surface-200 rounded-md bg-white">
              <div class="flex items-center gap-2 p-2 bg-surface-100 rounded">
                <span class="text-sm text-surface-900">Bezahlt</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-surface-50 cursor-pointer">
                <span class="text-sm text-surface-900">In Bearbeitung</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-surface-50 cursor-pointer">
                <span class="text-sm text-surface-900">Versendet</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-surface-50 cursor-pointer">
                <span class="text-sm text-surface-900">Angekommen</span>
              </div>
            </div>
          </div>

          <!-- Zustand -->
          <div class="flex flex-col gap-2 w-40">
            <span class="text-sm font-normal text-surface-900">Zustand</span>
            <SelectButton v-model="zustand" :options="zustandOptions" optionLabel="label" dataKey="value" />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <div class="flex flex-col border border-surface-200 rounded-lg bg-white">
        <!-- Header Row -->
        <div class="flex items-center border-b border-surface-200 bg-surface-50">
          <div class="w-96 p-4 text-sm font-semibold text-surface-900">Produkt</div>
          <div class="w-40 p-4 text-sm font-semibold text-surface-900">Status</div>
          <div class="w-32 p-4 text-sm font-semibold text-surface-900">Bestelldatum</div>
          <div class="w-32 p-4 text-sm font-semibold text-surface-900">Summe</div>
          <div class="w-32 p-4 text-sm font-semibold text-surface-900">Stück</div>
          <div class="w-24 p-4 text-sm font-semibold text-surface-900">Aktionen</div>
        </div>
        
        <!-- Rows -->
        <div class="flex flex-col">
          <!-- Row 1 -->
          <div class="flex items-center border-b border-surface-200 hover:bg-surface-50">
            <div class="w-96 p-4 text-sm text-surface-900">Widget Pro</div>
            <div class="w-40 p-4"><Tag value="Angekommen" severity="success" /></div>
            <div class="w-32 p-4 text-sm text-surface-900">15.04.2026</div>
            <div class="w-32 p-4 text-sm text-surface-900">12.400 €</div>
            <div class="w-32 p-4 text-sm text-surface-900">312</div>
            <div class="w-24 p-4">
              <Button icon="pi pi-ellipsis-v" variant="text" severity="secondary" rounded @click="toggleActionMenu($event)" />
            </div>
          </div>
          <!-- Row 2 -->
          <div class="flex items-center border-b border-surface-200 hover:bg-surface-50">
            <div class="w-96 p-4 text-sm text-surface-900">Gadget Mini</div>
            <div class="w-40 p-4"><Tag value="In Bearbeitung" severity="warn" /></div>
            <div class="w-32 p-4 text-sm text-surface-900">24.04.2026</div>
            <div class="w-32 p-4 text-sm text-surface-900">8.920 €</div>
            <div class="w-32 p-4 text-sm text-surface-900">485</div>
            <div class="w-24 p-4">
              <Button icon="pi pi-ellipsis-v" variant="text" severity="secondary" rounded @click="toggleActionMenu($event)" />
            </div>
          </div>
          <!-- Row 3 -->
          <div class="flex items-center border-b border-surface-200 hover:bg-surface-50">
            <div class="w-96 p-4 text-sm text-surface-900">Sensor X1</div>
            <div class="w-40 p-4"><Tag value="Versendet" severity="secondary" /></div>
            <div class="w-32 p-4 text-sm text-surface-900">09.05.2026</div>
            <div class="w-32 p-4 text-sm text-surface-900">6.100 €</div>
            <div class="w-32 p-4 text-sm text-surface-900">150</div>
            <div class="w-24 p-4">
              <Button icon="pi pi-ellipsis-v" variant="text" severity="secondary" rounded @click="toggleActionMenu($event)" />
            </div>
          </div>
          <!-- Row 4 -->
          <div class="flex items-center hover:bg-surface-50">
            <div class="w-96 p-4 text-sm text