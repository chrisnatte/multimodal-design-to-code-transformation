<template>
  <Card class="w-full max-w-[488px] shadow-md border border-surface-200 dark:border-surface-700 overflow-hidden rounded-xl">
    <!-- Header -->
    <template #header>
      <div class="h-[124px] flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 p-4">
        <span class="font-medium text-[17.5px] text-white">ProDesk X500</span>
        <span class="font-light text-[12px] text-slate-400 mt-1">Workstation Monitor</span>
      </div>
    </template>

    <!-- Content -->
    <template #content>
      <div class="mt-[-1rem]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels class="!p-0 !pt-4">
            <TabPanel value="0">
              <div class="flex flex-col gap-4 text-sm text-surface-700 dark:text-surface-100">
                <p class="m-0 leading-relaxed">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 leading-relaxed text-surface-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap items-center gap-2 mt-2">
                  <span class="px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold text-xs">4K UHD</span>
                  <span class="px-2 py-1 rounded bg-green-100 text-green-700 font-semibold text-xs">IPS-Panel</span>
                  <span class="px-2 py-1 rounded bg-red-100 text-red-700 font-semibold text-xs">USB-C</span>
                  <span class="px-2 py-1 rounded bg-orange-100 text-orange-700 font-semibold text-xs">99% sRGB</span>
                  <span class="px-2 py-1 rounded bg-emerald-100 text-emerald-700 font-semibold text-xs">32 Zoll</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm">Spezifikationen nicht verfügbar.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>

    <!-- Footer -->
    <template #footer>
      <div class="flex justify-end gap-2 pt-2">
        <Button 
          label="Merken" 
          severity="secondary" 
          class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200 font-medium"
        />
        <Button 
          label="In den Warenkorb" 
          icon="pi pi-cart-plus" 
          class="!bg-[#10b981] hover:!bg-[#059669] !border-none font-medium" 
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>