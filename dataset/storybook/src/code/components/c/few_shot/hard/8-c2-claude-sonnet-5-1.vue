<template>
  <Card
    :pt="{
      root: 'w-md overflow-hidden',
      body: '!p-0 !gap-0',
      caption: '!gap-1 bg-gradient-to-br from-slate-900 to-blue-950 text-white px-6 py-5',
      content: 'flex flex-col gap-4 px-6 py-4',
      footer: 'px-6 pb-6 pt-2',
    }"
  >
    <template #title>ProDesk X500</template>
    <template #subtitle>
      <span class="text-slate-300">Workstation Monitor</span>
    </template>
    <template #content>
      <Tabs value="0">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
        <TabPanels :pt="{ root: '!px-0 !py-4' }">
          <TabPanel value="0">
            <p class="m-0 text-slate-700">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer
              Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und
              ergonomisches Arbeiten benötigen.
            </p>
            <p class="mt-3 mb-0 text-slate-500">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss bietet er alles
              für anspruchsvolle Workloads.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 text-slate-700">Spezifikationen folgen.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 text-slate-700">Bewertungen folgen.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div class="flex flex-wrap gap-2">
        <Tag value="4K UHD" severity="info" />
        <Tag value="IPS-Panel" severity="success" />
        <Tag value="USB-C" severity="danger" />
        <Tag value="99% sRGB" severity="warn" />
        <Tag value="32 Zoll" severity="success" />
      </div>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <Button label="Merken" severity="secondary" outlined />
        <Button label="In den Warenkorb" severity="success" icon="pi pi-shopping-cart" />
      </div>
    </template>
  </Card>
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