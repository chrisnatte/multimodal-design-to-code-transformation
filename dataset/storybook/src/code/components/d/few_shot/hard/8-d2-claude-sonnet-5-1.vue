<template>
  <Card
    class="w-[488px] overflow-hidden"
    :pt="{
      body: '!p-0 !gap-0',
      caption: '!gap-1',
      content: '!p-0',
    }"
  >
    <template #header>
      <div
        class="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-6 text-white"
      >
        <span class="text-lg font-medium">ProDesk X500</span>
        <span class="text-xs font-light text-slate-300">Workstation Monitor</span>
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
          <TabPanel value="0" class="flex flex-col gap-3 !p-4">
            <p class="m-0 text-sm text-slate-700">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und
              einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste
              Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="m-0 text-sm text-slate-400">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss
              bietet er alles für anspruchsvolle Workloads.
            </p>
            <div class="flex flex-wrap gap-2">
              <Tag value="4K UHD" severity="info" rounded />
              <Tag value="IPS-Panel" severity="success" rounded />
              <Tag value="USB-C" severity="danger" rounded />
              <Tag value="99% sRGB" severity="warn" rounded />
              <Tag value="32 Zoll" severity="success" rounded />
            </div>
          </TabPanel>
          <TabPanel value="1" class="!p-4">
            <p class="m-0 text-sm text-slate-500">Keine Spezifikationen vorhanden.</p>
          </TabPanel>
          <TabPanel value="2" class="!p-4">
            <p class="m-0 text-sm text-slate-500">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2 px-4 pb-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="success" />
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