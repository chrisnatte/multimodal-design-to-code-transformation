<template>
  <div class="p-6">
    <Card class="w-[488px] overflow-hidden rounded-xl shadow-sm border border-surface-200">
      <template #header>
        <div class="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 py-10 text-white">
          <h2 class="m-0 text-lg font-medium">ProDesk X500</h2>
          <span class="mt-1 text-xs font-light text-slate-300">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <Tabs value="0" class="-mt-5">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-2">
                <p class="m-0 text-sm leading-relaxed text-surface-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-sm leading-relaxed text-surface-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="mt-1 flex flex-wrap gap-2">
                  <Tag value="4K UHD" class="!bg-blue-100 !text-blue-700" />
                  <Tag value="IPS-Panel" class="!bg-emerald-100 !text-emerald-700" />
                  <Tag value="USB-C" class="!bg-red-100 !text-red-700" />
                  <Tag value="99% sRGB" class="!bg-orange-100 !text-orange-700" />
                  <Tag value="32 Zoll" class="!bg-emerald-100 !text-emerald-700" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 pt-2 text-sm text-surface-700">Spezifikationen hier...</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 pt-2 text-sm text-surface-700">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex justify-end gap-3 pt-2">
          <Button label="Merken" severity="secondary" class="!bg-surface-100 !text-surface-700 !border-none hover:!bg-surface-200" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="primary" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
</script>