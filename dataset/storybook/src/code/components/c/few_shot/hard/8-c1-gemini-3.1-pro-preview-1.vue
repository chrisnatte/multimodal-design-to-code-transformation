<template>
  <Card class="w-[600px] overflow-hidden">
    <template #header>
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center text-white">
        <h1 class="mb-2 text-2xl font-semibold">ProDesk X500</h1>
        <p class="text-slate-400">Workstation Monitor</p>
      </div>
    </template>
    <template #content>
      <TabView>
        <TabPanel header="Beschreibung">
          <div class="flex flex-col gap-4 py-4">
            <p class="text-slate-700 leading-relaxed">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="text-sm text-slate-500 leading-relaxed">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <Tag value="4K UHD" severity="info" class="bg-blue-100 text-blue-700" />
              <Tag value="IPS-Panel" severity="success" class="bg-emerald-100 text-emerald-700" />
              <Tag value="USB-C" severity="danger" class="bg-red-100 text-red-700" />
              <Tag value="99% sRGB" severity="warning" class="bg-orange-100 text-orange-700" />
              <Tag value="32 Zoll" severity="success" class="bg-emerald-100 text-emerald-700" />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Spezifikationen">
          <!-- Content for Spezifikationen -->
        </TabPanel>
        <TabPanel header="Bewertungen">
          <!-- Content for Bewertungen -->
        </TabPanel>
      </TabView>
    </template>
    <template #footer>
      <div class="flex justify-end gap-3 pt-4">
        <Button label="Merken" severity="secondary" text class="bg-slate-100 hover:bg-slate-200 text-slate-700" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" class="bg-emerald-500 hover:bg-emerald-600 border-none" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
</script>