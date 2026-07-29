<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card
            class="h-[420px] w-full max-w-[488px] overflow-hidden border border-surface-200 shadow-sm"
            :pt="{
                body: { class: '!p-0 !gap-0' },
                content: { class: '!p-0' },
                footer: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
                    <h1 class="m-0 text-lg font-medium leading-tight">ProDesk X500</h1>
                    <p class="m-0 mt-1 text-xs text-slate-400">Workstation Monitor</p>
                </div>
            </template>

            <template #content>
                <Tabs v-model:value="activeTab">
                    <TabList class="px-1">
                        <Tab value="description">Beschreibung</Tab>
                        <Tab value="specifications">Spezifikationen</Tab>
                        <Tab value="reviews">Bewertungen</Tab>
                    </TabList>
                </Tabs>

                <section class="px-4 pt-3">
                    <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                        Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                        32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                        kreative Profis und Entwickler, die höchste Farbtreue und
                        ergonomisches Arbeiten benötigen.
                    </p>

                    <p class="m-0 mt-2 text-xs leading-5 text-slate-500">
                        Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-
                        Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                    </p>

                    <div class="mt-2 flex flex-wrap gap-1.5">
                        <Tag value="4K UHD" severity="info" class="text-xs" />
                        <Tag value="IPS-Panel" severity="success" class="text-xs" />
                        <Tag value="USB-C" severity="danger" class="text-xs" />
                        <Tag value="99% sRGB" severity="warn" class="text-xs" />
                        <Tag value="32 Zoll" severity="success" class="text-xs" />
                    </div>
                </section>
            </template>

            <template #footer>
                <div class="flex justify-end gap-2 px-5 pt-6">
                    <Button label="Merken" severity="secondary" variant="outlined" size="small" />
                    <Button label="In den Warenkorb" icon="pi pi-shopping-cart" size="small" />
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
import Tabs from 'primevue/tabs';
import Tag from 'primevue/tag';

const activeTab = ref('description');
</script>