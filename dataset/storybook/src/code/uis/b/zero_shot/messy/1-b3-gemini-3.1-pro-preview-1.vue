<template>
  <div class="flex h-screen w-full bg-white font-sans text-gray-900">
    <!-- Sidebar -->
    <div class="w-64 bg-[#f1f5f9] flex flex-col py-6 px-6 gap-10 shrink-0">
      <div class="text-base font-normal text-gray-800">Navigation</div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3 p-2 bg-[#d1fae5] border border-[#a7f3d0] rounded-md text-[#10b981] cursor-pointer">
          <i class="pi pi-home"></i>
          <span class="font-medium text-sm">Dashboard</span>
        </div>
        <div class="flex items-center gap-3 p-2 border border-gray-400 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100">
          <i class="pi pi-users"></i>
          <span class="font-medium text-sm">Kunden</span>
        </div>
        <div class="flex items-center gap-3 p-2 border border-gray-400 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100">
          <i class="pi pi-chart-bar"></i>
          <span class="font-medium text-sm">Berichte</span>
        </div>
        <div class="flex items-center gap-3 p-2 border border-gray-400 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100">
          <i class="pi pi-cog"></i>
          <span class="font-medium text-sm">Einstellungen</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col p-8 gap-8 overflow-y-auto">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-gray-900 m-0">Dashboard</h1>
        <p class="text-base text-gray-600 m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex gap-6">
        <Card class="flex-1 bg-[#f1f5f9] shadow-none border-none rounded-xl" :pt="{ body: { class: 'p-4' } }">
          <template #content>
            <div class="flex flex-col gap-4">
              <div>
                <div class="text-2xl font-medium text-gray-900">42.8 Tsd.</div>
                <div class="text-sm text-gray-600">Umsatz in €</div>
              </div>
              <Tag value="+ 12 %" class="!bg-[#d1fae5] !text-[#10b981] font-bold text-xs w-fit px-2 py-1" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-[#f1f5f9] shadow-none border-none rounded-xl" :pt="{ body: { class: 'p-4' } }">
          <template #content>
            <div class="flex flex-col gap-4">
              <div>
                <div class="text-2xl font-medium text-gray-900">1.247</div>
                <div class="text-sm text-gray-600">Bestellungen</div>
              </div>
              <Tag value="+ 8 %" class="!bg-[#d1fae5] !text-[#10b981] font-bold text-xs w-fit px-2 py-1" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-[#f1f5f9] shadow-none border-none rounded-xl" :pt="{ body: { class: 'p-4' } }">
          <template #content>
            <div class="flex flex-col gap-4">
              <div>
                <div class="text-2xl font-medium text-gray-900">3.891</div>
                <div class="text-sm text-gray-600">Nutzer</div>
              </div>
              <Tag value="+ 2 %" class="!bg-[#ffedd5] !text-[#f59e0b] font-bold text-xs w-fit px-2 py-1" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-[#f1f5f9] shadow-none border-none rounded-xl" :pt="{ body: { class: 'p-4' } }">
          <template #content>
            <div class="flex flex-col gap-4">
              <div>
                <div class="text-2xl font-medium text-gray-900">89</div>
                <div class="text-sm text-gray-600">Retouren</div>
              </div>
              <Tag value="+ 23 %" class="!bg-[#fee2e2] !text-[#ef4444] font-bold text-xs w-fit px-2 py-1" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter & Export -->
      <div class="flex justify-between items-start gap-6">
        <!-- Filter Box -->
        <div class="flex-1 bg-[#f1f5f9] rounded-lg border border-gray-200 flex flex-col">
          <div class="flex justify-between items-center p-4 border-b border-gray-200">
            <span class="font-semibold text-sm text-gray-900">Filter</span>
            <i class="pi pi-filter text-gray-500"></i>
          </div>
          <div class="p-4 flex gap-6">
            <!-- Zeitraum -->
            <div class="flex flex-col gap-2 w-64">
              <span class="text-sm text-gray-600">Zeitraum</span>
              <div class="p-2 bg-white border border-[#10b981] rounded-md text-sm text-gray-600 cursor-pointer">
                Zeitraum wählen
              </div>
            </div>
            <!-- Status -->
            <div class="flex flex-col gap-2 w-52">
              <span class="text-sm text-gray-600">Status</span>
              <div class="flex justify-between items-center p-2 bg-white border border-[#10b981] rounded-md text-sm text-gray-600 cursor-pointer">
                <span>Status auswählen</span>
                <i class="pi pi-chevron-down"></i>
              </div>
            </div>
            <!-- Zustand -->
            <div class="flex flex-col gap-2 w-32">
              <span class="text-sm text-gray-600">Zustand</span>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2 bg-[#10b981] text-white px-2 py-1 rounded-md text-sm cursor-pointer">
                  <i class="pi pi-check text-xs"></i> Aktiv
                </div>
                <div class="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md text-sm cursor-pointer">
                  Archiv
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export -->
        <div class="flex flex-col gap-2 relative">
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" class="!bg-[#10b981] !border-[#10b981] !text-white w-48" @click="isExportMenuOpen = !isExportMenuOpen" />
          <!-- Dropdown mockup -->
          <div v-if="isExportMenuOpen" class="absolute top-12 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-sm flex flex-col p-2 gap-2 z-10">
            <div class="p-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">Als CSV exportieren</div>
            <div class="p-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">Als PDF exportieren</div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="flex flex-col border border-gray-200 rounded-lg bg-white">
        <!-- Header -->
        <div class="flex border-b border-gray-200 bg-white rounded-t-lg">
          <div class="w-96 p-3 font-semibold text-sm text-gray-900 border-r border-gray-200">Produkt</div>
          <div class="w-40 p-3 font-semibold text-sm text-gray-900 border-r border-gray-200">Status</div>
          <div class="w-32 p-3 font-semibold text-sm text-gray-900 border-r border-gray-200">Bestelldatum</div>
          <div class="w-32 p-3 font-semibold text-sm text-gray-900 border-r border-gray-200">Summe</div>
          <div class="w-32 p-3 font-semibold text-sm text-gray-900 border-r border-gray-200">Stück</div>
          <div class="w-24 p-3 font-semibold text-sm text-gray-900">Aktionen</div>
        </div>
        <!-- Rows -->
        <div class="flex flex-col">
          <!-- Row 1 -->
          <div class="flex border-b border-gray-200 items-center relative">
            <div class="w-96 p-3 text-sm text-gray-700 border-r border-gray-200">Widget Pro</div>
            <div class="w-40 p-3 border-r border-gray-200">
              <Tag value="Angekommen" class="!bg-[#d1fae5] !text-[#10b981] font-bold text-xs px-2 py-1" />
            </div>
            <div class="w-32 p-3 text-sm text-gray-700 border-r border-gray-200">15.04.2026</div>
            <div class="w-32 p-3 text-sm text-gray-700 border-r border-gray-200">12.400 €</div>
            <div class="w-32 p-3 text-sm text-gray-700 border-r border-gray-200">312</div>
            <div class="w-24 p-3 flex justify-center relative">
              <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="isActionMenuOpen = !isActionMenuOpen" />
              <!-- Action Menu Mockup -->
              <div v-if="isActionMenuOpen" class="absolute top-10 right-0 w-48 bg-white border border-gray-200 rounded-md shadow-sm flex flex-col p-2 gap-2 z-10">
                <div class="flex items-center gap-2 p-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                  <i class="pi pi-pencil"></i> Bearbeiten
                </div>
                <div class="flex items-center gap-2 p-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                  <i class="pi pi-refresh"></i> Status aktualisieren
                </div>
                <div class="flex items-center gap-2 p-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                  <i class="pi pi-trash"></i> Löschen
                </div>