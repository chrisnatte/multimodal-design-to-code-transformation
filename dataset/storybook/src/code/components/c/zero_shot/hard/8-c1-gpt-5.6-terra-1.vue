<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm [&_.p-card-body]:p-0 [&_.p-card-content]:p-0"
    >
      <template #header>
        <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-center">
          <h1 class="text-lg font-medium text-white">ProDesk X500</h1>
          <p class="mt-0.5 text-xs text-slate-400">Workstation Monitor</p>
        </div>
      </template>

      <Tabs v-model:value="activeTab">
        <TabList class="px-1">
          <Tab value="description" class="text-sm font-semibold">Beschreibung</Tab>
          <Tab value="specifications" class="text-sm font-semibold">Spezifikationen</Tab>
          <Tab value="reviews" class="text-sm font-semibold">Bewertungen</Tab>
        </TabList>
      </Tabs>

      <section class="px-5 pb-2 pt-3">
        <p class="text-sm leading-[1.45rem] text-slate-700">
          Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
          32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
          kreative Profis und Entwickler, die höchste Farbtreue und
          ergonomisches Arbeiten benötigen.
        </p>

        <p class="mt-2 text-xs leading-5 text-slate-500">
          Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-
          Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
        </p>

        <div class="mt-2 flex flex-wrap gap-2">
          <Tag value="4K UHD" severity="info" class="text-xs font-semibold" />
          <Tag value="IPS-Panel" severity="success" class="text-xs font-semibold" />
          <Tag value="USB-C" severity="danger" class="text-xs font-semibold" />
          <Tag value="99% sRGB" severity="warn" class="text-xs font-semibold" />
          <Tag value="32 Zoll" severity="success" class="text-xs font-semibold" />
        </div>

        <div class="mt-7 flex justify-end gap-2">
          <Button label="Merken" severity="secondary" class="text-sm" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" class="text-sm" />
        </div>
      </section>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const activeTab = ref('description')
</script>