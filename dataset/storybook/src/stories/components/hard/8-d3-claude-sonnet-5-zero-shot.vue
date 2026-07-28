<template>
  <div class="flex justify-center p-8">
    <Card class="w-[488px] overflow-hidden shadow-md rounded-xl">
      <template #header>
        <div
          class="flex flex-col items-center justify-center gap-2 p-4"
          style="background: linear-gradient(135deg, #0f2340 0%, #16335c 100%);"
        >
          <span class="text-white text-lg font-medium">ProDesk X500</span>
          <span class="text-gray-300 text-xs font-light">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-3 py-3">
                <p class="m-0 text-sm text-gray-700 leading-relaxed">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                  32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                  kreative Profis und Entwickler, die höchste Farbtreue und
                  ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-sm text-gray-500 leading-relaxed">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                  Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2 mt-1">
                  <Tag value="4K UHD" severity="info" />
                  <Tag value="IPS-Panel" severity="success" />
                  <Tag value="USB-C" severity="danger" />
                  <Tag value="99% sRGB" severity="warn" />
                  <Tag value="32 Zoll" severity="secondary" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="py-3 text-sm text-gray-700">
                Spezifikationen sind derzeit nicht verfügbar.
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="py-3 text-sm text-gray-700">
                Noch keine Bewertungen vorhanden.
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 px-4 py-2">
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