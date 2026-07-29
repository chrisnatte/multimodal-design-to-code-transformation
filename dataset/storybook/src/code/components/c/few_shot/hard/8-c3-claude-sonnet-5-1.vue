<template>
  <Card
    :pt="{
      root: 'w-md overflow-hidden',
      body: '!p-0 !gap-0',
      caption: '!gap-0',
      content: 'flex flex-col gap-4 p-6',
      footer: 'flex items-center justify-end gap-2 px-6 pb-6 !mt-0',
    }"
  >
    <template #header>
      <div
        class="flex flex-col gap-1 bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-8 text-center text-white"
      >
        <span class="text-xl font-semibold">ProDesk X500</span>
        <span class="text-sm text-slate-300">Workstation Monitor</span>
      </div>
    </template>
    <template #title>
      <Tabs value="0" :pt="{ root: 'px-6 pt-4' }">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
      </Tabs>
    </template>
    <template #content>
      <p class="m-0 text-slate-600">
        Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und
        einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste
        Farbtreue und ergonomisches Arbeiten benötigen.
      </p>
      <p class="m-0 text-slate-500">
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
    </template>
    <template #footer>
      <Button label="Merken" severity="secondary" outlined />
      <Button label="In den Warenkorb" severity="success" icon="pi pi-shopping-cart" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
</script>