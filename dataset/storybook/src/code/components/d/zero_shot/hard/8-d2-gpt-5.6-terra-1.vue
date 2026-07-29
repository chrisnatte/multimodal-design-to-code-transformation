<template>
    <main class="flex min-h-full w-full items-start justify-center bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl shadow-sm"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#17182f] via-[#102646] to-[#0b4a7a] px-3 text-white">
                    <h1 class="m-0 text-[18px] font-medium leading-tight">ProDesk X500</h1>
                    <span class="text-xs font-light text-slate-300">Workstation Monitor</span>
                </div>
            </template>

            <template #content>
                <Tabs v-model:value="activeTab">
                    <TabList>
                        <Tab value="description" class="text-sm font-bold">Beschreibung</Tab>
                        <Tab value="specifications" class="text-sm font-bold">Spezifikationen</Tab>
                        <Tab value="reviews" class="text-sm font-bold">Bewertungen</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel value="description" class="px-4 pb-0 pt-3">
                            <div class="flex flex-col gap-2">
                                <p class="m-0 text-[15px] leading-[1.55] text-slate-700">
                                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                                </p>
                                <p class="m-0 text-xs leading-[1.7] text-slate-500">
                                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <Tag value="4K UHD" severity="info" class="text-xs" />
                                    <Tag value="IPS-Panel" severity="success" class="text-xs" />
                                    <Tag value="USB-C" severity="danger" class="text-xs" />
                                    <Tag value="99% sRGB" severity="warn" class="text-xs" />
                                    <Tag value="32 Zoll" severity="success" class="text-xs" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="specifications" class="px-4 py-3">
                            <p class="m-0 text-sm text-slate-600"></p>
                        </TabPanel>

                        <TabPanel value="reviews" class="px-4 py-3">
                            <p class="m-0 text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <div class="flex justify-end gap-2 px-4 py-2">
                    <Button
                        label="Merken"
                        severity="secondary"
                        size="small"
                        class="!border-slate-100 !bg-slate-100 !text-slate-600"
                    />
                    <Button
                        label="In den Warenkorb"
                        icon="pi pi-cart-plus"
                        size="small"
                        class="!border-emerald-500 !bg-emerald-500 !text-white"
                    />
                </div>
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