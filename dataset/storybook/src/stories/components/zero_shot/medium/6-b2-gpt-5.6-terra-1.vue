<template>
    <div class="flex w-[536px] flex-col gap-[10px] bg-white p-6 font-['Inter']">
        <Card
            class="w-[488px] overflow-hidden rounded-xl shadow-none"
            style="--p-card-body-padding: 0; --p-card-body-gap: 0"
        >
            <template #header>
                <div class="mb-[7px] flex h-[157px] flex-col items-center gap-3 p-[10px]">
                    <Avatar
                        label="B"
                        size="xlarge"
                        aria-label="Benutzername"
                        class="!h-24 !w-24 !text-[28px]"
                        style="background-color: #e2e8f0; color: #000000"
                    />
                    <span class="text-[24px] font-normal leading-[29px] text-black">Benutzername</span>
                </div>
            </template>

            <template #content>
                <div class="h-[270px] rounded-md p-[17.5px]">
                    <Tabs
                        v-model:value="activeTab"
                        class="h-[235px]"
                        style="
                            --p-tabs-tablist-border-width: 0 0 1px 0;
                            --p-tabs-tablist-border-color: #e2e8f0;
                            --p-tabs-tab-padding: 0;
                            --p-tabs-tab-font-weight: 700;
                            --p-tabs-tabpanel-padding: 12.3px 15.7px;
                        "
                    >
                        <TabList class="h-[46px]">
                            <Tab value="profile" class="h-[46px] px-[15.75px] text-sm font-bold">Profil</Tab>
                            <Tab value="information" class="h-[46px] px-[15.75px] text-sm font-bold">Informationen</Tab>
                            <Tab value="security" class="h-[46px] px-[15.75px] text-sm font-bold">Sicherheit</Tab>
                            <Tab value="activity" class="h-[46px] px-[15.75px] text-sm font-bold">Aktivität</Tab>
                        </TabList>

                        <TabPanels class="h-[189px]">
                            <TabPanel value="profile" class="h-[189px]" />
                            <TabPanel value="information" class="h-[189px]">
                                <p class="m-0 text-sm font-normal leading-[20px] text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                            <TabPanel value="security" class="h-[189px]" />
                            <TabPanel value="activity" class="h-[189px]" />
                        </TabPanels>
                    </Tabs>
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