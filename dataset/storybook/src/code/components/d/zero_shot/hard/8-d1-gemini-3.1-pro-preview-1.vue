<template>
  <div class="p-6 bg-white flex justify-center">
    <Card class="w-[536px] rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <template #header>
        <div class="bg-gradient-to-br from-[#1a2035] to-[#112a46] text-white pt-12 pb-8 px-6 flex flex-col items-center justify-center">
          <h2 class="text-xl font-medium m-0 tracking-wide">ProDesk X500</h2>
          <p class="text-sm text-gray-400 m-0 mt-1 font-light">Workstation Monitor</p>
        </div>
      </template>
      
      <template #content>
        <Tabs v-model:value="activeTab" class="mt-[-1.5rem]">
          <TabList class="border-b border-gray-200">
            <Tab value="0" class="font-bold text-sm px-4 py-3">Beschreibung</Tab>
            <Tab value="1" class="font-bold text-sm px-4 py-3 text-gray-500">Spezifikationen</Tab>
            <Tab value="2" class="font-bold text-sm px-4 py-3 text-gray-500">Bewertungen</Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel value="0" class="p-0 pt-4">
              <div class="flex flex-col gap-4">
                <p class="text-[14px] text-gray-600 leading-relaxed m-0">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-[14px] text-gray-600 leading-relaxed m-0">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                
                <div class="flex flex-wrap gap-2 mt-1">
                  <Tag value="4K UHD" class="bg-[#e0f2fe] text-[#0369a1] font-bold text-xs px-2.5 py-1 rounded-md" />
                  <Tag value="IPS-Panel" class="bg-[#dcfce7] text-[#15803d] font-bold text-xs px-2.5 py-1 rounded-md" />
                  <Tag value="USB-C" class="bg-[#fee2e2] text-[#b91c1c] font-bold text-xs px-2.5 py-1 rounded-md" />
                  <Tag value="99% sRGB" class="bg-[#ffedd5] text-[#c2410c] font-bold text-xs px-2.5 py-1 rounded-md" />
                  <Tag value="32 Zoll" class="bg-[#dcfce7] text-[#15803d] font-bold text-xs px-2.5 py-1 rounded-md" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1" class="p-0 pt-4">
              <p class="text-[14px] text-gray-600 m-0">Spezifikationen hier anzeigen.</p>
            </TabPanel>
            <TabPanel value="2" class="p-0 pt-4">
              <p class="text-[14px] text-gray-600 m-0">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3 pt-2">
          <Button 
            label="Merken" 
            class="bg-[#f1f5f9] text-[#334155] border-none hover:bg-[#e2e8f0] font-medium px-4 py-2 rounded-md text-sm" 
          />
          <Button 
            label="In den Warenkorb" 
            icon="pi pi-cart-plus" 
            class="bg-[#10b981] text-white border-none hover:bg-[#059669] font-medium px-4 py-2 rounded-md text-sm" 
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
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>