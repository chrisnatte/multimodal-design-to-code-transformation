<template>
    <main class="min-h-screen bg-white p-6">
        <Card
            class="mx-auto w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-100 shadow-sm [&_.p-card-body]:p-0 [&_.p-card-content]:p-0"
        >
            <template #content>
                <div class="flex flex-col items-center pt-2.5">
                    <Avatar
                        label="B"
                        shape="square"
                        class="h-24 w-24 rounded-md bg-slate-200 text-3xl font-normal text-slate-700"
                    />
                    <h1 class="mt-3 text-[25px] font-normal leading-8 text-surface-950">Benutzername</h1>
                </div>

                <Tabs v-model:value="activeTab" class="mt-9">
                    <TabList class="px-4">
                        <Tab value="profile" class="flex-1 justify-center text-sm font-semibold">Profil</Tab>
                        <Tab value="information" class="flex-1 justify-center text-sm font-semibold">Informationen</Tab>
                        <Tab value="security" class="flex-1 justify-center text-sm font-semibold">Sicherheit</Tab>
                        <Tab value="activity" class="flex-1 justify-center text-sm font-semibold">Aktivität</Tab>
                    </TabList>

                    <TabPanels class="px-8 pb-8 pt-4">
                        <TabPanel value="profile" class="p-0">
                            <p class="m-0 text-[15px] leading-[1.45rem] text-slate-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </TabPanel>

                        <TabPanel value="information" class="p-0">
                            <p class="m-0 text-[15px] leading-[1.45rem] text-slate-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TabPanel>

                        <TabPanel value="security" class="p-0">
                            <p class="m-0 text-[15px] leading-[1.45rem] text-slate-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </TabPanel>

                        <TabPanel value="activity" class="p-0">
                            <p class="m-0 text-[15px] leading-[1.45rem] text-slate-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('information')
</script>