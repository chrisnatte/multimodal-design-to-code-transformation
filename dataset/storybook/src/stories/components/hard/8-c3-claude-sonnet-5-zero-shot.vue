<template>
  <div class="flex justify-center items-start p-8 bg-gray-50 min-h-screen">
    <Card class="w-[540px] overflow-hidden shadow-md" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }">
      <template #header>
        <div class="bg-gradient-to-r from-slate-900 to-blue-950 text-white px-6 py-6">
          <h2 class="text-xl font-semibold m-0">ProDesk X500</h2>
          <p class="text-sm text-slate-300 m-0">Workstation Monitor</p>
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
                <div class="py-4 flex flex-col gap-3">
                  <p class="text-gray-600 m-0 leading-relaxed">
                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="text-gray-400 m-0 leading-relaxed">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>

                  <div class="flex flex-wrap gap-2 mt-2">
                    <Tag value="4K UHD" severity="info" class="rounded-full" />
                    <Tag value="IPS-Panel" severity="success" class="rounded-full" />
                    <Tag value="USB-C" severity="danger" class="rounded-full" />
                    <Tag value="99% sRGB" severity="warn" class="rounded-full" />
                    <Tag value="32 Zoll" severity="success" class="rounded-full" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="py-4">
                  <p class="text-gray-600 m-0">Spezifikationen folgen.</p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div class="py-4">
                  <p class="text-gray-600 m-0">Bewertungen folgen.</p>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div class="flex justify-end gap-3 py-4">
            <Button label="Merken" severity="secondary" variant="outlined" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
          </div>
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