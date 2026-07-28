<template>
  <div class="min-h-screen bg-gray-50 flex items-start justify-center p-8">
    <Card class="w-full max-w-[28rem] shadow-lg rounded-xl overflow-hidden">
      <template #header>
        <div class="bg-slate-900 text-center py-10 px-6">
          <div class="text-white text-xl font-medium mb-1">ProDesk X500</div>
          <div class="text-slate-400 text-sm">Workstation Monitor</div>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels class="px-5 pt-4 pb-5">
            <TabPanel value="0">
              <div class="flex flex-col gap-4">
                <p class="text-gray-700 leading-relaxed">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2">
                  <Tag value="4K UHD" severity="info" class="!bg-sky-50 !text-sky-700 !font-semibold" />
                  <Tag value="IPS-Panel" severity="success" class="!bg-emerald-50 !text-emerald-700 !font-semibold" />
                  <Tag value="USB-C" severity="danger" class="!bg-rose-50 !text-rose-700 !font-semibold" />
                  <Tag value="99% sRGB" severity="warn" class="!bg-orange-50 !text-orange-700 !font-semibold" />
                  <Tag value="32 Zoll" severity="success" class="!bg-emerald-50 !text-emerald-700 !font-semibold" />
                </div>
                <div class="flex justify-end gap-2 mt-2">
                  <Button label="Merken" variant="outlined" severity="secondary" />
                  <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="text-gray-500 m-0">Spezifikationen werden geladen...</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="text-gray-500 m-0">Bewertungen werden geladen...</p>
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
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const activeTab = ref('0');
</script>