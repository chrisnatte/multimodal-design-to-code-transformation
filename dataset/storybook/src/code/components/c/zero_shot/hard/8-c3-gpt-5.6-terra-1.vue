<template>
    <Card class="mx-6 mt-6 max-w-[488px] overflow-hidden rounded-xl shadow-sm" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }">
        <template #header>
            <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-center">
                <h1 class="m-0 text-lg font-medium text-white">ProDesk X500</h1>
                <p class="m-0 mt-0.5 text-xs text-slate-400">Workstation Monitor</p>
            </div>
        </template>

        <template #content>
            <Tabs v-model:value="activeTab" class="px-5 pt-1" :pt="{ tabpanel: { class: 'px-0 pt-3 pb-0' } }">
                <TabList>
                    <Tab value="0" class="px-0 pr-8 text-sm font-semibold">Beschreibung</Tab>
                    <Tab value="1" class="px-0 pr-8 text-sm font-semibold">Spezifikationen</Tab>
                    <Tab value="2" class="px-0 text-sm font-semibold">Bewertungen</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="0">
                        <div class="flex flex-col">
                            <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                            </p>
                            <p class="m-0 mt-2 text-xs leading-5 text-slate-500">
                                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                            </p>

                            <div class="mt-2 flex flex-wrap gap-2">
                                <Tag value="4K UHD" severity="info" class="text-xs font-bold" />
                                <Tag value="IPS-Panel" severity="success" class="text-xs font-bold" />
                                <Tag value="USB-C" severity="danger" class="text-xs font-bold" />
                                <Tag value="99% sRGB" severity="warn" class="text-xs font-bold" />
                                <Tag value="32 Zoll" severity="success" class="text-xs font-bold" />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="1">
                        <p class="m-0 text-sm text-slate-600">Technische Spezifikationen des ProDesk X500.</p>
                    </TabPanel>

                    <TabPanel value="2">
                        <p class="m-0 text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <div class="flex justify-end gap-2 px-5 pb-2 pt-7">
                <Button label="Merken" severity="secondary" size="small" />
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" size="small" />
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

const activeTab = ref('0');
</script>