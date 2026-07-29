<template>
  <div class="p-6 flex justify-center bg-gray-50">
    <div class="rounded-xl overflow-hidden shadow-md bg-white w-[488px]">
      <!-- Header -->
      <div class="flex flex-col items-center justify-center gap-1 py-6 px-4"
           style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);">
        <span class="text-white text-lg font-medium">ProDesk X500</span>
        <span class="text-slate-300 text-xs font-light">Workstation Monitor</span>
      </div>

      <!-- Body -->
      <div class="px-1">
        <TabView v-model:activeIndex="activeTab">
          <TabPanel header="Beschreibung">
            <div class="flex flex-col gap-3 px-4 py-3">
              <p class="text-sm text-gray-700 m-0">
                Der ProDesk X500 ist ein professioneller  Workstation-Monitor mit
                32 Zoll IPS-Display und einer Auflösung von 4K  UHD. Entwickelt für
                kreative Profis und Entwickler, die höchste  Farbtreue und
                ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-sm text-gray-500 m-0">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-1">
                <Tag value="4K UHD" severity="info" class="text-xs"></Tag>
                <Tag value="IPS-Panel" severity="success" class="text-xs"></Tag>
                <Tag value="USB-C" severity="danger" class="text-xs"></Tag>
                <Tag value="99% sRGB" severity="warning" class="text-xs"></Tag>
                <Tag value="32 Zoll" severity="success" class="text-xs"></Tag>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Spezifikationen">
            <div class="px-4 py-3 text-sm text-gray-700">
              Spezifikationen sind derzeit nicht verfügbar.
            </div>
          </TabPanel>
          <TabPanel header="Bewertungen">
            <div class="px-4 py-3 text-sm text-gray-700">
              Noch keine Bewertungen vorhanden.
            </div>
          </TabPanel>
        </TabView>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 px-4 py-3">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const activeTab = ref(0)
</script>