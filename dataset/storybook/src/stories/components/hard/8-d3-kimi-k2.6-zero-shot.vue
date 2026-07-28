<template>
  <div class="w-[488px] rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col">
    <div class="h-[124px] flex flex-col items-center justify-center gap-2.5 p-2.5 bg-gradient-to-br from-slate-900 to-blue-950">
      <div class="flex flex-col items-center gap-1">
        <span class="text-white text-[17.5px] font-medium leading-tight">ProDesk X500</span>
        <span class="text-slate-400 text-xs font-light leading-tight">Workstation Monitor</span>
      </div>
    </div>
    <div class="flex flex-col px-1 gap-2">
      <Tabs v-model:value="activeTab">
        <TabList class="items-end">
          <Tab value="0" class="text-sm font-bold px-5 py-3">Beschreibung</Tab>
          <Tab value="1" class="text-sm font-bold px-5 py-3">Spezifikationen</Tab>
          <Tab value="2" class="text-sm font-bold px-5 py-3">Bewertungen</Tab>
        </TabList>
        <TabPanels class="py-3 px-4">
          <TabPanel value="0">
            <div class="flex flex-col gap-2">
              <p class="text-slate-700 text-sm leading-relaxed">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-slate-500 text-xs leading-relaxed">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-1">
                <Tag severity="info" value="4K UHD" class="text-xs font-semibold rounded-full" />
                <Tag severity="success" value="IPS-Panel" class="text-xs font-semibold rounded-full" />
                <Tag severity="danger" value="USB-C" class="text-xs font-semibold rounded-full" />
                <Tag severity="warn" value="99% sRGB" class="text-xs font-semibold rounded-full" />
                <Tag severity="success" value="32 Zoll" class="text-xs font-semibold rounded-full" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-slate-500 text-sm">Spezifikationen folgen.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-slate-600 text-sm">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div class="flex justify-end gap-2 py-2 px-4">
        <Button label="Merken" severity="secondary" size="small" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="success" size="small" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const activeTab = ref('0');
</script>