<template>
    <main class="flex min-h-screen items-start justify-center bg-white pt-6">
        <Card class="h-[435px] w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm [&_.p-card-body]:p-0 [&_.p-card-content]:p-0">
            <template #content>
                <div class="flex h-full flex-col gap-[7px]">
                    <header class="flex h-[157px] flex-col items-center gap-3 px-[10px] py-[10px]">
                        <Avatar
                            label="B"
                            size="xlarge"
                            class="!h-24 !w-24 !bg-slate-200 !text-[28px] !font-normal !text-slate-700"
                        />
                        <h1 class="m-0 text-2xl font-normal leading-[29px] text-black">Benutzername</h1>
                    </header>

                    <section class="h-[270px] px-[17.5px] py-[17.5px]">
                        <Tabs
                            v-model:value="activeTab"
                            class="h-[235px] [&_.p-tab-active]:!text-emerald-500 [&_.p-tablist-active-bar]:!bg-emerald-400"
                        >
                            <TabList class="!h-[46px] !border-slate-200">
                                <Tab value="0" class="!h-[46px] !px-4 !py-0 !text-sm !font-bold">Profil</Tab>
                                <Tab value="1" class="!h-[46px] !px-4 !py-0 !text-sm !font-bold">Informationen</Tab>
                                <Tab value="2" class="!h-[46px] !px-4 !py-0 !text-sm !font-bold">Sicherheit</Tab>
                                <Tab value="3" class="!h-[46px] !px-4 !py-0 !text-sm !font-bold">Aktivität</Tab>
                            </TabList>

                            <TabPanels class="!h-[189px] !p-0">
                                <TabPanel value="0" class="!p-0">
                                    <p class="m-0 px-4 pt-3 text-sm font-normal leading-[23px] text-slate-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>
                                <TabPanel value="1" class="!p-0">
                                    <p class="m-0 px-4 pt-3 text-sm font-normal leading-[23px] text-slate-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>
                                <TabPanel value="2" class="!p-0">
                                    <p class="m-0 px-4 pt-3 text-sm font-normal leading-[23px] text-slate-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>
                                <TabPanel value="3" class="!p-0">
                                    <p class="m-0 px-4 pt-3 text-sm font-normal leading-[23px] text-slate-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </section>
                </div>
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

const activeTab = ref('1')
</script>