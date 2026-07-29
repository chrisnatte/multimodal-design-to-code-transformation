<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-full max-w-[536px] rounded-xl overflow-hidden shadow-sm border border-surface-200">
      <template #header>
        <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-6 flex flex-col items-center justify-center text-center">
          <h2 class="text-lg font-medium m-0">ProDesk X500</h2>
          <p class="text-xs font-light text-slate-400 m-0 mt-1">Workstation Monitor</p>
        </div>
      </template>
      
      <template #content>
        <Tabs :value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="py-2">
                <p class="text-surface-700 text-sm leading-relaxed mb-4 m-0">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-surface-500 text-xs leading-relaxed mb-4 m-0">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800">4K UHD</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">IPS-Panel</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-800">USB-C</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-800">99% sRGB</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">32 Zoll</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="text-surface-700 text-sm m-0 py-2">Spezifikationen sind hier aufgelistet.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="text-surface-700 text-sm m-0 py-2">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 pt-2">
          <Button 
            label="Merken" 
            severity="secondary" 
            class="bg-slate-100 hover:bg-slate-200 text-slate-700 border-none font-medium text-sm px-4 py-2" 
          />
          <Button 
            label="In den Warenkorb" 
            icon="pi pi-shopping-cart" 
            class="bg-emerald-500 hover:bg-emerald-600 text-white border-none font-medium text-sm px-4 py-2" 
          />
        </div>
      </template>
    </Card>
  </div>
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