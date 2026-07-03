<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-2xl overflow-hidden shadow-sm rounded-2xl">
      <template #header>
        <div class="h-44 bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center px-8">
          <div class="flex flex-col items-center gap-1 text-center">
            <h1 class="text-4xl font-semibold text-white leading-tight">{{ state.productName }}</h1>
            <p class="text-slate-300 text-xl">{{ state.productType }}</p>
          </div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6">
          <Tabs v-model:value="state.activeTab">
            <TabList>
              <Tab value="beschreibung">Beschreibung</Tab>
              <Tab value="spezifikationen">Spezifikationen</Tab>
              <Tab value="bewertungen">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="beschreibung">
                <div class="flex flex-col gap-4">
                  <p class="text-slate-700 text-3xl leading-relaxed">
                    Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste&nbsp; Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="text-slate-500 text-2xl leading-relaxed">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>

                  <div class="flex flex-wrap gap-2">
                    <Button label="4K UHD" severity="info" size="small" rounded disabled />
                    <Button label="IPS-Panel" severity="success" size="small" rounded disabled />
                    <Button label="USB-C" severity="danger" size="small" rounded disabled />
                    <Button label="99% sRGB" severity="warn" size="small" rounded disabled />
                    <Button label="32 Zoll" severity="success" size="small" rounded disabled />
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="spezifikationen">
                <p class="text-slate-600 text-lg m-0">Keine weiteren Spezifikationen verfügbar.</p>
              </TabPanel>

              <TabPanel value="bewertungen">
                <p class="text-slate-600 text-lg m-0">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div class="flex justify-end gap-3">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const state = reactive({
  productName: 'ProDesk X500',
  productType: 'Workstation Monitor',
  activeTab: 'beschreibung'
});
</script>