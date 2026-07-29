<template>
  <div class="flex justify-center p-6 bg-white">
    <Card class="w-[488px] overflow-hidden shadow-md rounded-xl">
      <template #header>
        <div
          class="flex items-center justify-center py-8 px-4"
          style="background: linear-gradient(135deg, #0f2c4c 0%, #16324f 100%);"
        >
          <div class="flex flex-col items-center gap-1">
            <span class="text-white text-lg font-medium">ProDesk X500</span>
            <span class="text-gray-300 text-xs font-light">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 px-1">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col gap-2 py-3 px-2">
                  <p class="text-sm text-gray-700 m-0">
                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="text-sm text-gray-500 m-0">
                    Mit 99% sRGB-Abdeckung, werksseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <Tag value="4K UHD" severity="info" rounded />
                    <Tag value="IPS-Panel" severity="success" rounded />
                    <Tag value="USB-C" severity="danger" rounded />
                    <Tag value="99% sRGB" severity="warn" rounded />
                    <Tag value="32 Zoll" severity="secondary" rounded />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="py-3 px-2">
                  <p class="text-sm text-gray-700 m-0">Spezifikationen sind aktuell nicht verfügbar.</p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div class="py-3 px-2">
                  <p class="text-sm text-gray-700 m-0">Noch keine Bewertungen vorhanden.</p>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 px-4 pb-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
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