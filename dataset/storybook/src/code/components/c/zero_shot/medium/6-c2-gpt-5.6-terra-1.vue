<template>
    <main class="flex min-h-screen justify-center bg-white pt-6">
        <Card
            class="w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
        >
            <template #content>
                <div class="px-8 pt-2.5 pb-8">
                    <div class="flex flex-col items-center">
                        <Avatar
                            label="B"
                            shape="square"
                            class="h-24 w-24 rounded-md bg-slate-200 text-3xl font-normal text-slate-700"
                            aria-label="Benutzername"
                        />
                        <h1 class="mt-3 text-2xl font-normal leading-8 text-black">Benutzername</h1>
                    </div>

                    <Tabs v-model:value="activeTab" class="mt-8">
                        <TabList>
                            <Tab value="profile" class="flex-1 justify-center px-0 text-sm">
                                Profil
                            </Tab>
                            <Tab value="information" class="flex-1 justify-center px-0 text-sm">
                                Informationen
                            </Tab>
                            <Tab value="security" class="flex-1 justify-center px-0 text-sm">
                                Sicherheit
                            </Tab>
                            <Tab value="activity" class="flex-1 justify-center px-0 text-sm">
                                Aktivität
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel value="profile" class="p-0 pt-3">
                                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>

                            <TabPanel value="information" class="p-0 pt-3">
                                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>

                            <TabPanel value="security" class="p-0 pt-3">
                                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>

                            <TabPanel value="activity" class="p-0 pt-3">
                                <p class="m-0 text-[15px] leading-[23px] text-slate-700">
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