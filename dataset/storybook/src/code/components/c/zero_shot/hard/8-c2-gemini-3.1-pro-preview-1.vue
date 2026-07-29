<template>
  <div class="max-w-2xl mx-auto bg-surface-0 dark:bg-surface-900 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden font-sans">
    
    <!-- Header Section -->
    <div class="bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-10 text-center">
      <h1 class="text-2xl font-semibold text-white m-0 mb-1">ProDesk X500</h1>
      <p class="text-slate-400 text-sm m-0">Workstation Monitor</p>
    </div>

    <!-- Tabs Section -->
    <Tabs v-model:value="activeTab">
      <TabList class="px-4 pt-2">
        <Tab value="0" class="font-semibold text-emerald-500">Beschreibung</Tab>
        <Tab value="1" class="font-semibold text-surface-500">Spezifikationen</Tab>
        <Tab value="2" class="font-semibold text-surface-500">Bewertungen</Tab>
      </TabList>
      
      <TabPanels class="p-6">
        <TabPanel value="0">
          <!-- Content -->
          <p class="text-surface-700 dark:text-surface-300 leading-relaxed m-0 mb-4 text-[15px]">
            Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
          </p>
          <p class="text-surface-500 dark:text-surface-400 leading-relaxed m-0 mb-6 text-sm">
            Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">4K UHD</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">IPS-Panel</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">USB-C</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">99% sRGB</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">32 Zoll</span>
          </div>

          <!-- Footer Buttons -->
          <div class="flex justify-end items-center gap-3">
            <Button 
              label="Merken" 
              class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200 dark:!bg-surface-800 dark:!text-surface-200 dark:hover:!bg-surface-700 font-semibold px-5 py-2.5 rounded-lg" 
            />
            <Button 
              label="In den Warenkorb" 
              icon="pi pi-shopping-cart" 
              class="!bg-emerald-500 !text-white !border-none hover:!bg-emerald-600 font-semibold px-5 py-2.5 rounded-lg" 
            />
          </div>
        </TabPanel>
        
        <TabPanel value="1">
          <p class="text-surface-700 dark:text-surface-300 m-0">Spezifikationen details would go here.</p>
        </TabPanel>
        
        <TabPanel value="2">
          <p class="text-surface-700 dark:text-surface-300 m-0">Bewertungen details would go here.</p>
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