<template>
  <div class="flex p-6">
    <Card
      class="w-[488px] overflow-hidden border border-surface-200 shadow-sm"
      :pt="{
        body: { class: 'p-0 gap-0' },
        content: { class: 'p-0' },
      }"
    >
      <template #header>
        <div
          class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white"
        >
          <span class="text-[17.5px] font-medium">ProDesk X500</span>
          <span class="text-xs font-light text-slate-300">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-2 px-1">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="beschreibung">Beschreibung</Tab>
              <Tab value="spezifikationen">Spezifikationen</Tab>
              <Tab value="bewertungen">Bewertungen</Tab>
            </TabList>

            <TabPanels>
              <TabPanel value="beschreibung">
                <div class="flex flex-col gap-2 px-4 py-3">
                  <p class="m-0 text-sm leading-6 text-slate-700">
                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer
                    Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und
                    ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="m-0 text-xs leading-5 text-slate-500">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er
                    alles für anspruchsvolle Workloads.
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

              <TabPanel value="spezifikationen">
                <div class="px-4 py-3 text-sm text-slate-700">32 Zoll IPS-Display mit 4K UHD-Auflösung.</div>
              </TabPanel>

              <TabPanel value="bewertungen">
                <div class="px-4 py-3 text-sm text-slate-700">Noch keine Bewertungen vorhanden.</div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div class="flex justify-end gap-2 px-4 py-2">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
          </div>
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

const activeTab = ref('beschreibung')
</script>