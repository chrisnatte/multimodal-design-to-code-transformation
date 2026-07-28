<template>
    <main class="flex min-h-screen items-start justify-center bg-white px-6 pt-6">
        <Card class="w-full max-w-xl overflow-hidden">
            <template #content>
                <div class="flex flex-col items-center pt-1">
                    <Avatar
                        label="B"
                        class="h-24 w-24 text-3xl text-slate-700"
                        style="background-color: #e2e8f0"
                    />
                    <h1 class="mt-3 text-2xl font-normal text-black">Benutzername</h1>
                </div>

                <Tabs v-model:value="activeTab" class="mt-12">
                    <TabList>
                        <Tab value="profile">Profil</Tab>
                        <Tab value="information">Informationen</Tab>
                        <Tab value="security">Sicherheit</Tab>
                        <Tab value="activity">Aktivität</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel value="profile">
                            <p class="m-0 leading-[1.45] text-slate-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </TabPanel>
                        <TabPanel value="information" />
                        <TabPanel value="security" />
                        <TabPanel value="activity" />
                    </TabPanels>
                </Tabs>
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