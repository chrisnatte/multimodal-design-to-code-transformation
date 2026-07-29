<template>
  <main class="min-h-screen bg-white p-6 font-sans">
    <Card class="mx-auto w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <template #header>
        <div
          class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#181827] via-[#14294a] to-[#123d6d] text-white"
        >
          <h1 class="m-0 text-[18px] font-medium leading-tight">ProDesk X500</h1>
          <span class="text-xs font-light text-slate-300">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <Tabs v-model:value="activeTab" class="-mx-5 -mt-5">
          <TabList class="border-b border-slate-200 bg-white">
            <Tab value="description" class="!px-4 !py-[14px] !text-sm !font-bold">
              Beschreibung
            </Tab>
            <Tab value="specifications" class="!px-4 !py-[14px] !text-sm !font-bold">
              Spezifikationen
            </Tab>
            <Tab value="reviews" class="!px-4 !py-[14px] !text-sm !font-bold">
              Bewertungen
            </Tab>
          </TabList>

          <TabPanels class="bg-white">
            <TabPanel value="description" class="!px-5 !py-3">
              <div class="flex flex-col gap-2">
                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display
                  und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die
                  höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>

                <p class="m-0 text-xs leading-5 text-slate-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss
                  bietet er alles für anspruchsvolle Workloads.
                </p>

                <div class="flex flex-wrap gap-2 pt-0.5">
                  <Tag value="4K UHD" class="!bg-sky-100 !px-2 !py-0.5 !text-xs !font-bold !text-sky-700" />
                  <Tag value="IPS-Panel" class="!bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                  <Tag value="USB-C" class="!bg-red-100 !px-2 !py-0.5 !text-xs !font-bold !text-red-600" />
                  <Tag value="99% sRGB" class="!bg-orange-100 !px-2 !py-0.5 !text-xs !font-bold !text-orange-600" />
                  <Tag value="32 Zoll" class="!bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                </div>
              </div>
            </TabPanel>

            <TabPanel value="specifications" class="!px-5 !py-3">
              <div class="min-h-[139px]"></div>
            </TabPanel>

            <TabPanel value="reviews" class="!px-5 !py-3">
              <p class="m-0 text-sm text-slate-700">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 pt-1">
          <Button
            label="Merken"
            severity="secondary"
            class="!h-[33px] !border-0 !bg-slate-100 !px-3 !text-sm !font-medium !text-slate-600"
          />
          <Button
            label="In den Warenkorb"
            icon="pi pi-cart-plus"
            class="!h-[33px] !border-0 !bg-emerald-500 !px-3 !text-sm !font-medium !text-white"
          />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
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