<template>
  <Card
    class="w-md overflow-hidden"
    :pt="{
      header: '!p-0',
      body: '!p-0',
      content: '!p-0',
      footer: 'flex items-center justify-end gap-2 p-4',
    }"
  >
    <template #header>
      <div class="flex flex-col gap-1 bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-8 text-center text-white">
        <span class="text-xl font-semibold">ProDesk X500</span>
        <span class="text-sm text-slate-300">Workstation Monitor</span>
      </div>
    </template>
    <template #content>
      <TabView>
        <TabPanel header="Beschreibung">
          <div class="flex flex-col gap-4 px-6 py-4">
            <p class="text-sm text-slate-600">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und
              einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste
              Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="text-sm text-slate-600">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C Thunderbolt-Anschluss
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
        <TabPanel header="Spezifikationen">
          <div class="px-6 py-4 text-sm text-slate-600">Keine Daten verfügbar.</div>
        </TabPanel>
        <TabPanel header="Bewertungen">
          <div class="px-6 py-4 text-sm text-slate-600">Keine Bewertungen vorhanden.</div>
        </TabPanel>
      </TabView>
    </template>
    <template #footer>
      <Button label="Merken" severity="secondary" outlined />
      <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import TabView from 'primevue/tabview'
  import TabPanel from 'primevue/tabpanel'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
</script>