<template>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 font-sans">
    <!-- Header Section -->
    <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] py-10 px-6 text-center">
      <h1 class="text-2xl font-semibold text-white mb-1">ProDesk X500</h1>
      <p class="text-slate-400 text-sm">Workstation Monitor</p>
    </div>

    <!-- Content Section -->
    <div class="p-2">
      <Tabs v-model:value="activeTab">
        <TabList class="px-4 border-b border-gray-100">
          <Tab value="0" class="text-[#10b981] font-semibold px-4 py-3">Beschreibung</Tab>
          <Tab value="1" class="text-gray-500 font-medium px-4 py-3">Spezifikationen</Tab>
          <Tab value="2" class="text-gray-500 font-medium px-4 py-3">Bewertungen</Tab>
        </TabList>
        
        <TabPanels class="px-4 py-6">
          <TabPanel value="0">
            <!-- Description Text -->
            <p class="text-gray-700 leading-relaxed mb-4 text-[15px]">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
            </p>

            <!-- Feature Tags -->
            <div class="flex flex-wrap gap-2.5 mb-8">
              <Tag value="4K UHD" class="bg-[#e0f2fe] text-[#0369a1] font-bold px-3 py-1 rounded-md text-xs" />
              <Tag value="IPS-Panel" class="bg-[#d1fae5] text-[#047857] font-bold px-3 py-1 rounded-md text-xs" />
              <Tag value="USB-C" class="bg-[#ffe4e6] text-[#be123c] font-bold px-3 py-1 rounded-md text-xs" />
              <Tag value="99% sRGB" class="bg-[#ffedd5] text-[#c2410c] font-bold px-3 py-1 rounded-md text-xs" />
              <Tag value="32 Zoll" class="bg-[#d1fae5] text-[#047857] font-bold px-3 py-1 rounded-md text-xs" />
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end gap-3">
              <Button 
                label="Merken" 
                class="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-slate-700 border-none font-medium px-5 py-2.5 rounded-lg transition-colors" 
              />
              <Button 
                label="In den Warenkorb" 
                icon="pi pi-shopping-cart" 
                class="bg-[#10b981] hover:bg-[#059669] border-none text-white font-medium px-5 py-2.5 rounded-lg transition-colors" 
              />
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Placeholder for Spezifikationen -->
          </TabPanel>
          <TabPanel value="2">
            <!-- Placeholder for Bewertungen -->
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>