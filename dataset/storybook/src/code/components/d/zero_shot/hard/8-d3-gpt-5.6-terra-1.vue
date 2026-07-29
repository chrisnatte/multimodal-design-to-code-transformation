<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6 font-sans">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            :pt="{ content: { class: '!p-0' } }"
        >
            <template #content>
                <header class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#18192e] via-[#142342] to-[#123b68] px-2.5 py-2.5 text-white">
                    <h1 class="m-0 text-[18px] font-medium leading-tight">ProDesk X500</h1>
                    <span class="text-xs font-light text-slate-300">Workstation Monitor</span>
                </header>

                <section class="px-5 pt-0">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList class="!border-b !border-slate-200">
                            <Tab value="description" class="!px-5 !py-3 !text-sm !font-bold">
                                Beschreibung
                            </Tab>
                            <Tab value="specifications" class="!px-5 !py-3 !text-sm !font-bold">
                                Spezifikationen
                            </Tab>
                            <Tab value="reviews" class="!px-5 !py-3 !text-sm !font-bold">
                                Bewertungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!p-0">
                            <TabPanel value="description" class="!px-0 !pb-0 !pt-3">
                                <div class="flex flex-col gap-2">
                                    <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                        Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                                    </p>
                                    <p class="m-0 text-[13px] leading-5 text-slate-500">
                                        Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <Button label="4K UHD" size="small" class="!border-0 !bg-sky-100 !px-2 !py-0.5 !text-xs !font-bold !text-sky-700" />
                                        <Button label="IPS-Panel" size="small" class="!border-0 !bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                                        <Button label="USB-C" size="small" class="!border-0 !bg-red-100 !px-2 !py-0.5 !text-xs !font-bold !text-red-600" />
                                        <Button label="99% sRGB" size="small" class="!border-0 !bg-orange-100 !px-2 !py-0.5 !text-xs !font-bold !text-orange-600" />
                                        <Button label="32 Zoll" size="small" class="!border-0 !bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value="specifications" class="!px-4 !py-3">
                                <p class="m-0 text-sm text-slate-600">4K UHD, IPS-Panel, USB-C und 32 Zoll Bildschirmdiagonale.</p>
                            </TabPanel>

                            <TabPanel value="reviews" class="!px-4 !py-3">
                                <p class="m-0 text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </section>

                <footer class="flex justify-end gap-2 px-4 py-2">
                    <Button label="Merken" severity="secondary" class="!bg-slate-100 !px-3 !py-2 !text-sm !text-slate-600" />
                    <Button label="In den Warenkorb" icon="pi pi-cart-plus" class="!bg-emerald-500 !px-3 !py-2 !text-sm !text-white" />
                </footer>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('description')
</script>