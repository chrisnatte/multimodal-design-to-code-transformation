<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
    <Card class="w-full max-w-2xl rounded-2xl overflow-hidden shadow-md border-none bg-white">
      <template #header>
        <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] py-12 px-8 text-center">
          <h1 class="text-white text-2xl font-semibold m-0 tracking-wide">ProDesk X500</h1>
          <p class="text-slate-400 mt-2 text-sm">Workstation Monitor</p>
        </div>
      </template>

      <template #content>
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="border-b border-gray-100">
            <Tab value="0" class="font-semibold text-emerald-500">Beschreibung</Tab>
            <Tab value="1" class="font-semibold text-gray-500">Spezifikationen</Tab>
            <Tab value="2" class="font-semibold text-gray-500">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0" class="pt-6 pb-2 px-0">
              <p class="text-gray-700 text-base leading-relaxed mb-4">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-gray-500 text-sm leading-relaxed mb-6">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>

              <div class="flex flex-wrap gap-2.5">
                <span class="px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800">4K UHD</span>
                <span class="px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">IPS-Panel</span>
                <span class="px-3 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800">USB-C</span>
                <span class="px-3 py-1 rounded-md text-xs font-bold bg-orange-100 text-orange-800">99% sRGB</span>
                <span class="px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">32 Zoll</span>
              </div>
            </TabPanel>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2"></TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3 pt-4 pb-2">
          <Button 
            label="Merken" 
            class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 font-semibold px-5 py-2.5 rounded-lg" 
          />
          <Button 
            label="In den Warenkorb" 
            icon="pi pi-shopping-cart" 
            class="bg-[#10b981] hover:bg-[#059669] border-none text-white font-semibold px-5 py-2.5 rounded-lg" 
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