<template>
  <div class="flex justify-center p-8 bg-gray-100">
    <Card class="w-[34rem] overflow-hidden shadow-md">
      <template #header>
        <div class="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-6 text-center">
          <h2 class="text-white text-xl font-semibold m-0">ProDesk X500</h2>
          <p class="text-gray-300 text-sm mt-1 mb-0">Workstation Monitor</p>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="activeTab" class="mt-0">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="text-gray-700 leading-relaxed m-0">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                kreative Profis und Entwickler, die höchste Farbtreue und
                ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-gray-500 leading-relaxed mt-4 mb-4">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <Tag value="4K UHD" severity="info" class="text-sm" />
                <Tag value="IPS-Panel" severity="success" class="text-sm" />
                <Tag value="USB-C" severity="danger" class="text-sm" />
                <Tag value="99% sRGB" severity="warn" class="text-sm" />
                <Tag value="32 Zoll" severity="success" class="text-sm" />
              </div>

              <div class="flex justify-end gap-3">
                <Button label="Merken" severity="secondary" outlined />
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
              </div>
            </TabPanel>

            <TabPanel value="1">
              <p class="text-gray-700 m-0">Spezifikationen werden hier angezeigt.</p>
            </TabPanel>

            <TabPanel value="2">
              <p class="text-gray-700 m-0">Bewertungen werden hier angezeigt.</p>
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