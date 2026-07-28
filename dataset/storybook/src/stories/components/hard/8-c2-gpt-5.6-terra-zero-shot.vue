<template>
    <main class="min-h-screen bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden border border-surface-200 shadow-sm"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-[#191a32] via-[#142543] to-[#113d69] text-center text-white">
                    <h1 class="m-0 text-xl font-medium">ProDesk X500</h1>
                    <p class="mt-0.5 text-sm text-surface-300">Workstation Monitor</p>
                </div>
            </template>

            <template #content>
                <Tabs v-model:value="activeTab">
                    <TabList>
                        <Tab value="description">Beschreibung</Tab>
                        <Tab value="specifications">Spezifikationen</Tab>
                        <Tab value="reviews">Bewertungen</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel value="description" class="px-5 pt-3 pb-2">
                            <div class="flex flex-col gap-2">
                                <p class="m-0 text-[15px] leading-[23px] text-surface-700">
                                    Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                                </p>

                                <p class="m-0 text-[13px] leading-5 text-surface-500">
                                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                                </p>

                                <div class="flex flex-wrap gap-2">
                                    <Tag value="4K UHD" severity="info" class="text-xs" />
                                    <Tag value="IPS-Panel" severity="success" class="text-xs" />
                                    <Tag value="USB-C" severity="danger" class="text-xs" />
                                    <Tag value="99% sRGB" severity="warn" class="text-xs" />
                                    <Tag value="32 Zoll" severity="success" class="text-xs" />
                                </div>

                                <div class="mt-4 flex justify-end gap-2">
                                    <Button label="Merken" severity="secondary" size="small" />
                                    <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" size="small" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="specifications">
                            <div class="px-5 py-4 text-sm text-surface-600">
                                32 Zoll IPS-Display, 4K UHD, USB-C und 99% sRGB.
                            </div>
                        </TabPanel>

                        <TabPanel value="reviews">
                            <div class="px-5 py-4 text-sm text-surface-600">
                                Noch keine Bewertungen vorhanden.
                            </div>
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