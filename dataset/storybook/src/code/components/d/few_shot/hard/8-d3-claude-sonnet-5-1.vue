<template>
  <div class="p-6">
    <Card
      class="w-[488px] overflow-hidden"
      :pt="{
        body: '!p-0 !gap-0',
        content: '!p-0',
        footer: '!pt-0',
      }"
    >
      <template #header>
        <div
          class="flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 to-blue-950 px-4 py-6 text-center"
        >
          <span class="text-lg font-medium text-white">ProDesk X500</span>
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
            <TabPanel value="0">
              <div class="flex flex-col gap-3 px-4 py-3">
                <p class="m-0 text-sm text-slate-700">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und
                  einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste
                  Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-sm text-slate-500">
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
            <TabPanel value="1">
              <div class="px-4 py-3">
                <p class="m-0 text-sm text-slate-700">Keine Spezifikationen vorhanden.</p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="px-4 py-3">
                <p class="m-0 text-sm text-slate-700">Noch keine Bewertungen vorhanden.</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="primary" />
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