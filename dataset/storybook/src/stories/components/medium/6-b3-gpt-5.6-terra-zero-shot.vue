<template>
    <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
        <div class="flex h-[157px] flex-col items-center gap-3 p-2.5">
            <Avatar
                label="B"
                size="xlarge"
                class="!h-24 !w-24 !bg-[#e2e8f0] !text-[28px]"
                aria-label="Benutzername"
            />
            <span class="text-[24px] font-normal leading-[29px]">Benutzername</span>
        </div>

        <div class="flex flex-col gap-[7px] rounded-md p-[17.5px]">
            <Tabs v-model:value="activeTab" class="w-full">
                <TabList>
                    <Tab value="0" class="font-bold">Profil</Tab>
                    <Tab value="1" class="font-bold">Informationen</Tab>
                    <Tab value="2" class="font-bold">Sicherheit</Tab>
                    <Tab value="3" class="font-bold">Aktivität</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="1" class="px-4 py-3">
                        <p class="m-0 text-[14px] font-normal leading-[20px]">
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
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('1')
</script>