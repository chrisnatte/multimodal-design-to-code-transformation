<template>
  <div class="flex justify-center p-8">
    <Card class="w-[34rem] overflow-hidden shadow-md" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }">
      <template #header>
        <div class="bg-gradient-to-br from-slate-900 to-blue-950 text-white px-6 py-6">
          <h2 class="text-xl font-semibold m-0">ProDesk X500</h2>
          <p class="text-sm text-slate-300 m-0 mt-1">Workstation Monitor</p>
        </div>
      </template>
      <template #content>
        <div class="px-6 pt-2">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="py-4">
                  <p class="text-gray-700 leading-relaxed m-0">
                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="text-gray-500 leading-relaxed mt-3 mb-0">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>

                  <div class="flex flex-wrap gap-2 mt-4">
                    <Tag value="4K UHD" severity="info" rounded></Tag>
                    <Tag value="IPS-Panel" severity="success" rounded></Tag>
                    <Tag value="USB-C" severity="danger" rounded></Tag>
                    <Tag value="99% sRGB" severity="warn" rounded></Tag>
                    <Tag value="32 Zoll" severity="success" rounded></Tag>
                  </div>

                  <div class="flex justify-end gap-3 mt-6">
                    <Button label="Merken" severity="secondary" variant="outlined" />
                    <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="py-4 text-gray-500">Spezifikationen folgen in Kürze.</div>
              </TabPanel>
              <TabPanel value="2">
                <div class="py-4 text-gray-500">Noch keine Bewertungen vorhanden.</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
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