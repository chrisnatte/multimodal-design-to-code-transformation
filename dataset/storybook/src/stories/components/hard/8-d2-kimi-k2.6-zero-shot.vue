<template>
  <div class="flex justify-center p-8 bg-gray-50 min-h-screen">
    <Card class="w-[488px] rounded-xl overflow-hidden shadow-lg" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' }, footer: { class: 'p-0' } }">
      <template #header>
        <div class="flex flex-col items-center justify-center h-[124px] p-2.5 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-center">
          <span class="text-lg font-medium text-white">ProDesk X500</span>
          <span class="text-xs font-light text-gray-400">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-2 py-3 px-4">
                <p class="m-0 text-sm leading-relaxed text-gray-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-xs leading-relaxed text-gray-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2 mt-1">
                  <Tag value="4K UHD" severity="info" class="text-xs font-semibold" />
                  <Tag value="IPS-Panel" severity="success" class="text-xs font-semibold" />
                  <Tag value="USB-C" severity="danger" class="text-xs font-semibold" />
                  <Tag value="99% sRGB" severity="warning" class="text-xs font-semibold" />
                  <Tag value="32 Zoll" class="text-xs font-semibold !bg-emerald-100 !text-emerald-700" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="py-3 px-4">
                <p class="m-0 text-sm text-gray-700">Technische Spezifikationen werden in Kürze verfügbar.</p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="py-3 px-4">
                <p class="m-0 text-sm text-gray-700">Noch keine Bewertungen vorhanden.</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 py-2 px-4">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="success" />
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
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const activeTab = ref('0');
</script>