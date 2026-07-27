<template>
    <div class="flex h-[434px] w-[488px] flex-col gap-[7px] overflow-hidden rounded-xl bg-white">
        <div class="flex h-[157px] flex-col items-center gap-3 px-2.5 py-2.5">
            <Avatar
                label="B"
                size="xlarge"
                aria-label="Benutzername"
                class="bg-[#e2e8f0] text-[28px] text-slate-900"
                :pt="{ root: { class: 'h-24 w-24 text-[28px]' } }"
            />
            <span class="text-[24px] font-normal leading-[29px] text-slate-900">Benutzername</span>
        </div>

        <div class="h-[270px] rounded-md px-[17.5px] py-[17.5px]">
            <Tabs v-model:value="activeTab" class="h-full">
                <TabList>
                    <Tab value="profile" class="text-[14px] font-bold">Profil</Tab>
                    <Tab value="information" class="text-[14px] font-bold">Informationen</Tab>
                    <Tab value="security" class="text-[14px] font-bold">Sicherheit</Tab>
                    <Tab value="activity" class="text-[14px] font-bold">Aktivität</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="information" class="px-[15.7px] py-[12.3px]">
                        <p class="m-0 text-[14px] font-normal leading-[21px] text-slate-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('information');
</script>