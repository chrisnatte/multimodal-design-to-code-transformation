<template>
  <div class="w-md p-6">
    <Card
      :pt="{
        body: '!p-0 !gap-0',
        caption: 'bg-gradient-to-br from-slate-900 to-blue-900 rounded-t-xl px-6 py-6 text-center text-white',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="rounded-t-xl bg-gradient-to-br from-slate-900 to-blue-900 px-6 py-6 text-center">
          <h2 class="text-lg font-semibold text-white">ProDesk X500</h2>
          <p class="text-sm text-slate-300">Workstation Monitor</p>
        </div>
      </template>
      <template #content>
        <Tabs value="0">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-3 p-4">
                <p class="text-sm text-slate-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer
                  Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und
                  ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-sm text-slate-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss bietet er
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
            <TabPanel value="1">
              <div class="p-4 text-sm text-slate-700">Spezifikationen folgen in Kürze.</div>
            </TabPanel>
            <TabPanel value="2">
              <div class="p-4 text-sm text-slate-700">Noch keine Bewertungen vorhanden.</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 px-4 pb-4">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
</script>