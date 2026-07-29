<template>
  <div class="w-[536px] p-6">
    <Card class="overflow-hidden border border-surface-200 shadow-sm">
      <template #header>
        <div
          class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-950 to-blue-950 text-white"
        >
          <span class="text-[17.5px] font-medium">ProDesk X500</span>
          <span class="text-xs font-light text-slate-400">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="description">Beschreibung</Tab>
            <Tab value="specifications">Spezifikationen</Tab>
            <Tab value="reviews">Bewertungen</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="description">
              <div class="flex flex-col gap-2 px-4 py-3">
                <p class="m-0 text-sm leading-6 text-surface-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display
                  und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die
                  höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-xs leading-5 text-surface-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss
                  bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2">
                  <Tag value="4K UHD" severity="info" />
                  <Tag value="IPS-Panel" severity="success" />
                  <Tag value="USB-C" severity="danger" />
                  <Tag value="99% sRGB" severity="warn" />
                  <Tag value="32 Zoll" severity="success" />
                </div>
              </div>
            </TabPanel>

            <TabPanel value="specifications">
              <div class="px-4 py-3 text-sm text-surface-700">32 Zoll IPS-Display mit 4K UHD Auflösung.</div>
            </TabPanel>

            <TabPanel value="reviews">
              <div class="px-4 py-3 text-sm text-surface-700">Noch keine Bewertungen vorhanden.</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" size="small" />
          <Button
            label="In den Warenkorb"
            icon="pi pi-shopping-cart"
            severity="primary"
            size="small"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const activeTab = ref('description')
</script>