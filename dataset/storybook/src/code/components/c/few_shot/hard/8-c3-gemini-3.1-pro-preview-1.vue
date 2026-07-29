<template>
  <Card
    :pt="{
      root: 'w-full max-w-2xl overflow-hidden rounded-xl shadow-sm border border-slate-200 mx-auto',
      body: 'p-6',
      content: 'p-0',
      footer: 'pt-4'
    }"
  >
    <template #header>
      <div class="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-12 flex flex-col items-center justify-center">
        <h1 class="text-2xl font-medium text-white mb-1">ProDesk X500</h1>
        <span class="text-slate-400 text-sm">Workstation Monitor</span>
      </div>
    </template>
    <template #content>
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
        <TabPanels class="px-0 pb-0 pt-6">
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <p class="text-slate-700 leading-relaxed m-0">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-slate-500 text-sm leading-relaxed m-0">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-3 mt-2">
                <Tag value="4K UHD" class="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold rounded-md border-none" />
                <Tag value="IPS-Panel" class="bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold rounded-md border-none" />
                <Tag value="USB-C" class="bg-red-100 text-red-800 px-3 py-1 text-xs font-bold rounded-md border-none" />
                <Tag value="99% sRGB" class="bg-orange-100 text-orange-800 px-3 py-1 text-xs font-bold rounded-md border-none" />
                <Tag value="32 Zoll" class="bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold rounded-md border-none" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #footer>
      <div class="flex justify-end gap-3">
        <Button label="Merken" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 font-medium px-5" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" class="bg-[#10b981] text-white border-none hover:bg-[#059669] font-medium px-5" />
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
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>