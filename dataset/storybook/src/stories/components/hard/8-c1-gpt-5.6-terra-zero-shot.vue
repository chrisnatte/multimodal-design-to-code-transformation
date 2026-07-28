<template>
  <main class="min-h-screen bg-white p-6">
    <Card class="mx-auto w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
      <template #header>
        <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <h1 class="text-lg font-medium leading-tight">ProDesk X500</h1>
          <p class="mt-1 text-xs text-slate-400">Workstation Monitor</p>
        </div>
      </template>

      <template #content>
        <div class="flex border-b border-surface-200">
          <Button
            label="Beschreibung"
            text
            class="flex-1 rounded-none border-b-2 px-2 py-3 text-sm font-semibold"
            :class="selectedTab === 'beschreibung'
              ? 'border-primary text-primary'
              : 'border-transparent text-surface-500'"
            @click="selectedTab = 'beschreibung'"
          />
          <Button
            label="Spezifikationen"
            text
            class="flex-1 rounded-none border-b-2 px-2 py-3 text-sm font-semibold"
            :class="selectedTab === 'spezifikationen'
              ? 'border-primary text-primary'
              : 'border-transparent text-surface-500'"
            @click="selectedTab = 'spezifikationen'"
          />
          <Button
            label="Bewertungen"
            text
            class="flex-1 rounded-none border-b-2 px-2 py-3 text-sm font-semibold"
            :class="selectedTab === 'bewertungen'
              ? 'border-primary text-primary'
              : 'border-transparent text-surface-500'"
            @click="selectedTab = 'bewertungen'"
          />
        </div>

        <section class="px-5 pt-3">
          <p class="text-[15px] leading-[23px] text-slate-700">
            Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
          </p>

          <p class="mt-2 text-xs leading-5 text-slate-500">
            Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
          </p>

          <div class="mt-2 flex flex-wrap gap-2">
            <Tag value="4K UHD" severity="info" class="text-xs font-semibold" />
            <Tag value="IPS-Panel" severity="success" class="text-xs font-semibold" />
            <Tag value="USB-C" severity="danger" class="text-xs font-semibold" />
            <Tag value="99% sRGB" severity="warn" class="text-xs font-semibold" />
            <Tag value="32 Zoll" severity="success" class="text-xs font-semibold" />
          </div>
        </section>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 px-5 pb-2 pt-4">
          <Button label="Merken" severity="secondary" class="px-3 py-2 text-sm" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" class="px-3 py-2 text-sm" />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

const selectedTab = ref('beschreibung')
</script>