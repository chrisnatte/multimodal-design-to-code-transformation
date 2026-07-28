<template>
    <main class="flex min-h-screen items-center justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }">
            <template #content>
                <div class="pt-2">
                    <div class="flex flex-col items-center pt-0">
                        <Avatar label="B" shape="square" class="!h-24 !w-24 !rounded-md !bg-slate-200 !text-3xl !text-slate-700" />
                        <h1 class="mb-10 mt-3 text-2xl font-normal text-black">Benutzername</h1>
                    </div>

                    <Tabs v-model:value="activeTab">
                        <TabList class="px-4">
                            <Tab value="profile" class="font-semibold">Profil</Tab>
                            <Tab value="information" class="font-semibold">Informationen</Tab>
                            <Tab value="security" class="font-semibold">Sicherheit</Tab>
                            <Tab value="activity" class="font-semibold">Aktivität</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel value="profile">
                                <p class="m-0 px-4 pb-8 pt-3 leading-[1.45] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                            <TabPanel value="information">
                                <p class="m-0 px-4 pb-8 pt-3 leading-[1.45] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                            <TabPanel value="security">
                                <p class="m-0 px-4 pb-8 pt-3 leading-[1.45] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                            <TabPanel value="activity">
                                <p class="m-0 px-4 pb-8 pt-3 leading-[1.45] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
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