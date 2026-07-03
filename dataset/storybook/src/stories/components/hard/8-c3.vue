<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-3xl overflow-hidden shadow-sm rounded-2xl">
      <template #header>
        <div class="h-40 bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center gap-1">
          <h2 class="text-4xl font-semibold text-white">ProDesk X500</h2>
          <p class="text-slate-400 text-lg">Workstation Monitor</p>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-5 p-2">
          <Tabs v-model:value="state.activeTab" value="beschreibung">
            <TabList>
              <Tab value="beschreibung">Beschreibung</Tab>
              <Tab value="spezifikationen">Spezifikationen</Tab>
              <Tab value="bewertungen">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="beschreibung">
                <div class="flex flex-col gap-4 pt-2">
                  <p class="text-slate-700 text-3xl leading-relaxed">
                    Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste&nbsp; Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>

                  <p class="text-slate-500 text-2xl leading-relaxed">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>

                  <div class="flex flex-wrap gap-3">
                    <Button label="4K UHD" severity="info" rounded size="small" />
                    <Button label="IPS-Panel" severity="success" rounded size="small" />
                    <Button label="USB-C" severity="danger" rounded size="small" />
                    <Button label="99% sRGB" severity="warn" rounded size="small" />
                    <Button label="32 Zoll" severity="success" rounded size="small" />
                  </div>

                  <div class="flex justify-end gap-3 pt-2">
                    <Button label="Merken" severity="secondary" />
                    <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="spezifikationen">
                <div class="py-4 text-slate-600">Spezifikationen sind derzeit nicht verfügbar.</div>
              </TabPanel>

              <TabPanel value="bewertungen">
                <div class="py-4 text-slate-600">Noch keine Bewertungen vorhanden.</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>