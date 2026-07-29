<template>
  <Card class="w-full max-w-2xl overflow-hidden border-none shadow-md">
    <template #header>
      <div class="flex h-40 flex-col items-center justify-center bg-[#1a2b4c] p-6 text-center">
        <h1 class="text-2xl font-medium text-white">ProDesk X500</h1>
        <p class="mt-1 text-sm text-slate-400">Workstation Monitor</p>
      </div>
    </template>
    <template #content>
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0" class="font-semibold">Beschreibung</Tab>
          <Tab value="1" class="font-semibold text-slate-500">Spezifikationen</Tab>
          <Tab value="2" class="font-semibold text-slate-500">Bewertungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="mt-2 flex flex-col gap-4">
              <p class="text-[15px] leading-relaxed text-slate-700">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-[13px] leading-relaxed text-slate-500">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <Tag value="4K UHD" class="!bg-blue-100 !text-blue-700 !font-bold" />
                <Tag value="IPS-Panel" class="!bg-emerald-100 !text-emerald-700 !font-bold" />
                <Tag value="USB-C" class="!bg-red-100 !text-red-700 !font-bold" />
                <Tag value="99% sRGB" class="!bg-orange-100 !text-orange-700 !font-bold" />
                <Tag value="32 Zoll" class="!bg-emerald-100 !text-emerald-700 !font-bold" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Spezifikationen Content -->
          </TabPanel>
          <TabPanel value="2">
            <!-- Bewertungen Content -->
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #footer>
      <div class="flex justify-end gap-3 pt-2">
        <Button label="Merken" class="!bg-slate-100 !text-slate-600 !border-none hover:!bg-slate-200 font-semibold" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" class="!bg-[#10b981] !border-none hover:!bg-[#059669] font-semibold" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
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