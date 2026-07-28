<template>
  <div class="flex justify-center p-6">
    <Card class="w-[488px] overflow-hidden shadow-md rounded-xl">
      <template #header>
        <div
          class="flex flex-col items-center justify-center gap-2 p-4"
          style="background: linear-gradient(135deg, #0f2545 0%, #16345e 100%);"
        >
          <span class="text-white text-lg font-medium">ProDesk X500</span>
          <span class="text-gray-300 text-xs font-light">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <div class="px-1">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="text-sm text-gray-700 leading-relaxed m-0">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                  32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                  kreative Profis und Entwickler, die höchste Farbtreue und
                  ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-sm text-gray-500 leading-relaxed mt-2 mb-3">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                  Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2 mb-2">
                  <Tag value="4K UHD" severity="info" rounded></Tag>
                  <Tag value="IPS-Panel" severity="success" rounded></Tag>
                  <Tag value="USB-C" severity="danger" rounded></Tag>
                  <Tag value="99% sRGB" severity="warn" rounded></Tag>
                  <Tag value="32 Zoll" severity="success" rounded></Tag>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <p class="text-sm text-gray-500 m-0">Keine Spezifikationen vorhanden.</p>
              </TabPanel>
              <TabPanel value="2">
                <p class="text-sm text-gray-500 m-0">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2">
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