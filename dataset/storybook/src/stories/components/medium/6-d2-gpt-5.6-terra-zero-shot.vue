<template>
    <main class="min-h-screen bg-white p-6">
        <Card
            class="h-[434px] w-[488px] overflow-hidden border border-slate-100 shadow-sm"
            :pt="{
                body: { class: '!p-0 !gap-0 h-full' },
                content: { class: '!p-0 h-full' }
            }"
        >
            <template #content>
                <div class="flex h-full flex-col gap-[7px]">
                    <header class="flex h-[157px] flex-col items-center gap-3 px-2.5 py-2.5">
                        <Avatar
                            label="B"
                            size="xlarge"
                            aria-label="Benutzername"
                            class="!h-24 !w-24 !text-[28px] !text-slate-700"
                            style="background-color: #e2e8f0"
                        />
                        <h1 class="m-0 text-2xl font-normal text-black">Benutzername</h1>
                    </header>

                    <section class="flex flex-1 flex-col p-[17.5px]">
                        <Tabs v-model:value="activeTab" class="w-full">
                            <TabList>
                                <Tab value="profile">Profil</Tab>
                                <Tab value="information">Informationen</Tab>
                                <Tab value="security">Sicherheit</Tab>
                                <Tab value="activity">Aktivität</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel value="profile" />
                                <TabPanel value="information">
                                    <p class="m-0 text-sm font-normal leading-[23px] text-slate-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>
                                <TabPanel value="security" />
                                <TabPanel value="activity" />
                            </TabPanels>
                        </Tabs>
                    </section>
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('information');
</script>