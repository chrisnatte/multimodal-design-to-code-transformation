<template>
    <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="w-full overflow-hidden rounded-xl"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #content>
                <div class="flex flex-col gap-[7px]">
                    <div class="flex flex-col items-center gap-3 px-2.5 py-2.5">
                        <Avatar label="B" size="xlarge" class="!h-24 !w-24 !bg-slate-200 !text-[28px]" />
                        <span class="text-2xl font-normal">Benutzername</span>
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
                                <TabPanel value="1">
                                    <p class="m-0 text-sm font-normal leading-[23px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
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