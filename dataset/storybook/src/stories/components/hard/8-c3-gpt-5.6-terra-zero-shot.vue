<template>
    <main class="flex min-h-screen items-center justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden shadow-sm">
            <template #header>
                <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
                    <h1 class="m-0 text-lg font-semibold">ProDesk X500</h1>
                    <p class="mt-0.5 text-xs text-slate-400">Workstation Monitor</p>
                </div>
            </template>

            <template #content>
                <Tabs v-model:value="activeTab">
                    <TabList>
                        <Tab value="description" class="font-semibold">Beschreibung</Tab>
                        <Tab value="specifications" class="font-semibold">Spezifikationen</Tab>
                        <Tab value="reviews" class="font-semibold">Bewertungen</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel value="description" class="px-0 pb-0 pt-3">
                            <div class="flex flex-col gap-2">
                                <p class="m-0 text-[15px] leading-[1.55] text-slate-700">
                                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                                </p>

                                <p class="m-0 text-xs leading-5 text-slate-500">
                                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                                </p>

                                <div class="flex flex-wrap gap-2">
                                    <Tag value="4K UHD" severity="info" class="text-xs font-bold" />
                                    <Tag value="IPS-Panel" severity="success" class="text-xs font-bold" />
                                    <Tag value="USB-C" severity="danger" class="text-xs font-bold" />
                                    <Tag value="99% sRGB" severity="warn" class="text-xs font-bold" />
                                    <Tag value="32 Zoll" severity="success" class="text-xs font-bold" />
                                </div>

                                <div class="mt-4 flex justify-end gap-2">
                                    <Button label="Merken" severity="secondary" variant="text" />
                                    <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="specifications">
                            <p class="m-0 text-sm text-slate-600">Technische Spezifikationen</p>
                        </TabPanel>

                        <TabPanel value="reviews">
                            <p class="m-0 text-sm text-slate-600">Kundenbewertungen</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tag from 'primevue/tag';

const activeTab = ref('description');
</script>