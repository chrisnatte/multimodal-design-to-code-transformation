<template>
    <main class="w-full max-w-[536px] p-6">
        <Card
            class="w-full overflow-hidden !rounded-xl !border !border-slate-200 !bg-white !shadow-sm"
            :pt="{
                content: { class: '!p-0' },
                footer: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-3 text-center">
                    <h1 class="m-0 text-[18px] font-medium text-white">ProDesk X500</h1>
                    <span class="text-xs font-light text-slate-400">Workstation Monitor</span>
                </div>
            </template>

            <template #content>
                <Tabs
                    v-model:value="activeTab"
                    class="w-full"
                    style="--p-tabs-tab-active-color: #10b981; --p-tabs-tab-active-border-color: #10b981"
                >
                    <TabList class="!border-b !border-slate-200 !bg-white">
                        <Tab value="description" class="!px-4 !py-3 !text-sm !font-bold">
                            Beschreibung
                        </Tab>
                        <Tab value="specifications" class="!px-4 !py-3 !text-sm !font-bold">
                            Spezifikationen
                        </Tab>
                        <Tab value="reviews" class="!px-4 !py-3 !text-sm !font-bold">
                            Bewertungen
                        </Tab>
                    </TabList>

                    <TabPanels class="!bg-white !p-0">
                        <TabPanel value="description" class="!p-0">
                            <div class="flex flex-col gap-2 px-4 pb-3 pt-3">
                                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                                </p>
                                <p class="m-0 text-xs leading-5 text-slate-500">
                                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <Tag value="4K UHD" class="!bg-sky-100 !px-2 !py-0.5 !text-xs !font-bold !text-sky-700" />
                                    <Tag value="IPS-Panel" class="!bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                                    <Tag value="USB-C" class="!bg-red-100 !px-2 !py-0.5 !text-xs !font-bold !text-red-600" />
                                    <Tag value="99% sRGB" class="!bg-orange-100 !px-2 !py-0.5 !text-xs !font-bold !text-orange-600" />
                                    <Tag value="32 Zoll" class="!bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-700" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="specifications" class="!p-0">
                            <div class="px-4 py-3"></div>
                        </TabPanel>

                        <TabPanel value="reviews" class="!p-0">
                            <div class="px-4 py-3 text-sm text-slate-700">
                                Noch keine Bewertungen vorhanden.
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </template>

            <template #footer>
                <div class="flex justify-end gap-2 px-4 py-2">
                    <Button label="Merken" severity="secondary" size="small" />
                    <Button
                        label="In den Warenkorb"
                        icon="pi pi-cart-plus"
                        size="small"
                        class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                    />
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const activeTab = ref('description')
</script>