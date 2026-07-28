<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-lg shadow-lg rounded-xl overflow-hidden">
      <template #header>
        <div class="flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
          <span class="text-2xl font-medium">ProDesk X500</span>
          <span class="text-slate-400 text-sm mt-1">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList class="px-6">
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels class="px-6 pb-6">
            <TabPanel value="0">
              <p class="text-slate-700 leading-relaxed m-0">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-slate-500 text-sm leading-relaxed mt-3 m-0">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <Tag value="4K UHD" severity="info" />
                <Tag value="IPS-Panel" severity="success" />
                <Tag value="USB-C" severity="danger" />
                <Tag value="99% sRGB" severity="warn" />
                <Tag value="32 Zoll" severity="success" />
              </div>
              <div class="flex justify-end gap-3 mt-6">
                <Button label="Merken" severity="secondary" />
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-slate-700">Spezifikationen content.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-slate-700">Bewertungen content.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
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