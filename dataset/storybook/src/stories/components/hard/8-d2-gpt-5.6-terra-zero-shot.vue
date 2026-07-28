<template>
    <Card
        class="w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm"
        :pt="{
            body: { class: 'p-0 gap-0' },
            content: { class: 'p-0' },
            footer: { class: 'p-0' }
        }"
    >
        <template #header>
            <div class="flex h-[124px] flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#17192d] via-[#101d37] to-[#123d6b] text-white">
                <h2 class="m-0 text-[18px] font-medium leading-tight">ProDesk X500</h2>
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
                    <TabPanel value="description" class="px-4 py-3">
                        <div class="flex flex-col gap-2">
                            <p class="m-0 text-[14px] leading-[23px] text-slate-700">
                                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                            </p>
                            <p class="m-0 text-xs leading-5 text-slate-500">
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
                        <p class="m-0 text-sm text-slate-700">32 Zoll IPS-Display mit 4K UHD Auflösung und USB-C-Thunderbolt-Anschluss.</p>
                    </TabPanel>

                    <TabPanel value="reviews" class="px-4 py-3">
                        <p class="m-0 text-sm text-slate-700">Noch keine Bewertungen vorhanden.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </template>

        <template #footer>
            <div class="flex justify-end gap-2 px-4 py-2">
                <Button label="Merken" severity="secondary" size="small" />
                <Button label="In den Warenkorb" icon="pi pi-cart-plus" size="small" />
            </div>
        </template>
    </Card>
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