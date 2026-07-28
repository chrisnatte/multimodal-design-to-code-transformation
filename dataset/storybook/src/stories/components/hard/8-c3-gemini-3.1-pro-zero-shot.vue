<template>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden font-sans">
    <!-- Header Section -->
    <div class="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-10 px-6 text-center">
      <h1 class="text-2xl font-semibold text-white mb-1">ProDesk X500</h1>
      <p class="text-slate-400 text-sm">Workstation Monitor</p>
    </div>

    <!-- Tabs Section -->
    <Tabs value="0">
      <TabList class="px-6 pt-2 border-b border-gray-100">
        <Tab value="0" class="text-[#10b981] font-semibold border-b-2 border-[#10b981] pb-3 px-4 bg-transparent">Beschreibung</Tab>
        <Tab value="1" class="text-gray-500 font-semibold pb-3 px-4 hover:text-gray-700 bg-transparent border-b-2 border-transparent">Spezifikationen</Tab>
        <Tab value="2" class="text-gray-500 font-semibold pb-3 px-4 hover:text-gray-700 bg-transparent border-b-2 border-transparent">Bewertungen</Tab>
      </TabList>
      
      <TabPanels class="p-6">
        <TabPanel value="0">
          <!-- Text Content -->
          <p class="text-gray-700 leading-relaxed mb-4 text-[15px]">
            Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2.5 mb-8">
            <span class="bg-[#e0f2fe] text-[#0369a1] px-3 py-1 rounded-md text-sm font-bold">4K UHD</span>
            <span class="bg-[#d1fae5] text-[#047857] px-3 py-1 rounded-md text-sm font-bold">IPS-Panel</span>
            <span class="bg-[#ffe4e6] text-[#be123c] px-3 py-1 rounded-md text-sm font-bold">USB-C</span>
            <span class="bg-[#ffedd5] text-[#c2410c] px-3 py-1 rounded-md text-sm font-bold">99% sRGB</span>
            <span class="bg-[#d1fae5] text-[#047857] px-3 py-1 rounded-md text-sm font-bold">32 Zoll</span>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-end gap-3">
            <Button 
              label="Merken" 
              class="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] border-none font-semibold px-5 py-2.5 rounded-lg" 
            />
            <Button 
              label="In den Warenkorb" 
              icon="pi pi-shopping-cart" 
              class="bg-[#10b981] hover:bg-[#059669] text-white border-none font-semibold px-5 py-2.5 rounded-lg gap-2" 
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
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>