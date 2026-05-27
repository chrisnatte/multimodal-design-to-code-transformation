<template>
  <Card class="max-w-3xl mx-auto shadow-sm rounded-2xl overflow-hidden border border-slate-200">
    <template #header>
      <div class="h-48 bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center text-center px-6">
        <h1 class="text-4xl font-semibold text-white leading-tight">ProDesk X500</h1>
        <p class="text-slate-300 text-lg mt-2">Workstation Monitor</p>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-6 p-2">
        <Tabs value="0" class="w-full">
          <TabList class="border-b border-slate-200">
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-2">
                <p class="text-slate-700 text-3xl leading-relaxed">
                  Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste&nbsp; Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-slate-500 text-2xl leading-relaxed">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>

                <div class="flex flex-wrap gap-3">
                  <Tag value="4K UHD" severity="info" rounded />
                  <Tag value="IPS-Panel" severity="success" rounded />
                  <Tag value="USB-C" severity="danger" rounded />
                  <Tag value="99% sRGB" severity="warn" rounded />
                  <Tag value="32 Zoll" severity="success" rounded />
                </div>

                <div class="flex justify-end gap-3 pt-3">
                  <Button
                    label="Merken"
                    severity="secondary"
                    :disabled="state.saved"
                    @click="state.saved = true"
                  />
                  <Button
                    label="In den Warenkorb"
                    icon="pi pi-shopping-cart"
                    severity="success"
                    @click="state.inCart = true"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="py-6 text-slate-500">Spezifikationen</div>
            </TabPanel>
            <TabPanel value="2">
              <div class="py-6 text-slate-500">Bewertungen</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const state = reactive({
  saved: false,
  inCart: false
})
</script>