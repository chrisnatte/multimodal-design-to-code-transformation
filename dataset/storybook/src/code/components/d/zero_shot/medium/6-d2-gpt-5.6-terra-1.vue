<template>
    <div class="flex min-h-[482px] w-full items-start bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #content>
                <div class="flex flex-col gap-[7px]">
                    <header class="flex h-[157px] flex-col items-center gap-3 px-2.5 py-2.5">
                        <Avatar
                            label="B"
                            size="xlarge"
                            class="!h-24 !w-24 !bg-slate-200 !text-[28px] !text-slate-700"
                            aria-label="Benutzername"
                        />
                        <h1 class="m-0 text-2xl font-normal text-slate-950">Benutzername</h1>
                    </header>

                    <div class="rounded-md p-[17.5px]">
                        <Tabs v-model:value="activeTab">
                            <TabList>
                                <Tab value="profile">Profil</Tab>
                                <Tab value="information">Informationen</Tab>
                                <Tab value="security">Sicherheit</Tab>
                                <Tab value="activity">Aktivität</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel value="profile" class="text-sm leading-[23px] text-slate-700">
                                    <p class="m-0"></p>
                                </TabPanel>

                                <TabPanel value="information" class="text-sm leading-[23px] text-slate-700">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>

                                <TabPanel value="security" class="text-sm leading-[23px] text-slate-700">
                                    <p class="m-0"></p>
                                </TabPanel>

                                <TabPanel value="activity" class="text-sm leading-[23px] text-slate-700">
                                    <p class="m-0"></p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </template>
        </Card>
    </div>
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