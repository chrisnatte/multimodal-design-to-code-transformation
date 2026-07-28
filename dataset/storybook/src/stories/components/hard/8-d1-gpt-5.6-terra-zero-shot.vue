<template>
  <main class="min-h-screen bg-white p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      :pt="{
        body: { class: 'p-0' },
        content: { class: 'p-0' }
      }"
    >
      <section
        class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-2.5 py-2.5 text-center text-white"
      >
        <h1 class="text-[18px] font-medium leading-[21px]">ProDesk X500</h1>
        <span class="text-xs font-light leading-[15px] text-slate-400">Workstation Monitor</span>
      </section>

      <section class="flex flex-col gap-2 px-1 pb-0">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="border-b border-slate-200 bg-white">
            <Tab
              value="description"
              class="px-4 py-3 text-sm font-bold"
              :pt="{
                root: {
                  class: activeTab === 'description'
                    ? '!border-b-2 !border-emerald-500 !text-emerald-500'
                    : '!border-b-2 !border-transparent !text-slate-500'
                }
              }"
            >
              Beschreibung
            </Tab>
            <Tab
              value="specifications"
              class="px-4 py-3 text-sm font-bold"
              :pt="{
                root: {
                  class: activeTab === 'specifications'
                    ? '!border-b-2 !border-emerald-500 !text-emerald-500'
                    : '!border-b-2 !border-transparent !text-slate-500'
                }
              }"
            >
              Spezifikationen
            </Tab>
            <Tab
              value="reviews"
              class="px-4 py-3 text-sm font-bold"
              :pt="{
                root: {
                  class: activeTab === 'reviews'
                    ? '!border-b-2 !border-emerald-500 !text-emerald-500'
                    : '!border-b-2 !border-transparent !text-slate-500'
                }
              }"
            >
              Bewertungen
            </Tab>
          </TabList>

          <TabPanels class="bg-white">
            <TabPanel value="description" class="px-4 pb-2 pt-3">
              <div class="flex flex-col gap-2">
                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display
                  und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die
                  höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-xs leading-[21px] text-slate-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss
                  bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2">
                  <Tag value="4K UHD" severity="info" class="text-xs font-bold" />
                  <Tag value="IPS-Panel" severity="success" class="text-xs font-bold" />
                  <Tag value="USB-C" severity="danger" class="text-xs font-bold" />
                  <Tag value="99% sRGB" severity="warn" class="text-xs font-bold" />
                  <Tag value="32 Zoll" severity="success" class="text-xs font-bold" />
                </div>
              </div>
            </TabPanel>

            <TabPanel value="specifications" class="px-4 py-3">
              <span class="text-sm text-slate-600">Spezifikationen</span>
            </TabPanel>

            <TabPanel value="reviews" class="px-4 py-3">
              <span class="text-sm text-slate-600">Noch keine Bewertungen vorhanden.</span>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <footer class="flex justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" size="small" />
          <Button
            label="In den Warenkorb"
            icon="pi pi-cart-plus"
            size="small"
            class="!bg-emerald-500 !border-emerald-500"
          />
        </footer>
      </section>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('description')
</script>