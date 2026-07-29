<template>
    <main class="flex min-h-[482px] w-[536px] flex-col bg-white p-6">
        <Card
            class="w-full overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #content>
                <section class="flex h-[157px] flex-col items-center gap-3 p-2.5">
                    <Avatar
                        label="B"
                        size="xlarge"
                        class="!h-24 !w-24 !bg-slate-200 !text-[28px] !text-slate-700"
                    />
                    <h1 class="m-0 text-2xl font-normal text-black">Benutzername</h1>
                </section>

                <section class="flex flex-col gap-[7px] rounded-md p-[17.5px]">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList>
                            <Tab value="profile" class="font-bold">Profil</Tab>
                            <Tab value="information" class="font-bold">Informationen</Tab>
                            <Tab value="security" class="font-bold">Sicherheit</Tab>
                            <Tab value="activity" class="font-bold">Aktivität</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel value="profile"></TabPanel>
                            <TabPanel value="information">
                                <p class="m-0 text-sm leading-[23px] text-slate-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>
                            <TabPanel value="security"></TabPanel>
                            <TabPanel value="activity"></TabPanel>
                        </TabPanels>
                    </Tabs>
                </section>
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