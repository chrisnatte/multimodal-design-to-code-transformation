<template>
  <div class="flex min-h-screen items-center justify-center p-6">
    <Card class="w-full max-w-[488px] overflow-hidden">
      <template #header>
        <div class="flex h-[125px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-blue-900 text-white">
          <h1 class="text-lg font-medium">ProDesk X500</h1>
          <p class="text-xs text-slate-400">Workstation Monitor</p>
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
              <div class="flex flex-col gap-2">
                <p class="m-0 text-sm leading-6">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-xs leading-5 text-surface-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
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
              <div class="flex flex-col gap-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-surface-500">Display</span>
                  <span>32 Zoll IPS</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-surface-500">Auflösung</span>
                  <span>4K UHD</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-surface-500">Anschluss</span>
                  <span>USB-C</span>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="reviews">
              <p class="m-0 text-sm text-surface-500">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
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