<template>
  <div class="flex justify-center p-8">
    <Card class="w-full max-w-md shadow-md overflow-hidden">
      <template #header>
        <div class="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 text-center">
          <h2 class="text-xl font-semibold m-0">ProDesk X500</h2>
          <p class="text-sm text-slate-300 mt-1 m-0">Workstation Monitor</p>
        </div>
      </template>
      <template #content>
        <TabView>
          <TabPanel header="Beschreibung">
            <div class="flex flex-col gap-4 pt-2">
              <p class="text-sm text-gray-700 m-0">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                kreative Profis und Entwickler, die höchste Farbtreue und
                ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-sm text-gray-500 m-0">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>

              <div class="flex flex-wrap gap-2">
                <Tag value="4K UHD" severity="info" rounded></Tag>
                <Tag value="IPS-Panel" severity="success" rounded></Tag>
                <Tag value="USB-C" severity="danger" rounded></Tag>
                <Tag value="99% sRGB" severity="warning" rounded></Tag>
                <Tag value="32 Zoll" severity="success" rounded></Tag>
              </div>

              <div class="flex justify-end gap-2 pt-2">
                <Button label="Merken" severity="secondary" outlined></Button>
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success"></Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Spezifikationen">
            <p class="text-sm text-gray-500">Spezifikationen folgen in Kürze.</p>
          </TabPanel>
          <TabPanel header="Bewertungen">
            <p class="text-sm text-gray-500">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabView>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const activeTab = ref(0)
</script>