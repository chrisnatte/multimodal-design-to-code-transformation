<template>
  <div class="flex justify-center p-8">
    <Card class="w-full max-w-[31rem] overflow-hidden shadow-sm border border-surface-200 dark:border-surface-700">
      <template #header>
        <div class="bg-gradient-to-br from-slate-900 to-slate-800 h-32 flex flex-col items-center justify-center text-white">
          <h2 class="text-xl font-medium mb-1">ProDesk X500</h2>
          <span class="text-sm font-light text-slate-300">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <Tabs class="mt-[-1.25rem] mx-[-1.25rem]" v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels class="p-5">
            <TabPanel value="0">
              <p class="m-0 mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="m-0 mb-5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2.5 py-1 rounded text-xs font-bold tracking-wide">4K UHD</span>
                <span class="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 px-2.5 py-1 rounded text-xs font-bold tracking-wide">IPS-Panel</span>
                <span class="bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300 px-2.5 py-1 rounded text-xs font-bold tracking-wide">USB-C</span>
                <span class="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 px-2.5 py-1 rounded text-xs font-bold tracking-wide">99% sRGB</span>
                <span class="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 px-2.5 py-1 rounded text-xs font-bold tracking-wide">32 Zoll</span>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-slate-700 dark:text-slate-300">
                Spezifikationen sind derzeit nicht verfügbar.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-slate-700 dark:text-slate-300">
                Noch keine Bewertungen vorhanden.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3 w-full">
          <Button label="Merken" severity="secondary" variant="text" class="!bg-slate-100 !text-slate-700 hover:!bg-slate-200 font-medium px-4 py-2 border-none" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 font-medium px-4 py-2" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('0');
</script>